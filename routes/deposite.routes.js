const express = require("express");
const { addDeposite, paymentDeposite, createPaymentIntent } = require("../controller/deposite.controller");
const router = express.Router();
router.post("/add", addDeposite);
router.post("/payment", paymentDeposite);
router.post("/createIntend", createPaymentIntent);

module.exports = router;
