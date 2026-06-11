const express = require('express');
const { bookings, drivers, generateId, serviceRequests, trucks, users } = require('../data/memoryStore');
const { isMongoConnected } = require('../config/db');
const { Booking } = require('../models/Booking');
const Truck = require('../models/Truck');
const { protect } = require('../middleware/auth');
const { validateTruck } = require('../utils/validation');
const { appendTruck } = require('../utils/excelLogger');

const router = express.Router();

function requireContractor(req, res, next) {
  if (req.user.user_type !== 'contractor') {
    return res.status(403).json({ error: 'Fleet owner access required.' });
  }
  return next();
}

router.get('/vehicles', protect, requireContractor, async (req, res) => {
  if (isMongoConnected()) {
    const records = await Truck.find({ contractor: req.user.id }).lean();
    return res.json(records.map((truck) => ({ ...truck, id: String(truck._id) })));
  }
  return res.json(trucks.filter((truck) => truck.contractor === req.user.id));
});

router.post('/vehicles', protect, requireContractor, async (req, res) => {
  try {
    validateTruck(req.body);
    if (isMongoConnected()) {
      const truck = await Truck.create({
        ...req.body,
        contractor: req.user.id,
        registration_number: String(req.body.registration_number).toUpperCase(),
        specifications: {
          capacity_cubic_feet: Number(req.body.capacity_cubic_feet || 0),
          axles: Number(req.body.axles || 2),
          body_style: req.body.body_style || 'closed',
        },
        safety_compliance: {
          insurance_policy_number: req.body.insurance_policy_number || '',
          permit_number: req.body.permit_number || '',
          fitness_valid_until: req.body.fitness_valid_until || null,
          gps_enabled: req.body.gps_enabled ?? true,
        },
        service_history: [{ note: 'Vehicle onboarded to fleet.', serviced_on: new Date() }],
      });
      appendTruck({ ...truck.toObject(), id: String(truck._id) });
      return res.status(201).json({ ...truck.toObject(), id: String(truck._id) });
    }
    const truck = {
      id: generateId('truck'),
      contractor: req.user.id,
      registration_number: String(req.body.registration_number).toUpperCase(),
      vehicle_type: req.body.vehicle_type,
      capacity_weight: Number(req.body.capacity_weight),
      model_make: req.body.model_make,
      fuel_type: req.body.fuel_type || 'diesel',
      current_location: req.body.current_location || '',
      status: 'available',
      specifications: {
        capacity_cubic_feet: Number(req.body.capacity_cubic_feet || 0),
        axles: Number(req.body.axles || 2),
        body_style: req.body.body_style || 'closed',
      },
      safety_compliance: {
        insurance_policy_number: req.body.insurance_policy_number || '',
        permit_number: req.body.permit_number || '',
        fitness_valid_until: req.body.fitness_valid_until || null,
        gps_enabled: req.body.gps_enabled ?? true,
      },
      service_history: [{ note: 'Vehicle onboarded to fleet.', serviced_on: new Date().toISOString() }],
    };
    trucks.unshift(truck);
    appendTruck(truck);
    return res.status(201).json(truck);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get('/bookings', protect, requireContractor, async (req, res) => {
  if (isMongoConnected()) {
    const records = await Booking.find({ contractor: req.user.id }).populate('service_request').populate('vehicle').lean();
    return res.json(records.map((booking) => ({
      ...booking,
      id: String(booking._id),
      service_request_details: booking.service_request,
      vehicle_details: booking.vehicle,
    })));
  }

  return res.json(bookings.filter((booking) => booking.contractor === req.user.id).map((booking) => {
    const request = serviceRequests.find((item) => item.id === booking.service_request);
    const truck = trucks.find((item) => item.id === booking.vehicle);
    const driver = drivers.find((item) => item.id === booking.driver);
    const customer = users.find((item) => item.id === booking.customer);
    return {
      ...booking,
      service_request_details: {
        ...request,
        customer_name: customer ? `${customer.first_name} ${customer.last_name}` : 'Customer',
      },
      vehicle_details: truck,
      driver_details: driver,
    };
  }));
});

router.post('/bookings/:id/decision', protect, requireContractor, async (req, res) => {
  const action = req.body.action;
  if (!['accept', 'reject'].includes(action)) {
    return res.status(400).json({ error: 'Action must be accept or reject.' });
  }

  if (isMongoConnected()) {
    const booking = await Booking.findOne({ _id: req.params.id, contractor: req.user.id });
    if (!booking) return res.status(404).json({ error: 'Booking not found.' });
    booking.status = action === 'accept' ? 'accepted' : 'rejected';
    await booking.save();
    if (action === 'accept') {
      await Truck.findByIdAndUpdate(booking.vehicle, { status: 'in_use' });
    }
    return res.json({ id: String(booking._id), status: booking.status });
  }

  const booking = bookings.find((item) => item.id === req.params.id && item.contractor === req.user.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found.' });
    booking.status = action === 'accept' ? 'accepted' : 'rejected';
    booking.status_history = [
      ...(booking.status_history || []),
      {
        status: booking.status,
        note: action === 'accept' ? 'Fleet owner accepted the request.' : 'Fleet owner rejected the request.',
        changed_at: new Date().toISOString(),
      },
    ];
    if (action === 'accept') {
      const truck = trucks.find((item) => item.id === booking.vehicle);
      if (truck) truck.status = 'in_use';
    }
  return res.json(booking);
});

module.exports = router;
