import React from 'react'
import img2 from '../../assets/Img2.png'
import arrow from '../../assets/arrow.svg'
import './sale.css'
import { Link } from 'react-router-dom'


function Sale() {
  return (
        <div className='slider-info'>
            <div className='container container-slider container-sale'>
            <div className='slider-group'>
                    <h3 className='slider-subtitle sale-subtitle'>Upto 40% Off</h3>
                    <h2 className='slider-title sale-title'>Clearance sale !!!</h2>
                    <Link to='/shop' className='slider-btn'>SHOP ALL <img src={arrow} alt="стрелка" className='slider-arrow'/></Link>
                </div>
                <img src={img2} alt="" className='slider-img sale-img'/>
            </div>
        </div>
  )
}

export default Sale