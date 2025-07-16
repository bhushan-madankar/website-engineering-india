import React from 'react'
import './Hero.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import arrow from "../../assets/arrow.png"

const Hero = () => {
  return (
    
    <div className='hero'>
      <ImageSlider/>
        <div className='hero-text'>
            <h1>Engineering India</h1>
            <p>Think nationally, act locally</p>
            <button className='btn'>Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
