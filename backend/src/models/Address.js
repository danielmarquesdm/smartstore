const { Schema, model } = require('mongoose');

const AddressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Address', AddressSchema);
