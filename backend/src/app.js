const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.connect();
    this.middlewares();
    this.routes();
  }

  connect() {
    mongoose.connect(
      'mongodb+srv://smartstore:smartstore@cluster0-rlvhh.gcp.mongodb.net/smartstore?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
