import React from 'react'
import './Hero.css'
import image from '../assets/Hero pics.png'

const Hero = () => {
  return (
    <section className='hero'>
        <article className='main_hero'>
            <div className='text'>
          <h1>Make healthy life <br/>with  fresh </h1>
          <button className='btn5'>SHOP NOW</button>
            </div>
            <div className= 'right_hero'>
                <img src={image} alt="Man" />
            </div>
        </article>
    </section>
  )
}

export default Hero
