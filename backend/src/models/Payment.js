const { Schema, model } = require('mongoose');

const PaymentSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Payment', PaymentSchema);
