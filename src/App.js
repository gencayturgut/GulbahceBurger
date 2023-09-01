import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarWithBasket from "./Components/NavBarWithBasket";
import Footer from "./Components/Footer";
import NameInput from "./Components/NameInput";
import Items from "./Components/Items";
import ItemDetailBox from "./BasketComponents/ItemDetailBox";
import BasketContents from "./BasketComponents/BasketContents";

const App = () => {
  const [itemDisplayed, setItemDisplayed] = useState(null);
  const [basketItems, setBasketItems] = useState([]);

  const burgerClickHandler = () => {
    setItemDisplayed(null);
  };

  const itemDisplayHandler = (item) => {
    setItemDisplayed(item);
  };

  const addToBasket = (purchase) => {
    setBasketItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.name === purchase.name && item.type === purchase.type
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the basket, update its quantity and price
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        existingItem.quantity += 1;
        existingItem.price += purchase.price;
        return updatedItems;
      } else {
        // Item doesn't exist in the basket, add it as a new item
        return [...prevItems, { ...purchase, quantity: 1 }];
      }
    });
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBarWithBasket
          handleClick={burgerClickHandler}
          items={basketItems}
        />
        <NameInput />
        <Routes>
          <Route
            path="/"
            element={<Items itemDisplayHandler={itemDisplayHandler} />}
          />
          <Route
            path="/item"
            element={
              <ItemDetailBox item={itemDisplayed} addToBasket={addToBasket} />
            }
          />
          <Route
            path="/basket"
            element={<BasketContents items={basketItems} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
