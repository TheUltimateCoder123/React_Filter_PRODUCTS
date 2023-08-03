import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineSearch } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import Recommended from '../Recommended/Recommended';
import './Nav.css';

function Nav({ handleInputChange, handleClick, countCartItems }) {
  return (
    <nav>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter The Shoes...."
          onChange={handleInputChange}
        />
        <AiOutlineSearch className="search-icon" />
      </div>

      <div>
        <Recommended handleClick={handleClick} />
      </div>

      <div className="Profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
       
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
          {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ) : null}
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
