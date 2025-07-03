import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({image,name,rating,text}) => {
  return (
    <div className="review-card">
      <img src={image} alt={name} className="review-avatar" />
      <h3 className="review-name">{name}</h3>
      <div className="stars">{'★'.repeat(rating)}</div>
      <p className="review-text">{text}</p>
    </div>
  );
};

export default ReviewCard;

