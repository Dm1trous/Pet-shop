import React from 'react'
import './sliders.css'
import cov from '../../assets/cov.svg'

function Slider5() {
  return (
    <div className='container container-comment'>
        <div className='comment1'>
            <img src={cov} alt="ковычка" />
        </div>
        <div className='comment2'>
            <h2 className='comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis, quam, sit totam sequi asperiores mollitia voluptatum ipsum provident dolorum omnis tempore nostrum illo corporis.</h2>
            <p className='comment-autor'>- Joshima Lin</p>
        </div>
    </div>
  )
}

export default Slider5