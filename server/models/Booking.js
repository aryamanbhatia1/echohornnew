const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pickup_address: { type: String, required: true },
    drop_address: { type: String, required: true },
    vehicle_type_preference: { type: String, required: true },
    pickup_datetime: { type: Date, required: true },
    cargo_type: { type: String, default: 'general' },
    cargo_weight: { type: Number, default: 1200 },
    special_notes: { type: String, default: '' },
    route_details: {
      pickup_contact_name: { type: String, default: '' },
      pickup_contact_phone: { type: String, default: '' },
      drop_contact_name: { type: String, default: '' },
      drop_contact_phone: { type: String, default: '' },
      estimated_distance_km: { type: Number, default: 0 },
    },
    cargo_items: {
      type: [
        {
          item_name: { type: String, required: true },
          quantity: { type: Number, default: 1 },
          fragile: { type: Boolean, default: false },
        },
      ],
      default: [],
    },
    status: { type: String, enum: ['pending', 'driver_selected', 'confirmed', 'completed'], default: 'pending' },
    ml_suggested_price: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const bookingSchema = new mongoose.Schema(
  {
    service_request: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Truck', required: true },
    final_price: { type: Number, required: true },
    status: {
      type: String,
      enum: ['awaiting_acceptance', 'accepted', 'rejected', 'in_progress', 'completed', 'cancelled'],
      default: 'awaiting_acceptance',
    },
    advance_paid: { type: Boolean, default: false },
    full_payment_paid: { type: Boolean, default: false },
    pool_message: { type: String, default: '' },
    assignment: {
      driver_name: { type: String, default: '' },
      vehicle_registration: { type: String, default: '' },
      fleet_note: { type: String, default: '' },
    },
    payment_breakdown: {
      advance_amount: { type: Number, default: 0 },
      remaining_amount: { type: Number, default: 0 },
      driver_payout_amount: { type: Number, default: 0 },
    },
    status_history: {
      type: [
        {
          status: { type: String, required: true },
          note: { type: String, default: '' },
          changed_at: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = {
  ServiceRequest: mongoose.model('ServiceRequest', serviceRequestSchema),
  Booking: mongoose.model('Booking', bookingSchema),
};
