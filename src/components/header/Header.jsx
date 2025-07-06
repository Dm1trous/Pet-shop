import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/ion_search.svg';

function Header({ onSearch, clothingRef }) { 
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); 
        if (clothingRef && clothingRef.current) {
            clothingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <div>
      <header className="header">
        <div className="container header-content">
          <a href="/">
            <img src={logo} alt="" className="logo" />
          </a>
          <form onSubmit={handleSubmit} className="header-form">
            <input
              type="search"
              placeholder="Search for more than 10,000 products"
              className="search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button type="submit" className="footer-btn header-btn">
              <img src={search} alt="отправить" />
            </button>
          </form>
          <div className='header-mobile'>
          <div className="header-text">
            <p className="header-text1">Phone</p>
            <a href="tel:waggy@gmail.com">
              <p className="header-text2">+980-34984089</p>
            </a>
          </div>
          <div className="header-text">
            <p className="header-text1">Email</p>
            <a href="mailto:waggy@gmail.com">
              <p className="header-text2">waggy@gmail.com</p>
            </a>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;