const mongoose, { Schema, model } = require('mongoose');
require('mongoose-type-email');

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Client', ClientSchema);
