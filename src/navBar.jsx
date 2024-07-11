import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.scss";
import cartIcon from "./assets/cart.svg";

export default function NavBar({ cartNumber }) {
  return (
    <nav className="nav-bar">
      <h1 className="logo">Store.</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" className="nav-item">
            Store
          </Link>
        </li>
      </ul>
      <div className="cart-container">
        <Link to="/cart" className="nav-item cart-icon">
          <img src={cartIcon} alt="Cart" />
        </Link>
        <div className="cart-count">{cartNumber}</div>
      </div>
    </nav>
  );
}
