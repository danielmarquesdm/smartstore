class Payment {
  constructor(methodPayment, numberCard, validThru, cvv, country) {
    this.methodPayment = new methodPayment(methodPayment);
    this.numberCard = numberCard;
    this.validThru = validThru;
    this.cvv = cvv;
    this.country = country;
  }
}
module.exports = Payment;
