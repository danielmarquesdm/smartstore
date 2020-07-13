const { Schema, model } = require('mongoose');
const PaymentSchema = require('./Payment');
const ProductSchema = require('./Product');

const ReportSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productAmount: {
    type: Number,
    required: true,
  },
  productSubTotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});
