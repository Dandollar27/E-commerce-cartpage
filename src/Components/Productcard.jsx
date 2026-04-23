import React, { useContext } from 'react'
import './product.css'
import { AppContext } from '../context/AppContext'

import { useNavigate } from 'react-router-dom'

const Productcard = ({product}) => {
  const {dispatch} = useContext(AppContext)
  const nav = useNavigate();
  return (
    <div className='cardCont' >
      <section className='contDiv'>
        <img onClick={() => nav(`/details/${product.id}`)} src={product?.images} alt="imgCard" />
      </section>y3
      <h2>{product?.title}</h2>
      <span>${product?.price}</span>
      <button onClick={()=> dispatch({type:"ADD_TO_CART", payload:product})}>Add to cart</button>
    </div>
  )
}

export default Productcard