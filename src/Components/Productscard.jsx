import React from 'react'
import Productcard from './Productcard'
import './Products.css'

const Productscard = (props) => {
    console.log("This is all the product", props.allProducts);
  return (
    <>
    <div className='general_Container'>
      {props.allProducts?.map((product) => (
        <Productcard product={product} />
      ))}
    </div>
    </>
  )
}


export default Productscard