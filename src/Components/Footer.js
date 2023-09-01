import React, { useState } from "react";
import "./Footer.css";
import map from "../extra_pictures/fake_map_location.png";
import instagram from "../extra_pictures/instagram_emblem.webp";
import mail from "../extra_pictures/mail_emblem.png";
import phone from "../extra_pictures/phone emblem.jpg";
import twitter from "../extra_pictures/twitter_emblem.jpg";

const Footer = () => {
  const [contact, showContact] = useState(false);
  const [location, showLocation] = useState(false);
  const contactHandler = (event) => {
    event.preventDefault();
    if (contact === true) {
      showLocation(false);
      showContact(false);
      return;
    }
    showLocation(false);
    showContact(true);
  };
  const locationHandler = (event) => {
    event.preventDefault();
    if (location === true) {
      showLocation(false);
      showContact(false);
      return;
    }
    showContact(false);
    showLocation(true);
  };
  return (
    <React.Fragment>
      <div className="footerBox">
        <button
          className="contactButton"
          onClick={contactHandler}
          style={contact ? { color: "#da3eea" } : {}}
        >
          Contact Info
        </button>

        <button className="locationButton" onClick={locationHandler} style={location ? { color: "#da3eea" } : {}}>
          Location Info
        </button>
      </div>
      <div>
        {contact ? (
          <div className="contactElement">
            <div>
              <img src={phone}></img>+90 123 456 7788{" "}
            </div>
            <div>
              <img src={instagram}></img>instagram.com/gbahceburger
            </div>
            <div>
              <img src={twitter}></img>twitter.com/gbahceburger{" "}
            </div>
            <div>
              <img src={mail}></img>gbahceburger@hotmail.com{" "}
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
      <div>
        {location ? (
          <div className="locationBox">
            {" "}
            <div className="addressInfo">
              {" "}
              Address: <br /> 12087 Sk. Gülbahçe/Urla/İzmir{" "}
            </div>{" "}
            <img src={map}></img>{" "}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Footer;
