import React from "react";
import "./styles/CartPage.scss";

export default function CartPage({ inventory, cart, setCart }) {
  let totalPrice = 0;
  const cartItems = Object.keys(cart).map((itemId) => {
    const item = inventory.find((invItem) => invItem.id === parseInt(itemId));
    const quantity = cart[itemId];
    const itemTotalPrice = item.price * quantity;
    totalPrice += itemTotalPrice;

    return (
      <div className="cart-item" key={itemId}>
        <p>
          {quantity} x {item.title} ${item.price.toFixed(2)} each
        </p>
      </div>
    );
  });

  return (
    <div className="cart-page">
      <h2>Cart Page</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems}
          <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
}
