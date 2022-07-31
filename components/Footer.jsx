import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 kicks. All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiFillTwitterCircle />
      </p>
    </div>
  );
};

export default Footer;
