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
    <div style={{backgroundColor:'#44a832',height:'100%'}}>
      <h2 style={{textAlign:'center',padding:'1.5rem 0 1.5rem 0 ',color:'#f4f4f4',fontWeight:'900'}}>Shopping Cart 🛒</h2>
    <div style={cartContainerStyle} >
      {cartItems.length === 0 ? (
        <p>CART IS EMPTY🛒</p>
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
              <button style={c_button} onClick={() => increaseQuantity(item.id)}>+</button>
              <button  style={c_button} onClick={() => decreaseQuantity(item.id)}>--</button>
              <button style={c_button2} onClick={() => removeItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <p style={{borderTop:'10px solid #44a832',paddingTop:'0.5rem',marginBottom:'1rem',fontSize:'1.75rem'}}>Total Payment: ${totalPayment}</p>
          <button style={c_button}>Checkout</button>
        </div>
      )}
       </div>
    </div>
  );
};

export default Cart;


const cartContainerStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  backgroundColor: "#f0f0f0",
  borderRadius:"5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
            maxWidth: "1100px", 
            padding: "50px",
            
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
  border:"2px solid #E78D0F",
  padding:"1rem",

};

const imageStyle = {
  width: "150px",
  height: "100px",
  marginRight: "10px",
  
};
const image_title={
  fontSize:"1.15rem",
  width:'250px'

}
const c_button={
padding:'0.75rem',
backgroundColor:'#44a832',
color:'#f4f4f4',
fontSize:'1.1rem',
fontWeight:'900',
cursor:'pointer'

}

const c_button2={
  padding:'0.75rem',
  backgroundColor:'red',
  color:'#f4f4f4',
  fontSize:'1.1rem',
  fontWeight:'900',
  cursor:'pointer',
  
  
    }