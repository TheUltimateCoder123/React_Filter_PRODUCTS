import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineSearch } from "react-icons/ai";
import Recommended from "../Recommended/Recommended";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ handleInputChange, handleClick, cartItems }) {
  return (
    <nav>
        <div className="logo-container">
          <h1>
          👟<span className="me">ME<span className="dot">.</span></span>
          </h1>
        </div>
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
        <Recommended  handleClick={handleClick} />
      </div>

      <div className="Profile-container">
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />

          {cartItems.length ? <button className="badge">{cartItems.length}</button> : null}
        </Link>

        <Link to="#">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
