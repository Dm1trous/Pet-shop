import React from 'react'
import './sliders.css'
import img2 from '../../assets/Img2.png'
import arrow from '../../assets/arrow.svg'
import { Link } from 'react-router-dom';

function Slider2() {
  return (
    <div className='slider-info'>
        <div className='container container-slider'>
            <img src={img2} alt="" className='slider-img'/>
            <div className='slider-group'>
                <h3 className='slider-subtitle'>Upto 40% Off</h3>
                <h2 className='slider-title'>Clearance sale !!!</h2>
                <Link to='/shop' className='slider-btn'>SHOP NOW <img src={arrow} alt="стрелка" className='slider-arrow'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Slider2