const { default: Stripe } = require("stripe");
const Deposite = require("../models/Deposite.Model");
const Pool = require("../models/Pool.Model");
const { sendForgotOTPMail } = require("../utils/sendEmail");

const addDeposite = async (req, res) => {
  try {
    const { depositor, pool, amount } = req.body;

    const newDeposite = new Deposite({ depositor, pool, amount });
    const deposite = await newDeposite.save();

    const result = await Pool.findOneAndUpdate(
      { _id: pool },
      {
        $push: {
          depositedPeoples: {
            depositor: depositor,
            amount: amount,
          },
        },
      },
      { new: true }
    );

    res.status(200).send({
      message: `${amount}$ deposited successfully!`,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const createPaymentIntent = async (req, res) => {
  try {
    const stripe = new Stripe("sk_test_51OrZZ9GnuZvG4pKcaNaTcuCeAKsfJROq7JjJ87rZ0XKAC5jvyHjLWyOQSn3bStB7WsK6EFFUOip6fLJrpJshono0007bz1eR3B");
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).send({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    res.status(404).send({ error });

  }
};

const paymentDeposite = async (req, res) => {
  try {
    const { name, amount } = req.body;
    console.log("Pool, amount", name, amount)
    const data = await sendForgotOTPMail(name, amount, address="dori mara, vanga bangla, drain - East-moh", phone="+61 (0) 016 206 6549");
    res.status(200).send({
      message: `${amount}$ deposited successfully! send email: ${data}`,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addDeposite,
  paymentDeposite,
  createPaymentIntent
};