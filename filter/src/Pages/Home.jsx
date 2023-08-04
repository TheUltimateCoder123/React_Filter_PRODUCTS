import React, { useState } from "react";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../db/data";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../components/Card";
import "../index.css";
import Cart from "./Cart";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...existingProduct, qty: existingProduct.qty + 1 } : item
        );
      } else {
        const newCartItem = { ...product, qty: 1 };
        const newCartItems = [...prevCartItems, newCartItem];
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return newCartItems;
      }
    });
  };


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const { title, category, color, company, newPrice } = product;
    const lowerQuery = query.toLowerCase();
    return (
      (!query || title.toLowerCase().includes(lowerQuery)) &&
      (!selectedCategory || [category, color, company, newPrice, title].includes(selectedCategory))
    );
  });

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation
        handleInputChange={handleInputChange}
        handleClick={handleClick}
        countCartItems={cartItems.length}
      />
      <Products
        result={filteredProducts.map((product) => (
          <Card key={product.id} addToCart={addToCart} {...product} />
        ))}
      />
{/* 
<Cart cartItems={cartItems} /> */}
    </div>
  );
}

export default Home;








































