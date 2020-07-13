const { Schema, model } = require('mongoose');

const ShippingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Shipping', ShippingSchema);
