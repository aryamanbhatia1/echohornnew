const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', default: null },
    title: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: String, enum: ['open', 'in_review', 'resolved'], default: 'open' },
    conversation: {
      type: [
        {
          by: { type: String, required: true },
          message: { type: String, required: true },
          created_at: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    resolution: {
      resolved_by: { type: String, default: '' },
      resolution_note: { type: String, default: '' },
      resolved_at: { type: Date, default: null },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Complaint', complaintSchema);
