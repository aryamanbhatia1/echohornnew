const express = require('express');
const { bookings, complaints, serviceRequests, trucks, users } = require('../data/memoryStore');
const { isMongoConnected } = require('../config/db');
const { Booking } = require('../models/Booking');
const Complaint = require('../models/Complaint');
const Truck = require('../models/Truck');
const { protect } = require('../middleware/auth');

const router = express.Router();

function groupTrucks(records) {
  return Object.values(records.reduce((acc, truck) => {
    const key = truck.vehicle_type;
    if (!acc[key]) {
      acc[key] = { vehicle_type: key, total: 0, available: 0, in_use: 0, maintenance: 0 };
    }
    acc[key].total += 1;
    if (truck.status === 'available') acc[key].available += 1;
    if (truck.status === 'in_use') acc[key].in_use += 1;
    if (truck.status === 'maintenance') acc[key].maintenance += 1;
    return acc;
  }, {}));
}

router.get('/admin/insights', protect, async (req, res) => {
  if (!['contractor', 'admin'].includes(req.user.user_type)) {
    return res.status(403).json({ error: 'Employee backend access required.' });
  }

  if (isMongoConnected()) {
    const [bookingRecords, complaintRecords, truckRecords] = await Promise.all([
      Booking.find().populate('service_request').populate('contractor').lean(),
      Complaint.find().populate('customer').lean(),
      Truck.find().lean(),
    ]);

    return res.json({
      totals: {
        service_requests: bookingRecords.length,
        pending_approvals: bookingRecords.filter((item) => item.status === 'awaiting_acceptance').length,
        vehicles_on_board: truckRecords.length,
        open_complaints: complaintRecords.filter((item) => item.status !== 'resolved').length,
      },
      truck_categories: groupTrucks(truckRecords),
      booking_requests: bookingRecords.map((booking) => ({
        id: String(booking._id),
        status: booking.status,
        final_price: booking.final_price,
        service_request__pickup_address: booking.service_request?.pickup_address,
        service_request__drop_address: booking.service_request?.drop_address,
        service_request__vehicle_type_preference: booking.service_request?.vehicle_type_preference,
        service_request__customer__first_name: 'Customer',
        service_request__customer__last_name: '',
        contractor__first_name: booking.contractor?.first_name,
        contractor__last_name: booking.contractor?.last_name,
      })),
      complaints: complaintRecords.map((complaint) => ({
        id: String(complaint._id),
        title: complaint.title,
        detail: complaint.detail,
        status: complaint.status,
        customer__first_name: complaint.customer?.first_name,
        customer__last_name: complaint.customer?.last_name,
      })),
      safety_watchlist: [],
    });
  }

  return res.json({
    totals: {
      service_requests: serviceRequests.length,
      pending_approvals: bookings.filter((item) => item.status === 'awaiting_acceptance').length,
      vehicles_on_board: trucks.length,
      open_complaints: complaints.filter((item) => item.status !== 'resolved').length,
    },
    truck_categories: groupTrucks(trucks),
    booking_requests: bookings.map((booking) => {
      const request = serviceRequests.find((item) => item.id === booking.service_request);
      const customer = users.find((item) => item.id === booking.customer);
      const contractor = users.find((item) => item.id === booking.contractor);
      return {
        id: booking.id,
        status: booking.status,
        final_price: booking.final_price,
        service_request__pickup_address: request?.pickup_address,
        service_request__drop_address: request?.drop_address,
        service_request__vehicle_type_preference: request?.vehicle_type_preference,
        service_request__customer__first_name: customer?.first_name,
        service_request__customer__last_name: customer?.last_name,
        contractor__first_name: contractor?.first_name,
        contractor__last_name: contractor?.last_name,
      };
    }),
    complaints: complaints.map((complaint) => {
      const customer = users.find((item) => item.id === complaint.customer);
      return {
        ...complaint,
        customer__first_name: customer?.first_name,
        customer__last_name: customer?.last_name,
      };
    }),
    safety_watchlist: [],
  });
});

module.exports = router;
