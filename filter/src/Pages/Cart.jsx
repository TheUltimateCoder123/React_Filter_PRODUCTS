import React, { useState, useEffect } from "react";

const Cart = () => {
  let cartItemsFromStorage = [];

  try {
    const cartItemsJSON = localStorage.getItem("cartItems");
    if (cartItemsJSON !== null) {
      cartItemsFromStorage = JSON.parse(cartItemsJSON);
    }
  } catch (error) {
    console.error("Error parsing cart items from local storage:", error);
    cartItemsFromStorage = [];
  }

  const [cartItems, setCartItems] = useState(cartItemsFromStorage);
  const [totalPayment, setTotalPayment] = useState(0);

  const cartContainerStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    borderRadius:"5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    border:"2px solid #E78D0F",
    padding:"1rem"
  };

  const imageStyle = {
    width: "150px",
    height: "100px",
    marginRight: "10px",
  };
  const image_title={
    fontSize:"1.15rem",

  }

  const updateLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: Math.max(item.qty - 1, 0) } : item
      )
    );
  };

  const calculateTotalPayment = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.newPrice * item.qty, 0);
    return total.toFixed(2);
  };

  useEffect(() => {
    setTotalPayment(calculateTotalPayment(cartItems));
    updateLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <div >
      <h2>Shopping Cart</h2>
    <div style={cartContainerStyle}>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={listItemStyle}>
             <div style={image_title}>
              <img src={item.img} alt={item.title} style={imageStyle} />
              <p>{item.title}</p>
              </div>
              <p>Quantity: {item.qty}</p>
              <p>Price: ${item.newPrice * item.qty}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div >
          <p>Total Payment: ${totalPayment}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
       </div>
    </div>
  );
};

export default Cart;

