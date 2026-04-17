import React from 'react'
import Cart from '../Components/Cart';
import Header from '../Components/Header'
import Hero from '../Components/Hero';
import Allproduct from '../Components/Allproduct';
import CheckupList from '../Components/CheckupList';
import Store from '../Components/Store';



const Landingpage = () => {
  return (
    <div>
      <Hero/>
      <Allproduct/>
      <Cart/>
      <CheckupList/>
      {/* <Store/> */}
    
    </div>
  )
}

export default Landingpage;