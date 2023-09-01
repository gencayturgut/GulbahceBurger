import React from "react";
import BasketItem from "./BasketItem";
import BasketTotal from "./BasketTotal";
import "./basketContents.css";

const BasketContents = ({ items }) => {


  return (
    <div className="basket-contents-container">
      <BasketTotal items={items} />
      <BasketItem items={items} />
    </div>
  );
};

export default BasketContents;
