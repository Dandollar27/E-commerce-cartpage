import React from 'react'
import "./Cart.css"

const  Cart = () => {
  return (
    <>
      <section className='CartBody'>
        <div className='CartBodyL'>
            <div className='CartBodyLT'>
                <h1 className='CartBodyLTH1'>Your Cart (1 item)</h1>
                <div className='CartBodyLTDiv'>
                    <h1 className='CartBodyLTDivH'>Product</h1>
                    <h2 className='CartBodyLTDivH'>Unit Price</h2>
                    <h3 className='CartBodyLTDivH'>Total</h3>
                    <h4 className='CartBodyLTDivH'>Remove</h4>
                </div>
            </div>
            <div className='CartBodyLD'>
                <div className='CartBodyLDCont'>
                    <div className='CartBodyLDContL'>
                        <div className='CartBodyLDContLUp'>
                            <img src="https://zikora.online/wp-content/uploads/2025/05/Benue-Yam.png" alt="" className='CartBodyLDContLUpImg'/>
                            <h1 className='CartBodyLDContLUpH1'>Yam-Grade B 
                                <br /><span className='CartBodyLDContLUpS'>500kg</span>
                            </h1>
                        </div>
                        <div className='CartBodyLDContLDown'>
                            <h1 className='CartBodyLDContLDownH1'>Quantity</h1>
                            <div className='CartBodyLDContLDownDiv'>
                                <button className='CartBodyLDContLDownDivBtn1'>-</button>
                                <h2 className='CartBodyLDContLDownDivH2'>1</h2>
                                <button className='CartBodyLDContLDownDivBtn2'>+</button>
                            </div>
                            <button className='CartBodyLDContLDownBtn'>Add more items</button>
                        </div>
                    </div>
                    <div className='CartBodyLDContR'>
                        <p># 900.00</p>
                        <p>#900.00</p>
                        <button>Remove</button>
                        <button className='btn-sec'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='Cont-container'>
        <div className='CartBodyR'>
            <div className='Suprise'>
          <h4>Subtotal:</h4>
          <p>900</p>
          <span className='measure'>0.5kg</span>
          </div>
          <label className='policy'>
          <input type='checkbox'/>
          i have read the instruction above and <br/> i agree to 
          <span  className='policy-link'>Groceria's Return Policy</span>
          </label>
          <button className='Pointer'>Proceed to  checkout</button>
          </div>
          </div>
            
          
      </section>
    </>
  )
}

export default Cart