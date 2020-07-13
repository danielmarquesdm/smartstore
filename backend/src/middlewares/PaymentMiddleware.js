const Payment = require('../classes/Payment');
const PaymentModel = require('../models/Payment');

module.exports = async (req, res, next) => {
  const {
    methodPayment,
    numberCard,
    validThru,
    cvv,
    country,
  } = req.body.payment;

  const payment = new Payment(
    methodPayment,
    numberCard,
    validThru,
    cvv,
    country
  );

  try {
    const paymentModel = await PaymentModel.create(payment);
    return next();
  } catch {
    return res.status(400);
  }
};
