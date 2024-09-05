const nodemailer = require("nodemailer");
const { email } = require("./temlate");
require("dotenv").config();

const sendForgotOTPMail = async (name, amount, phone, address) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "myreviews@tapandrate.co.uk",
      pass: "scwsxcihdnebpvfg",
    },
  });

  const mailOptions = {
    from: "myreviews@tapandrate.co.uk",
    to: "nahid.opediatech@gmail.com",
    subject: "Reset Your Password",
    html: `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invoice Template</title>
  </head>
  <body style="font-family: Arial, sans-serif;  color: white; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="width: 1047px; background-color: #202940; border-radius: 10px; padding: 30px;">
    <img
            style="width: 300px; height: 50px;"
            src="https://i.postimg.cc/jjVJ1zBD/DoshLogo.png"
            alt="Logo"
          />
      <div style="display: flex; justify-content: space-between!important; margin-bottom: 20px;">
        <div>
          <div style="padding-top: 60px; line-height: 25px;">
            <strong>${address}</strong>
            <br />
            Tel: ${phone}
          </div>
        </div>
        <div style="padding-top: 60px; line-height: 25px;">
          <strong>Billed to: Duston Archer</strong>
          <br />
          U2-107 Badajoz Road,<br />
          North Ryde, NSW<br />
          Sydney, Australia
        </div>
      </div>
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; line-height: 25px;">
        <div style="flex: 1; margin: 0 10px; padding-top: 60px; padding-bottom: 30px;">
          Invoice no:<br />
          <strong>#${name}</strong>
        </div>
        <div style="flex: 1; margin: 0 10px; padding-top: 60px; padding-bottom: 30px; display: flex; align-items: center; justify-content: flex-end; text-align: end;">
          <div>
            Invoice date: <br />
            Due date:
          </div>
          <div style="margin-left: 20px;">
            <strong>06/03/2019</strong><br />
            <strong>11/03/2019</strong>
          </div>
        </div>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">Item</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">Qty</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">Rate</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">Premium Support</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">1</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">$${amount}</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;">$${amount}</td>
          </tr>
         

          <tr>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;"></td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;"></td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;"><strong>Total:</strong></td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid gray;"><strong>$${amount}</strong></td>
          </tr>
        </tbody>
      </table>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 80px; padding-top: 10px; font-size: 0.9em; line-height: 25px;">
        <div>
          <span>
            <strong>Thank you!</strong>
            <br />
            If you encounter any issues related to the invoice, you can contact us at:
          </span>
          <br />
          <span>
            Email: <a style="color: #fff; text-decoration: none;" href="mailto:support@dosh.com.au">support@dosh.com.au</a>
          </span>
        </div>
      </div>
    </div>
  </body>
</html>
` ,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};



module.exports = {
  sendForgotOTPMail
};
