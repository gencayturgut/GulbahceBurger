import React from "react";
import basket from "../extra_pictures/basket.png";
import "./basketTotal.css";

const BasketTotal = ({ items }) => {
  const basketTotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="basket-total">
      <img src={basket} alt="Basket" className="basket-image" />
      <div className="totalprice">Basket Total:<span className="priceColor"> {basketTotal} TL</span></div>
      <button className="purchasebutton">Purchase</button>
    </div>
  );
};

export default BasketTotal;
