import React from 'react'
import './sliders.css'
import cov from '../../assets/cov.svg'

function Slider4() {
  return (
    <div className='container container-comment'>
        <div className='comment1'>
            <img src={cov} alt="ковычка" />
        </div>
        <div className='comment2'>
            <h2 className='comment-text'>At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.</h2>
            <p className='comment-autor'>- Joshima Lin</p>
        </div>
    </div>
  )
}

export default Slider4