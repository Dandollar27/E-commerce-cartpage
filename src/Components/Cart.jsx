import React, { useContext } from 'react'
import "./Cart.css"
import { AppContext } from '../context/AppContext'

const Cart = () => {
  const { cart, dispatch } = useContext(AppContext)

  return (
    <section className='CartBody'>
      <div className='CartBodyL'>

        <div className='CartBodyLT'>
          <h1 className='CartBodyLTH1'>
          Your Cart ({cart?.length || 0} {cart?.length === 1 ? "item" : "items"})
          </h1>

          <div className='CartBodyLTDiv'>
            <h1 className='CartBodyLTDivH'>Product</h1>
            <h2 className='CartBodyLTDivH'>Unit Price</h2>
            <h3 className='CartBodyLTDivH'>Total</h3>
            <h4 className='CartBodyLTDivH'>Remove</h4>
          </div>
        </div>

        <div className='CartBodyLD'>
          {cart.length === 0 ? (
            <h2>Your cart is empty</h2>
          ) : (
            cart.map((item) => (
              <div className='CartBodyLDCont' key={item.id}>

                {/* LEFT */}
                <div className='CartBodyLDContL'>
                  <div className='CartBodyLDContLUp'>
                    <img src={item.images?.[0]} alt="" className='CartBodyLDContLUpImg'/>
                    <h1 className='CartBodyLDContLUpH1'>
                      {item.title}
                      <br />
                      <span className='CartBodyLDContLUpS'>
                        {item.weight || "500kg"}
                      </span>
                    </h1>
                  </div>

                  <div className='CartBodyLDContLDown'>
                    <h1 className='CartBodyLDContLDownH1'>Quantity</h1>

                    <div className='CartBodyLDContLDownDiv'>
                      <button>-</button>
                      <h2>{item.qty || 1}</h2>
                      <button>+</button>
                    </div>

                    <button className='CartBodyLDContLDownBtn'>
                      Add more items
                    </button>
                  </div>
                </div>

                {/* RIGHT */}
                <div className='CartBodyLDContR'>
                  <p>₦ {item.price}</p>
                  <p>₦ {item.price * (item.qty || 1)}</p>

                  <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item.id})}>
                    Remove
                  </button>

                  <button className='btn-sec'>Checkout</button>
                </div>

              </div>
            ))
          )}
        </div>

      </div>

      {/* RIGHT SIDE SUMMARY */}
      <div className='Cont-container'>
        <div className='CartBodyR'>

          <div className='Suprise'>
            <h4>Subtotal:</h4>
            <p>
              ₦ {cart?.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <span className='measure'>0.5kg</span>
          </div>

          <label className='policy'>
            <input type='checkbox' />
            i have read the instruction above and <br />
            i agree to 
            <span className='policy-link'>
              Groceria's Return Policy
            </span>
          </label>

          <button className='Pointer'>
            Proceed to checkout
          </button>

        </div>
      </div>

    </section>
  )
}

export default Cart