import React, { useEffect } from 'react';
import './contstyle (1).css'; // Assuming you want to keep styles separate

const DonationForm = () => {
  useEffect(() => {
    const generateOrderId = () => {
      const d = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000000);
      return d + randomNumber;
    };

    const orderId = generateOrderId();
    document.getElementById("tid").value = orderId;
    document.getElementById("order_id").value = orderId;
  }, []);

  return (
    <div>
      {/* <div className="mid-bar">
        <h1>Deshyoga Charitable Trust</h1>
        <h3>Donate for a better future</h3>
      </div> */}
      <div>
        <form
          method="post"
          name="customerData"
          action="https://deshyoga.org/Donation/ccavRequestHandler.php"
          className="form-section"
        >
          <input type="text" name="tid" id="tid" hidden readOnly style={{ display: 'none' }} />
          <input type="text" name="merchant_id" value="2680011" hidden style={{ display: 'none' }} />
          <label>Amount</label>
          <input type="text" name="amount" value="800" placeholder="Amount" readOnly required />
          <label>Membership:</label>
          <input type="text" name="merchant_param1" readOnly value="Monthly-Membership" />
          <label htmlFor="billing_name">Name</label>
          <input type="text" name="billing_name" placeholder="Your Name" required />
          <label htmlFor="billing_tel">Mobile Number</label>
          <input type="number" name="billing_tel" placeholder="Contact Number" required />
          <label htmlFor="billing_email">Email</label>
          <input type="email" name="billing_email" placeholder="Email Address" required />
          <label htmlFor="billing_address">Address</label>
          <input type="text" name="billing_address" placeholder="Address" required />
          <label htmlFor="order_id">Order Id :</label>
          <input type="text" name="order_id" id="order_id" readOnly />
          <label htmlFor="PAN">PAN Card</label>
          <input type="text" name="PAN" placeholder="PAN for 80G Receipt" required />
          <input type="submit" className="btn btn-primary" value="PROCEED" />
          <a href="/">
            <div className="btn-back" style={{ float: 'right', fontSize: '14px' }}> GO BACK </div>
          </a>
          <table style={{ display: 'none' }}>
            <tbody>
              <tr>
                <td><input type="text" name="currency" value="INR" hidden /></td>
                <td><input type="text" name="redirect_url" value="https://deshyoga.org/Donation/ccavResponseHandler.php" hidden /></td>
                <td><input type="text" name="cancel_url" value="https://deshyoga.org/Donation/ccavResponseHandler.php" hidden /></td>
                <td><input type="text" name="language" value="EN" hidden /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
    