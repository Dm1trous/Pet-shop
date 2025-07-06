import React from 'react'
import './sliders.css'
import cov from '../../assets/cov.svg'

function Slider6() {
  return (
    <div className='container container-comment'>
        <div className='comment1'>
            <img src={cov} alt="ковычка" />
        </div>
        <div className='comment2'>
            <h2 className='comment-text'>Nisi odit voluptatum porro suscipit beatae sit voluptas voluptates non eaque quaerat ab, error at officiis cum reiciendis illum voluptate. Quas, asperiores.</h2>
            <p className='comment-autor'>- Joshima Lin</p>
        </div>
    </div>
  )
}

export default Slider6