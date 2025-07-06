import React from 'react'
import './menu.css'
import Accesories from '../../assets/Vector.svg'
import Bird from '../../assets/Vector1.svg'
import Dog from '../../assets/Vector2.svg'
import Fish from '../../assets/Vector3.svg'
import Cat from '../../assets/Vector4.svg'

function Menu() {
  return (
    <div className='container'>
        <div className='menu-items'>
            <div className='menu-item'>
                <a href=""><img src={Accesories} alt="еда" className='menu-img'/></a>
                <p className='menu-text'>Accessories</p>
            </div>
            <div className='menu-item'>
            <a href=""><img src={Bird} alt="еда" className='menu-img'/></a>
                <p className='menu-text'>Bird Shop</p>
            </div>
            <div className='menu-item'>
            <a href=""><img src={Dog} alt="еда" className='menu-img'/></a>
                <p className='menu-text'>Dog shop</p>
            </div>
            <div className='menu-item'>
            <a href=""><img src={Fish} alt="еда" className='menu-img'/></a>
                <p className='menu-text'>Fish Shop</p>
            </div>
            <div className='menu-item'>
            <a href=""><img src={Cat} alt="еда" className='menu-img'/></a>
                <p className='menu-text'>Cat Shop</p>
            </div>
        </div>
    </div>
  )
}

export default Menu