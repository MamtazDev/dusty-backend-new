const nodemailer = require("nodemailer");
const { email } = require("./temlate");
require("dotenv").config();

const sendForgotOTPMail = async (name, amount, phone, address) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "myreviews@tapandrate.co.uk",
      pass: "scwsxcihdnebpvfg",
    },
  });

  const mailOptions = {
    from: "myreviews@tapandrate.co.uk",
    to: "nipa.opediatech@gmail.com",
    subject: "Reset Your Password",
    html: `
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invoice Template</title>
  </head>
<body style="font-family: Arial, sans-serif; color: white; margin: 0; padding: 0;">
    <table width=" 100%" cellpadding="0" cellspacing="0" -
        style="max-width:1047px; margin:0 auto; background-color: #202940; padding: 30px;border-radius: 10px; overflow: hidden;">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0"
                    style="background-color: #202940; border-radius: 10px; max-width: 1047px; width: 100%; margin: auto;border-radius: 50px; overflow: hidden;">
                    <!-- Logo Section -->
                    <tr>
                        <td style="padding: 20px;">
                            <img style="width: 300px; height: 50px;" src="https://i.postimg.cc/jjVJ1zBD/DoshLogo.png"
                                alt="Logo" />
                        </td>
                    </tr>

                    <!-- Address and Billing Information -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Company Info -->
                                    <td
                                        style="width: 50%; color: #ffffff; vertical-align: top; padding-right: 10px; line-height:165%">
                                        <strong>${address}</strong><br />
                                        Tel: ${phone}
                                    </td>

                                    <!-- Billing Info -->
                                    <td
                                        style="width: 50%; color: #ffffff; text-align: right; vertical-align: top; line-height:165%">
                                        <strong>Billed to: Duston Archer</strong><br />
                                        U2-107 Badajoz Road,<br />
                                        North Ryde, NSW<br />
                                        Sydney, Australia
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Invoice Details -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Invoice No -->
                                    <td style="width: 50%; color: #ffffff; line-height:165%">
                                        Invoice no:<br />
                                        <strong>#${name}</strong>
                                    </td>

                                    <!-- Invoice Dates -->
                                    <td style="width: 50%; text-align: right; color: #ffffff;">
                                        <table align="right">
                                            <tr>
                                                <td style="line-height:165%">Invoice date:<br />Due date:</td>
                                                <td style="padding-left: 20px; line-height:165%">
                                                    <strong>06/03/2019</strong><br />
                                                    <strong>11/03/2019</strong>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Item Table -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="border-collapse: collapse;">
                                <thead>
                                    <tr>
                                        <th
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            Item
                                        </th>
                                        <th
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            Qty
                                        </th>
                                        <th
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            Rate
                                        </th>
                                        <th
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            Premium Support
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            1
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            $${amount}
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            $${amount}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            <strong>Total:</strong>
                                        </td>
                                        <td
                                            style="padding: 10px; text-align: left; border-bottom: 1px solid gray; color: #ffffff;">
                                            <strong>$${amount}</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <!-- Thank You Message -->
                    <tr>
                        <td style="padding: 20px 30px; color: #ffffff; text-align: left; line-height:165%">
                            <strong>Thank you!</strong><br>
                            If you encounter any issues related to the invoice, you can <br> contact us at: <br> <br>
                            Email: <a href="mailto:support@dosh.com.au" style="color: #ffffff; text-decoration: none;">
                                support@dosh.com.au
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`,
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
  sendForgotOTPMail,
};
