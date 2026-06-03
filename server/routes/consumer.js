const express = require('express');
const { bookings, complaints, drivers, generateId, serviceRequests, trucks, users } = require('../data/memoryStore');
const { isMongoConnected } = require('../config/db');
const { ServiceRequest, Booking } = require('../models/Booking');
const Complaint = require('../models/Complaint');
const Truck = require('../models/Truck');
const { protect } = require('../middleware/auth');
const { validateComplaint, validateServiceRequest } = require('../utils/validation');

const router = express.Router();

function estimatePrice(payload) {
  const base = {
    tempo: 4200,
    mini_truck: 7600,
    medium_truck: 11200,
    full_truck: 14500,
    trailer: 19000,
  }[payload.vehicle_type_preference] || 7600;
  return base + Math.round(Number(payload.cargo_weight || 1200) * 0.35);
}

function formatBooking(booking) {
  return {
    id: String(booking._id || booking.id),
    status: booking.status,
    final_price: booking.final_price,
    advance_paid: Boolean(booking.advance_paid),
    full_payment_paid: Boolean(booking.full_payment_paid),
    service_request_details: booking.service_request_details,
    driver_details: booking.driver_details,
    vehicle_details: booking.vehicle_details,
  };
}

router.post('/requests', protect, async (req, res) => {
  try {
    validateServiceRequest(req.body);
    const price = estimatePrice(req.body);

    if (isMongoConnected()) {
      const request = await ServiceRequest.create({
        ...req.body,
        customer: req.user.id,
        ml_suggested_price: price,
        route_details: {
          pickup_contact_name: req.body.pickup_contact_name || '',
          pickup_contact_phone: req.body.pickup_contact_phone || '',
          drop_contact_name: req.body.drop_contact_name || '',
          drop_contact_phone: req.body.drop_contact_phone || '',
          estimated_distance_km: Number(req.body.estimated_distance_km || 0),
        },
        cargo_items: req.body.cargo_items || [],
      });
      return res.status(201).json({ ...request.toObject(), id: String(request._id) });
    }

    const request = {
      id: generateId('request'),
      ...req.body,
      customer: req.user.id,
      status: 'pending',
      ml_suggested_price: price,
      route_details: {
        pickup_contact_name: req.body.pickup_contact_name || '',
        pickup_contact_phone: req.body.pickup_contact_phone || '',
        drop_contact_name: req.body.drop_contact_name || '',
        drop_contact_phone: req.body.drop_contact_phone || '',
        estimated_distance_km: Number(req.body.estimated_distance_km || 0),
      },
      cargo_items: req.body.cargo_items || [],
      createdAt: new Date().toISOString(),
    };
    serviceRequests.unshift(request);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get('/requests/:id/drivers', protect, async (req, res) => {
  if (isMongoConnected()) {
    const request = await ServiceRequest.findById(req.params.id).lean();
    if (!request) return res.status(404).json({ error: 'Service request not found.' });
    const availableTrucks = await Truck.find({
      vehicle_type: request.vehicle_type_preference,
      status: 'available',
    }).lean();
    return res.json({
      service_request_id: String(request._id),
      ml_suggested_price: request.ml_suggested_price,
      available_drivers: availableTrucks.map((truck) => ({
        id: String(truck.contractor),
        name: 'Fleet approved driver',
        contractor_name: 'Fleet owner',
        assigned_vehicles: [{ ...truck, id: String(truck._id) }],
      })),
    });
  }

  const request = serviceRequests.find((item) => item.id === req.params.id);
  if (!request) return res.status(404).json({ error: 'Service request not found.' });
  const availableDrivers = drivers
    .map((driver) => {
      const truck = trucks.find((item) => item.id === driver.assigned_vehicle);
      return { driver, truck };
    })
    .filter(({ driver, truck }) => driver.status === 'available' && truck?.status === 'available' && truck.vehicle_type === request.vehicle_type_preference)
    .map(({ driver, truck }) => ({
      id: driver.id,
      name: driver.name,
      average_rating: driver.average_rating,
      driver_points: driver.driver_points,
      assigned_vehicles: [{ ...truck, id: truck.id }],
    }));

  return res.json({
    service_request_id: request.id,
    ml_suggested_price: request.ml_suggested_price,
    available_drivers: availableDrivers,
  });
});

router.post('/bookings', protect, async (req, res) => {
  try {
    if (isMongoConnected()) {
      const request = await ServiceRequest.findById(req.body.service_request).lean();
      const truck = await Truck.findById(req.body.vehicle).lean();
      if (!request || !truck) return res.status(404).json({ error: 'Request or truck not found.' });
      const booking = await Booking.create({
        service_request: request._id,
        customer: req.user.id,
        contractor: truck.contractor,
        vehicle: truck._id,
        final_price: Number(req.body.final_price || request.ml_suggested_price || 0),
        pool_message: 'Pooling scan active for nearby compatible cargo lanes.',
        assignment: {
          driver_name: 'Fleet approved driver',
          vehicle_registration: truck.registration_number,
          fleet_note: 'Awaiting fleet-owner confirmation.',
        },
        payment_breakdown: {
          advance_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.2),
          remaining_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.8),
          driver_payout_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.42),
        },
        status_history: [{ status: 'awaiting_acceptance', note: 'Customer submitted booking request.' }],
      });
      return res.status(201).json({ ...booking.toObject(), id: String(booking._id) });
    }

    const request = serviceRequests.find((item) => item.id === req.body.service_request);
    const truck = trucks.find((item) => item.id === req.body.vehicle);
    if (!request || !truck) return res.status(404).json({ error: 'Request or truck not found.' });
    const driver = drivers.find((item) => item.assigned_vehicle === truck.id);
    const booking = {
      id: generateId('booking'),
      service_request: request.id,
      customer: req.user.id,
      contractor: truck.contractor,
      vehicle: truck.id,
      driver: driver?.id,
      final_price: Number(req.body.final_price || request.ml_suggested_price || 0),
      status: 'awaiting_acceptance',
      advance_paid: false,
      full_payment_paid: false,
      pool_message: 'Pooling scan active for nearby compatible cargo lanes.',
      assignment: {
        driver_name: driver?.name || 'Fleet approved driver',
        vehicle_registration: truck.registration_number,
        fleet_note: 'Awaiting fleet-owner confirmation.',
      },
      payment_breakdown: {
        advance_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.2),
        remaining_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.8),
        driver_payout_amount: Math.round(Number(req.body.final_price || request.ml_suggested_price || 0) * 0.42),
      },
      status_history: [{ status: 'awaiting_acceptance', note: 'Customer submitted booking request.' }],
      createdAt: new Date().toISOString(),
    };
    bookings.unshift(booking);
    request.status = 'driver_selected';
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get('/bookings/list', protect, async (req, res) => {
  if (isMongoConnected()) {
    const records = await Booking.find({ customer: req.user.id }).populate('service_request').populate('vehicle').lean();
    return res.json(records.map((booking) => formatBooking({
      ...booking,
      service_request_details: booking.service_request,
      vehicle_details: booking.vehicle,
    })));
  }

  const records = bookings.filter((booking) => booking.customer === req.user.id);
  return res.json(records.map((booking) => {
    const request = serviceRequests.find((item) => item.id === booking.service_request);
    const truck = trucks.find((item) => item.id === booking.vehicle);
    return formatBooking({
      ...booking,
      service_request_details: request,
      vehicle_details: truck,
    });
  }));
});

router.get('/complaints', protect, async (req, res) => {
  if (isMongoConnected()) {
    const records = await Complaint.find({ customer: req.user.id }).lean();
    return res.json(records.map((item) => ({ ...item, id: String(item._id) })));
  }
  return res.json(complaints.filter((item) => item.customer === req.user.id));
});

router.post('/complaints', protect, async (req, res) => {
  try {
    validateComplaint(req.body);
    if (isMongoConnected()) {
      const complaint = await Complaint.create({ ...req.body, customer: req.user.id });
      return res.status(201).json({ ...complaint.toObject(), id: String(complaint._id) });
    }
    const complaint = {
      id: generateId('complaint'),
      customer: req.user.id,
      booking: req.body.booking || null,
      title: req.body.title,
      detail: req.body.detail,
      status: 'open',
      conversation: [{ by: 'customer', message: req.body.detail, created_at: new Date().toISOString() }],
      resolution: {
        resolved_by: '',
        resolution_note: '',
        resolved_at: null,
      },
      createdAt: new Date().toISOString(),
    };
    complaints.unshift(complaint);
    return res.status(201).json(complaint);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
