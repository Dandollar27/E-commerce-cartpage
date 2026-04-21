import "../Components/css/AddToCart.css"
import { useNavigate } from 'react-router-dom'


import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const AddToCart = () => {
   const nav = useNavigate();
  const { cart, dispatch } = useContext(AppContext);

  if (cart.length === 0) {
    return <div className="Empty_cart_holder">
      <h2 className="Empty_Cart">Your cart is empty 🥹 <br /><span className="Fav">Add your favorites to cart</span></h2>
    </div>
  }

  return (
    <div className="Cart_parent_cont">
      <h1 className="Cart_text">Cart</h1>

      {cart.map((item) => (
        <div className="Cart_holder" key={item?.id}>
          <img className="Cart_image" src={item.images} alt="Image" />
          <h3 className="Cart_Title">{item.title}</h3>
          <button
          className="Cart_delete_btn"
            onClick={() =>
              dispatch({
                type: "Remove_from_cart",
                payload: item.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    <div className="CheckOut_cont">
         <button onClick={()=> nav("/Check_out")} className='Cgeckout_btn'>proceed to checkout</button>          </div>
    </div>
  );
};

export default AddToCart;