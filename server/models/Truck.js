const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema(
  {
    contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    registration_number: { type: String, required: true, unique: true },
    vehicle_type: {
      type: String,
      enum: ['mini_truck', 'medium_truck', 'full_truck', 'trailer', 'tempo'],
      required: true,
    },
    capacity_weight: { type: Number, required: true },
    model_make: { type: String, required: true },
    fuel_type: { type: String, enum: ['diesel', 'cng', 'electric'], default: 'diesel' },
    current_location: { type: String, default: '' },
    status: { type: String, enum: ['available', 'in_use', 'maintenance'], default: 'available' },
    specifications: {
      capacity_cubic_feet: { type: Number, default: 0 },
      axles: { type: Number, default: 2 },
      body_style: { type: String, default: 'closed' },
    },
    safety_compliance: {
      insurance_policy_number: { type: String, default: '' },
      permit_number: { type: String, default: '' },
      fitness_valid_until: { type: Date, default: null },
      gps_enabled: { type: Boolean, default: true },
    },
    service_history: {
      type: [
        {
          note: { type: String, required: true },
          serviced_on: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Truck', truckSchema);
