import React from 'react';
import './BiryaniCard.css';
import { useCart } from '../../components/Context/CartContext';

const BiryaniCard = ({ image, name, description, badge, type, price, rating, previewMode = false }) => {
  const { cartItems, setItemQuantityByName } = useCart();

  const cartItem = cartItems.find((item) => item.name === name);
  const quantity = cartItem ? cartItem.quantity : 0;

  const increaseQuantity = () => {
    setItemQuantityByName(name, quantity + 1, {
      image,
      badge,
      type,
      price: Number(price),
      rating,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setItemQuantityByName(name, quantity - 1, {
        image,
        badge,
        type,
        price: Number(price),
        rating,
      });
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      alert(`${quantity} x ${name} is in the cart!`);
    } else {
      alert('Please select a quantity before adding to cart.');
    }
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
    ));

  return (
    <div className="slide-card" role="article" aria-label={name}>
      <div className="image-container">
        <div className="slide-image" style={{ backgroundImage: `url(${image})` }}>
          <img src={image} alt={name} style={{ display: 'none' }} />
        </div>
        {badge === 'Best Seller' && <div className="best-seller-badge">{badge}</div>}
      </div>
      <div className="content">
        <h3 className="dish-name">
          {name}
          <span className="star-rating">{renderStars(rating)}</span>
        </h3>

        {previewMode && <p>{description}</p>}

        {!previewMode && (
          <>
            <p className="price">₹{price}</p>
            <div className="quantity-selector">
              <label htmlFor={`qty-${name}`}></label>
              <div className="qty-buttons">
                <button onClick={decreaseQuantity}>−</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BiryaniCard;
