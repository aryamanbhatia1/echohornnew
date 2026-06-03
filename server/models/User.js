const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    user_type: { type: String, enum: ['consumer', 'driver', 'contractor'], required: true },
    company_name: { type: String, default: '' },
    profile: {
      region: { type: String, default: '' },
      address: { type: String, default: '' },
      preferred_routes: { type: [String], default: [] },
      documents_verified: { type: Boolean, default: false },
    },
    activity_log: {
      type: [
        {
          event: { type: String, required: true },
          source: { type: String, default: 'app' },
          timestamp: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
