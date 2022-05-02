import React from "react";
import "./Footer.css";

const Footer = () => {
  const now = new Date();
  return (
    <footer>
      <p className="container text-center">
        &copy; copyright by CarShop {now.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
