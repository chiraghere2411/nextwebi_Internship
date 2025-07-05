import React, { useState, useEffect } from 'react';
import './BiryaniCard.css';
import { toast } from 'react-toastify';
import { useCart } from '../../components/Context/CartContext';

  const BiryaniCard = ({ image, name, description, badge, type, price, rating, previewMode = false }) => {
    const { cartItems, setItemQuantityByName } = useCart();

    const cartItem = cartItems.find((item) => item.name === name);
    const [localQuantity, setLocalQuantity] = useState(cartItem ? cartItem.quantity : 0);

    useEffect(() => {
      if (cartItem) {
        setLocalQuantity(cartItem.quantity);
      }
    }, [cartItem]);

    const increaseQuantity = () => {
      setLocalQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
      setLocalQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleAddToCart = () => {
      if (localQuantity > 0) {
        setItemQuantityByName(name, localQuantity, {
          image,
          badge,
          type,
          price: Number(price),
          rating,
        });
        toast.success(`${localQuantity} x ${name} added to cart!`);
      } else {
        toast.error('Please select a quantity before adding to cart.');
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
                  <span>{localQuantity}</span>
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
