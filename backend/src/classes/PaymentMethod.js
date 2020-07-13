class PaymentMethod {
  constructor(method) {
    this.paymentMethod(method);
  }

  paymentMethod(method) {
    switch (method) {
      case 'cartao':
        this.method = 'cartao';
        break;

      case 'boleto':
        this.method = 'boleto';
        break;

      default:
        this.method = null;
        break;
    }
  }
}

module.exports = PaymentMethod;
