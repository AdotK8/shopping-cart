import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./HomePage";
import StorePage from "./StorePage";
import CartPage from "./CartPage";

export default function App() {
  const [inventory, setInventory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartNumber, setCartNumber] = useState();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const modifiedInventory = response.map((item) => ({
          ...item,
          quantity: 0,
          addQuantity: 0,
        }));
        setInventory(modifiedInventory);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    console.log(inventory);
  }, []);

  return (
    <Router>
      <NavBar cartNumber={cartNumber} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/store"
          element={<StorePage inventory={inventory} cart={cart} />}
        />
        <Route path="/cart" element={<CartPage inventory={inventory} />} />
      </Routes>
    </Router>
  );
}
