const Client = require('../classes/Client');
const Product = require('../classes/Product');
const Payment = require('../classes/Payment');

class Report {
  constructor(client, product, payment) {
    this.client = new Client(client);
    this.product = Array[new Product(product)];
    this.payment = new Payment(payment);
  }
}

module.exports = Report;
