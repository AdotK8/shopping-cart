import React from "react";
import "./styles/StorePage.scss";

export default function StorePage({ inventory, cart, setInventory, setCart }) {
  const addToCart = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart.hasOwnProperty(id)) {
        updatedCart[id] += quantity;
      } else {
        updatedCart[id] = quantity;
      }
      return updatedCart;
    });

    setInventory((prevInventory) => {
      return prevInventory.map((item) =>
        item.id === id ? { ...item, addQuantity: 0 } : item
      );
    });
  };

  const clickHandlerTwo = () => {
    console.log(inventory);
  };

  const clickHandlerThree = () => {
    console.log(cart);
  };

  const increaseQuantity = (id) => {
    const updatedInventory = inventory.map((item) =>
      item.id === id ? { ...item, addQuantity: item.addQuantity + 1 } : item
    );
    setInventory(updatedInventory);
  };

  const decreaseQuantity = (id) => {
    const updatedInventory = inventory.map((item) =>
      item.id === id
        ? { ...item, addQuantity: Math.max(item.addQuantity - 1, 0) }
        : item
    );
    setInventory(updatedInventory);
  };

  return (
    <div className="store-page">
      <button onClick={clickHandlerTwo}>display inventory</button>
      <button onClick={clickHandlerThree}>display cart</button>
      <div className="shop-cards-container">
        {inventory &&
          inventory.map((item) => (
            <div className="shop-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="shop-card-image"
              />
              <h3 className="shop-card-title">{item.title}</h3>
              <p className="shop-card-description">{item.description}</p>
              <p className="shop-card-price">${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="quantity">{item.addQuantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => addToCart(item.id, item.addQuantity)}>
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
