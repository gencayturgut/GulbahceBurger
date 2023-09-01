import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Items.css";
import images from "./images";

const Items = ({ itemDisplayHandler }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await fetch(require("../menu_items.txt"));
        const text = await response.text();
        const lines = text.split("\n");
        const items = lines.map((line) => {
          const [name, price, picture] = line.split(",");
          const imageUrl = images[picture.trim()];
          return { name, price, picture: imageUrl };
        });
        setMenuItems(items);
      } catch (error) {
        console.error(error);
      }
    };
    getMenuItems();
  }, []);

  const handleItemClick = (item) => {
    console.log(item)
      setSelectedItem(item);
      navigate("/item");
      itemDisplayHandler(item);
    
  };

  return (
    <div className="menuBox">
      <div className="menu">
        {menuItems.map((item) => (
          <Card
            key={item.name}
            image={item.picture}
            itemName={item.name}
            price={`${item.price}TL`}
            onClick={() => handleItemClick(item)}
            selected={selectedItem === item}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
