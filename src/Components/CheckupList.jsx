import React from 'react'
import './CheckupList.css'

const CheckupList = () => {
  return (
    
<div class="container">
  <h2>Checkout</h2>

  <div className="checkout-wrapper">
    <div class="form-section">

      <div className="card">
        <h3>1. Contact Information</h3>

        <div className="grid-2">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="grid-2">
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
        </div>
      </div>

      
      <div className="card">
        <h3>2. Shipping Address</h3>

        <input type="text" placeholder="Street Address" />

        <div className="grid-3">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="ZIP Code" />
        </div>
      </div>

      
      <div className="card">
        <h3>3. Payment Method</h3>

        <div className="payment-method">
          <button class="active"> Credit Card</button>
          <button>Bank Transfer</button>
        </div>

        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Name on Card" />

        <div className="grid-2">
          <input type="text" placeholder="Expiry Date" />
          <input type="text" placeholder="CVV" />
        </div>
      </div>

      <button className="place-order">Place Order</button>
    </div>
    <div className="summary-section">
      <div class="card">
        <h3>Order Summary</h3>

        <div className="item">
          <span>Yam - Grade B</span>
          <span>₦20,000</span>
        </div>

        <div className="item">
          <span>Rice - 5kg</span>
          <span>₦8,500</span>
        </div>

        <div className="item">
          <span>Beans - 2kg</span>
          <span>₦6,000</span>
        </div>

        <hr />

        <div className="item">
          <span>Subtotal</span>
          <span>₦34,500</span>
        </div>

        <div className="item">
          <span>Delivery</span>
          <span>₦1,500</span>
        </div>

        <div className="item">
          <span>Tax</span>
          <span>₦500</span>
        </div>

        <h2 className="total">₦36,500</h2>
      </div>
    </div>

  </div>
</div>
  )
}

export default CheckupList