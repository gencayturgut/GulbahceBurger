import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './itemDetailBox.css';

const ItemDetailBox = ({ item, addToBasket }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(true);

  const navigate = useNavigate();

  if (!item) {
    return null; 
  }

  const itemTypes = {
    Fries: ['Small Size', 'Medium Size', 'Large Size'],
    'Fizzy Drink': ['Cola', 'Fanta', 'Sprite'],
    'Onion Rings': ['Single Portion', 'Double Portion'],
    'Cheese Burger': ['No Extra Cheese', 'Add Extra Cheese'],
    'Ice Cream': ['Vanilla', 'Chocolate', 'Strawberry', 'Mint'],
  };

  const optionPrices = {
    'Small Size': 0,
    'Medium Size': 10,
    'Large Size': 20,
    Cola: 0,
    Fanta: 0,
    Sprite: 0,
    'Single Portion': 0,
    'Double Portion': 15,
    'No Extra Cheese': 0,
    'Add Extra Cheese': 20,
    Vanilla: 0,
    Chocolate: 0,
    Strawberry: 5,
    Mint: 10,
  };

  const handleOptionSelect = (option) => {
    setIsPurchaseDisabled(false);
  
    let updatedOptions = [];
  
    if (item.name === 'Ice Cream') {
      updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];
    } else {
      updatedOptions = [option];
    }
  
    setSelectedOptions(updatedOptions);
  };
  

  const handlePurchase = (event) => {
    event.preventDefault();

    // Calculate option price
    const optionPrice = calculateOptionPrice(selectedOptions, optionPrices);
    const totalPrice = parseFloat(item.price) + optionPrice;

    const purchase = {
      name: item.name,
      price: totalPrice,
      type: selectedOptions.join(', '),
    };

    addToBasket(purchase);
    navigate('/');
  };

  const calculateOptionPrice = (options, optionPrices_) => {
    const optionPrices = optionPrices_;

    let optionPrice = 0;
    options.forEach((option) => {
      optionPrice += optionPrices[option] || 0;
    });

    return optionPrice;
  };

  let content;

  if (item.name in itemTypes) {
    content = (
      <div className="options-container">
        <p>Select {item.name}:</p>
        {itemTypes[item.name].map((option) => (
          <div className="option" key={option}>
            <input
              type={item.name === 'Ice Cream' ? 'checkbox' : 'radio'}
              id={option}
              name="itemOption"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionSelect(option)}
            />
            <label htmlFor={option}>{option}</label>
            <span className="option-price">(+{optionPrices[option]}TL)</span>
          </div>
        ))}
      </div>
    );
  }

  const isOptionSelected = item.name in itemTypes && selectedOptions.length > 0;

  return (
    <div className="container">
      <div className="menu_">
        {itemTypes[item.name] ? (
          <div className="optionedmenu">
            <div className="leftside">
              <p className="name">{item.name}</p>
              <p className="price">{item.price}TL</p>
              <img src={item.picture} className="image-class" alt="Item" />
            </div>
            <div className="rightside">
              {itemTypes[item.name] && <div>{content}</div>}
              <button
                className="buy-button"
                onClick={handlePurchase}
                disabled={!isOptionSelected || isPurchaseDisabled} 
              >
                Add to Basket
              </button>
              {!isOptionSelected && (
                <p className="error-message">Please select an option.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="optionless">
            <div className="optionless-image">
              <img src={item.picture} className="image-class" alt="Item" />
            </div>
            <div className="rightside">
              <p className="name-optionless">{item.name}</p>
              <p className="price-optionless">{item.price} TL</p>
              <button
                className="buy-button"
                onClick={handlePurchase}
              >
                Add to Basket
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetailBox;
