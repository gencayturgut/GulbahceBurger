import React from "react";
import "./basketItem.css";

const BasketItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className="basket-item" key={item.id}>
          <div className="basket-item__name">
            <h3>{item.name}</h3>
          </div>
          <div className="basket-item__type">
            <div>{item.type || "Standard"}</div>
          </div>
          <div className="basket-item__quantity">
            <div>Quantity: {item.quantity}</div>
          </div>
          <div className="basket-item__total">
            <div>{item.price} TL</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketItem;
