import React from 'react';
import "./Card.css"

const Card = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className="box" onClick={handleClick}>
      <img className="item" src={props.image} alt={props.name} />
      <div className="price-name-container">
        <div className="itemName">{props.itemName}</div>
        <div className="itemPrice">{props.price}</div>
      </div>
    </div> 
  );
};

export default Card;
