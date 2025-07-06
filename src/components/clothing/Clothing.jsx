import React from 'react';
import './clothing.css';
import arrow from '../../assets/arrow.svg';
import star from '../../assets/star.svg';
import { Link } from 'react-router-dom';

function Clothing({ filteredData }) {
  return (
    <div className="container container-clothes">
      <div className="clothing-flex" id='clothing'>
        <h2 className="clothing-title">Pet Clothing</h2>
        <Link to='/shop' className='slider-btn cards-btn'>SHOP NOW <img src={arrow} alt="стрелка" className='slider-arrow'/></Link>
      </div>
      <div className="clothing-cards">
        {filteredData.map(({ id, img, title, price, status, falses }) => {
          return (
            <div className="clothing-card" key={id}>
              <div className="dog">
                <p className={falses}>{status}</p>
                    <Link to={`/product/${id}`}>
                        <img src={img} alt={title} className="dog-img" />
                    </Link>
              </div>
              <h3 className="card-title">{title}</h3>
              <div className="starts">
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <p>5.0</p>
              </div>
              <h3 className="card-price">${price}.00</h3>
              <div className="card-btns">
                <a href="#" className="slider-btn card-btn">
                  ADD TO CART
                </a>
                <a href="#" className="slider-btn card-btn">
                  ❤
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clothing;