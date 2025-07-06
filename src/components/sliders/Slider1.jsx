import React from 'react'
import './sliders.css'
import img1 from '../../assets/Img1.png'
import arrow from '../../assets/arrow.svg'
import { Link } from 'react-router-dom';

function Slider1() {
  return (
    <div className='slider-info'>
        <div className='container container-slider'>
            <img src={img1} alt="" className='slider-img'/>
            <div className='slider-group'>
                <h3 className='slider-subtitle'>SAVE 10 - 20 % OFF</h3>
                <h2 className='slider-title'>Best Destination For <span className='slider-title-yellow'>Your Pets</span> </h2>
                <Link to='/shop' className='slider-btn'>SHOP NOW <img src={arrow} alt="стрелка" className='slider-arrow'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Slider1