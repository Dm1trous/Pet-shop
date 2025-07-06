import React, { useState } from 'react';
import './under-header.css';
import Cart from '../../assets/ion_cart.svg';
import Heart from '../../assets/ion_heart.svg';
import Person from '../../assets/ion_person.svg';
import { Link } from 'react-router-dom'

function UnderHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            <div className="under-header-flex">
                <p className="sort">Shop By Categories</p>
                <div className="menu-wrapper">
                    <ul className={`menu-list ${menuOpen ? 'active' : ''}`}>
                    <a href="/"><li>Home</li></a>
                    <a href="#"><li>Page</li></a>
                    <Link to='/shop'>Shop</Link>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>Offers</li></a>
                    </ul>
                </div>
                     <div className='icons'>
                        <a href="#"><img src={Person} alt="человек" className='under-header-img'/></a>
                        <a href="#"><img src={Heart} alt="сердце" className='under-header-img'/></a>
                         <Link to='/cart'>
                            <img src={Cart} alt="корзина" className='under-header-img'/>
                        </Link>

                           <button className="burger-btn" onClick={toggleMenu}>
                                ☰
                            </button>
                    </div>

            </div>
        </div>
    );
}

export default UnderHeader;