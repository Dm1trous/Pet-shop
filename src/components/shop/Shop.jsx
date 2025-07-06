import React from 'react';
import star from '../../assets/star.svg';
import { Link } from 'react-router-dom';
import data from '../../data.js';
import data2 from '../../data2.js';
import './shop.css';
import { useCart } from '../../components/cartContext/CartContext.jsx'

function Shop({ filteredData }) {
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item); 
    };

    return (
        <div className="container container-clothes">
            <div className="clothing-flex shop-margin" id="clothing">
                <h2 className="clothing-title">Pet Clothing</h2>
            </div>
            <div className="clothing-cards">
                {data.map((product) => (
                    <div className="clothing-card" key={product.id}>
                        <div className="dog">
                            <p className={product.falses}>{product.status}</p>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt={product.title} className="dog-img" />
                            </Link>
                        </div>
                        <h3 className="card-title">{product.title}</h3>
                        <div className="starts">
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <p>5.0</p>
              </div>
                        <h3 className="card-price">${product.price}.00</h3>
                        <div className="card-btns">
                            <button className="slider-btn card-btn" onClick={() => handleAddToCart(product)}>
                                ADD TO CART
                            </button>
                            <a href="#" className="slider-btn card-btn">
                                ❤
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="clothing-flex shop-margin">
        <h2 className="clothing-title">Pet Foodies</h2>
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
              <button className="slider-btn card-btn" onClick={() => handleAddToCart(id, img, title, price, status, falses)}>
                    ADD TO CART
                </button>
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
export default Shop;