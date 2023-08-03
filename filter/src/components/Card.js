import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card({ id,addToCart,img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className="card" style={styles.card}>
      <div className="card-content" style={styles.cardContent}>
        <img src={img} alt="shoes" className="card-img" style={styles.cardImg} />
        <div className="card-details" style={styles.cardDetails}>
          <h3 className="card-title" style={styles.cardTitle}>
            {title}
          </h3>
          <section className="card-reviews" style={styles.cardReviews}>
            {star}{star}{star}{star}
            <span className="total-reviews" style={styles.totalReviews}>
              {reviews} Reviews
            </span>
          </section>
          <section className="card-price" style={styles.cardPrice}>
            <div className="price" style={styles.price}>
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" style={styles.bagIcon} />
            </div>
          </section>
    
          <button  className="add-to-cart-button" style={styles.addToCartButton}onClick={() => addToCart({ id, title })}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  card: {
    perspective: '800px',
    maxWidth: '300px',
    margin: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    transformStyle: 'preserve-3d',
    transition: 'transform 0.3s ease',
    borderRadius: '8px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    marginBottom: '16px',
    borderRadius: '4px',
  },
  cardDetails: {
    textAlign: 'left',
    padding: '16px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cardReviews: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  totalReviews: {
    marginLeft: '4px',
  },
  cardPrice: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  price: {
    marginRight: '8px',
    fontWeight: 'bold',
  },
  bagIcon: {
    fontSize: '24px',
    color: '#ff5252',
  },
  addToCartButton: {
    backgroundColor: '#2196f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  cardHovered: {
    transform: 'rotateY(5deg) scale(1.02)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export default Card;
