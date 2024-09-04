const email = () => {
    return `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #1a2035;
        color: white;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .container {
        width: 1047px;
        background-color: #202940;
        border-radius: 10px;
        padding: 30px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .logo {
        width: 300px;
        height: 50px;
      }
      .address {
        padding-top: 30px;
        line-height: 25px;
      }
      .company-info {
        text-align: right;
        padding-top: 60px;
        line-height: 25px;
      }
      .invoice-info {
        margin-bottom: 20px;
        display: flex;
        justify-content: ;
        align-items: center;
        line-height: 25px;
      }
      .invoice-date {
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: end;
      }
      .invoice-info div {
        flex: 1;
        margin: 0 10px;
        padding-top: 60px;
        padding-bottom: 30px;
      }
      .invoice-no {
        font-size: 20px;
        margin-top: 20px;
      }
      .table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      .table th,
      .table td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid gray;
      }
      .total {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
        padding-top: 10px;
        font-size: 0.9em;
        line-height: 25px;
      }
      .footer a {
        color: #fff;
        text-decoration: none;
      }
      .buttons {
        text-align: right;
      }
      .buttons button {
        background-color: #358fed;
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
        transition: background-color 0.3s;
      }

      @media (max-width: 375px) {
        .container {
          width: 100%;
          padding: 15px;
          box-sizing: border-box;
        }
        .header {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .company-info {
          text-align: left;
          padding-top: 10px;
        }
        .address, .company-info {
          padding: 0;
          line-height: 20px;
          margin-bottom: 10px;
        }
        .invoice-info {
          flex-direction: flex;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .invoice-info div {
          padding: 0;
          margin-bottom: 5px;
        }
        .invoice-date {
          justify-content: flex-start;
          text-align: left;
        }
        .logo {
          max-width: 100%;
          height: auto;
          margin-top: 5px;
        }
        .footer {
          flex-direction: column;
          align-items: flex-start;
          margin-top: 4px;
        }
        .buttons {
          text-align: left;
          margin-top: 10px;
        }
        .buttons button {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      @media (max-width: 1024px) {
        .container {
          width: 90%;
          padding: 20px;
          box-sizing: border-box;
        }
        .header {
          flex-direction: column;
          align-items: flex-start;
          margin-top: 15px;
        }
        .company-info {
          text-align: left;
          padding-top: 20px;
        }
        .invoice-info {
          display: flex;
          align-items: flex-start;
        }
        .invoice-info div {
          padding-top: 20px;
          padding-bottom: 10px;
        }
        .invoice-date {
          justify-content: flex-start;
          text-align: left;
        }
        .logo {
          max-width: 80%;
          height: auto;
          margin-top: 10px;
        }
        .address,
        .company-info,
        .invoice-info div,
        .footer {
          font-size: 13px;
          line-height: 18px;
        }
        .buttons button {
          padding: 6px 12px;
          font-size: 11px;
        }
      }

      @media (max-width: 768px) {
        .container {
          width: 100%;
          padding: 15px;
          box-sizing: border-box;
        }
        .header {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .company-info {
          text-align: left;
          padding-top: 10px;
        }
        .invoice-info {
          display: flex;
          align-items: flex-start;
        }
        .invoice-info div {
          padding-top: 10px;
        }
        .invoice-date {
          justify-content: flex-start;
          text-align: left;
        }
        .logo {
          max-width: 100%;
          height: auto;
          margin-top: 10px;
        }
        .address,
        .company-info,
        .invoice-info div,
        .footer {
          font-size: 12px;
          line-height: 18px;
        }
        .buttons button {
          padding: 6px 10px;
          font-size: 10px;
        }
      }
    </style>
    <title>Invoice Template</title>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div>
          <img
            class="logo"
            src="https://i.postimg.cc/jjVJ1zBD/DoshLogo.png"
            alt="Logo"
          />
          <div class="address">
            <strong>107 Badajoz Road, North Ryde</strong>
            <br />
            <strong> NSW – 2113 Sydney, Australia</strong><br />
            Tel: +61 (0) 432 090 107
          </div>
        </div>
        <div class="company-info">
          <strong>Billed to: Duston Archer</strong>
          <br />
          U2-107 Badajoz Road,<br />
          North Ryde, NSW<br />
          Sydney, Australia
        </div>
      </div>
      <div class="invoice-info">
        <div>
          Invoice no:<br />
          <strong>#D001-001</strong>
        </div>
        <div class="invoice-date">
          <div>
            Invoice date: <br />
            Due date:
          </div>
          <div>
            <strong>06/03/2019</strong><br />
            <strong>11/03/2019</strong>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Premium Support</td>
            <td>1</td>
            <td>$9.00</td>
            <td>$9.00</td>
          </tr>
          <tr>
            <td></td>
            <td>3</td>
            <td>$100.00</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>Parts for service</td>
            <td>1</td>
            <td>$89.00</td>
            <td>$89.00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td><strong>Total:</strong></td>
            <td><strong>$698</strong></td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div>
          <span>
            <strong>Thank you!</strong>
            <br />
            If you encounter any issues related to the invoice, you can contact
            us at:
          </span>
          <br />
          <span>
            Email: <a href="mailto:support@dosh.com.au">support@dosh.com.au</a>
          </span>
        </div>
        <div class="buttons">
          <button>Send Email</button>
          <button>Print</button>
        </div>
      </div>
    </div>
  </body>
</html>` }



module.exports = {
    email
};

