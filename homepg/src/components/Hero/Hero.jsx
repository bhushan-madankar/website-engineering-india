import React from 'react'
import './Hero.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import arrow from "../../assets/arrow.png"

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className='hero-left'>
        <h1>
            <span className="engineering">ENGINEERING</span>
            <br />
            <span className="india">
            <span className="letter i1">I</span>
            <span className="letter n">N</span>
            <span className="letter d">D</span>
            <span className="letter i2">I</span>
            <span className="letter a">A</span>
            </span>
          </h1>
        <p className="tagline">
            Think <span className="national">Nationally</span>, Act <span className="local">Locally</span>
        </p>

        <button className='btn'>
          About Us <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div className='hero-right'>
        <ImageSlider />
      </div>
    </div>
  )
}

export default Hero
