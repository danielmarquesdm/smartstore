const { Schema, model } = require('mongoose');

const PaymentMethodSchema = new Schema(
  {
    method: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('PaymentMethod', PaymentMethodSchema);
