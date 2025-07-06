import React from 'react';
import { useCart } from '../../components/cartContext/CartContext';
import './cart.css'
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, removeFromCart } = useCart();

    // Рассчитываем общую стоимость и количество товаров
    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='container'>
            <h1 className='carta-title'>Корзина</h1>
            {cartItems.length === 0 ? (
                <p className='cart-none'>Ваша корзина пуста.</p>
            ) : (
                <>
                    <div className="cart-summary">
                         <p className='cart-text'>Всего {totalItems} товара(ов) на сумму: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='cart'>
                        {cartItems.map((item) => (
                            <div key={item.id} className='carta'>
                                 <Link to={`/product/${item.id}`}>
                                    <img src={item.img} alt={item.title} className='cart-img'/>
                                 </Link>
                                <h3 className='cart-title'>{item.title}</h3>
                                <p className='cart-price'>${item.price}.00</p>
                                <button onClick={() => removeFromCart(item.id)} className="slider-btn card-btn cart-btn">Удалить</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;