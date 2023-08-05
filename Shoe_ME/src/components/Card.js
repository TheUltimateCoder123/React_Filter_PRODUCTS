import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card({ id, addToCart, img, title, star, reviews, newPrice, prevPrice }) {

  return (
    <section style={cardStyle}>
      <div className="card-content">
        <img src={img} alt="shoes" style={cardImgStyle} />
        <div style={cardDetailsStyle}>
          <h3 style={cardTitleStyle}>{title}</h3>
          <section style={cardReviewsStyle}>
            {[...Array(star)].map((_, index) => (
              <AiFillStar key={index} style={starIconStyle} />
            ))}
            <span style={totalReviewsStyle}>{reviews} Reviews</span>
          </section>
          <section style={cardPriceStyle}>
            <div style={priceStyle}>
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div style={bagStyle}>
              <BsFillBagHeartFill style={bagIconStyle} />
            </div>
          </section>
          <button
            style={addToCartButtonStyle}
            onClick={() => addToCart({ id, title, img, newPrice })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
export default Card;




const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  width: '300px',
  margin: '10px',
};

const cardImgStyle = {
  width: '100%',
  maxHeight: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const cardReviewsStyle = {
  display: 'flex',
  alignItems: 'center',
};

const starIconStyle = {
  color: '#FFD700',
  marginRight: '2px',
};

const totalReviewsStyle = {
  marginLeft: '5px',
};

const cardPriceStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
};

const priceStyle = {
  fontSize: '20px',
  color: '#333',
  marginRight: '10px',
};

const bagStyle = {
  backgroundColor: '#FF4500',
  padding: '8px',
  borderRadius: '50%',
};

const bagIconStyle = {
  color: '#fff',
};

const addToCartButtonStyle = {
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
};

const cardDetailsStyle = {
  padding: '10px',
};