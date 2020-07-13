class Shipping {
  constructor(name) {
    this.name = name;
    this.shippingValue();
  }

  shippingValue() {
    switch (this.name) {
      case 'SEDEX':
        this.value = 29.9;
        break;

      case 'FEDEX':
        this.value = 39.9;
        break;

      case 'Aguaçu':
        this.value = 25.9;
        break;

      case 'Transport':
        this.value = 49.9;
        break;

      default:
        break;
    }
  }
}

module.exports = Shipping;
