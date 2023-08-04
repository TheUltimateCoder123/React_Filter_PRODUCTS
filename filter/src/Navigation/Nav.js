import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Recommended from "../Recommended/Recommended";
import "./Nav.css";
import { Link, Route, Routes } from "react-router-dom";

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

        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : null}
        </Link>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
