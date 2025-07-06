import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './productPage.css';
import star from '../../assets/star.svg'

function ProductPage({ clothingData, foodiesData }) {
    const { id } = useParams();
    const location = useLocation();
    const productId = parseInt(id, 10);

    let product;

    if(location.state && location.state.from === "foodies"){
           product = foodiesData.find(item => item.id === productId)
    } else{
         product = clothingData.find(item => item.id === productId);
    }


    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
<div className="product-page">
          <div className='container product-container'>
            <div className='product-page-content'>
            <p className={product.falses}>{product.status}</p>
                <img src={product.img} alt={product.title} className="product-image" />
              <div className='product-page-text'>
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price"> ${product.price}.00</p>
                              <div className="starts">
                                <img src={star} alt="звезда" />
                                <img src={star} alt="звезда" />
                                <img src={star} alt="звезда" />
                                <img src={star} alt="звезда" />
                                <img src={star} alt="звезда" />
                                <p>5.0</p>
                              </div>
                <p className="product-description">{product.desc}</p>
                <div className="product-btns">
                    <a href="/" className="slider-btn card-btn">ADD TO CART</a>
                    <a href="/" className="slider-btn card-btn">❤</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProductPage;