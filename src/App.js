import React, { useState, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import UnderHeader from './components/under-header/UnderHeader';
import Slider from './components/slider/Slider';
import Slider1 from './components/sliders/Slider1';
import Slider2 from './components/sliders/Slider2';
import Slider3 from './components/sliders/Slider3';
import Slider4 from './components/sliders/Slider4';
import Slider5 from './components/sliders/Slider5';
import Slider6 from './components/sliders/Slider6';
import Menu from './components/menu/Menu';
import Clothing from './components/clothing/Clothing';
import Foodies from './components/foodies/Foodies';
import Sale from './components/sale/Sale';
import Form from './components/form/Form';
import Photos from './components/photos/Photos';
import Footer from './components/footer/Footer';
import clothingData from './data';
import foodiesData from './data2';
import ProductPage from './components/ProductPage/ProductPage';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/cartContext/CartContext';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClothing, setFilteredClothing] = useState(clothingData);
    const [filteredFoodies, setFilteredFoodies] = useState(foodiesData);
    const clothingRef = useRef(null);

    const slides = [
        <div key="1">
            <Slider1 />
        </div>,
        <div key="2">
            <Slider2 />
        </div>,
        <div key="3">
            <Slider3 />
        </div>,
    ];

    const slides2 = [
        <div key="4">
            <Slider4 />
        </div>,
        <div key="5">
            <Slider5 />
        </div>,
        <div key="6">
            <Slider6 />
        </div>,
    ];

      const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        const filteredClothingData = clothingData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClothing(filteredClothingData);
         const filteredFoodiesData = foodiesData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFoodies(filteredFoodiesData)
    };

    const filterAll = filteredClothing && filteredFoodies;

  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
      <Header onSearch={handleSearch} clothingRef={clothingRef} />
      <UnderHeader />
      <Routes>
        <Route path="/" element={
          <>
            <Slider slides={slides} interval={4000} />
              <Menu />
             <div ref={clothingRef}>
                <Clothing filteredData={filteredClothing} />
            </div>
                <Foodies filteredData={filteredFoodies} />
              <Sale />
                <Slider slides={slides2} interval={4000} />
            <Form />
             <Photos />
             <Footer />
           </>
         }
         />
          <Route path="/product/:id" element={<ProductPage clothingData={clothingData} foodiesData={foodiesData} />} />
          <Route path="/shop" element={<Shop filteredData={filterAll} />} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
      </div>
      </CartProvider>
     </BrowserRouter>
  );
}

export default App;