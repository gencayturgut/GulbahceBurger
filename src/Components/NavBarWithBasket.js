import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import basket from "../extra_pictures/basket.png";

const NavBarWithBasket = ({ handleClick, items }) => {
  const [aboutUs, setAboutUs] = useState(false);
  const navigate = useNavigate();

  const aboutUsHandler = (event) => {
    event.preventDefault();
    if (aboutUs) {
      setAboutUs(false);
      return;
    }
    setAboutUs(true);
  };

  const handleClickHere = (event) => {
    event.preventDefault();
    setAboutUs(false);
    handleClick();
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="header">
          <div onClick={handleClickHere} className="title">
            Gülbahçe Burger
          </div>
          <button
            onClick={aboutUsHandler}
            className="aboutusbutton"
            style={aboutUs ? { color: "#da3eea" } : {}}
          >
            About Us
          </button>
        </div>
        <div className="basket">
          <button onClick={() => navigate("/basket")}>
            Basket Total:{" "}
            <span className="basket-price">
              {items.reduce((acc, item) => acc + item.price, 0)} TL
            </span>
            <img src={basket} alt="Basket" className="basket-image" />
          </button>
        </div>
      </div>
      <div
        className="displaytext"
        style={aboutUs ? { display: "block" } : { display: "none" }}
      >
        About us: <br />
        Gülbahçe Burger is a fast food joint in Urla/İzmir. It opened in
        business in 2023.
      </div>
    </React.Fragment>
  );
};

export default NavBarWithBasket;
