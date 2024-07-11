import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to The Store.</h2>
      <p>
        Discover our selection of clothing, ranging from shorts to hats.
        Delivered straight from the sweatshop to your door.
      </p>
      <Link to="/store" className="shop-button">
        Shop
      </Link>
    </div>
  );
}
