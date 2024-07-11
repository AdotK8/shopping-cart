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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setInventory(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    console.log(inventory);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage inventory={inventory} loading={loading} error={error} />
          }
        />
        <Route
          path="/store"
          element={
            <StorePage inventory={inventory} loading={loading} error={error} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage inventory={inventory} loading={loading} error={error} />
          }
        />
      </Routes>
    </Router>
  );
}
