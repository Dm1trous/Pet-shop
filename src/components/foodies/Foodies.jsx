import React from 'react';
import './foodies.css';
import star from '../../assets/star.svg';
import arrow from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';

function Foodies({ filteredData }) {
  return (
    <div className="container container-clothes">
      <div className="clothing-flex">
        <h2 className="clothing-title">Pet Foodies</h2>
       <Link to='/shop' className='slider-btn cards-btn'>SHOP NOW <img src={arrow} alt="стрелка" className='slider-arrow'/></Link>
      </div>
      <div className="clothing-cards">
        {filteredData.map(({ id, img, title, price, status, falses }) => {
          return (
            <div className="clothing-card" key={id}>
              <div className="dog">
                <p className={falses}>{status}</p>
                <div className="food">
                     <Link to={`/product/${id}`} state={{from: "foodies"}}>
                        <img src={img} alt={title} className="food-img" />
                    </Link>
                </div>
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

export default Foodies;