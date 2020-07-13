const Report = require('../classes/Report');
const ReportModel = require('../models/Report');

module.exports = {
  async store(req, res) {
    const { products, payment, client } = req.body;

    const report = new Report(client, products, payment);

    try {
      const reportModel = await ReportModel.create({
        clientName: client.name,
        products,
        total,
        paymentMethod: payment.methodPayment,
      });
      console.log(reportModel);

      return res.status(200).json({ message: 'Relatório salvo' });
    } catch {
      return res.status(400);
    }
  },
};
