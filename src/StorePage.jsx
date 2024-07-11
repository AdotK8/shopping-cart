import React from "react";
import "./styles/StorePage.scss";

export default function StorePage({ inventory, cart, setInventory, setCart }) {
  const addToCart = (item) => {
    console.log(item);
  };

  const clickHandlerTwo = () => {
    console.log(inventory);
  };

  const clickHandlerThree = () => {
    console.log(cart);
  };

  const decreaseQuantity = () => {};

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
                <button onClick={() => decreaseQuantity(item.addQuantity)}>
                  -
                </button>
                <span className="quantity">{item.addQuantity}</span>
                <button onClick={() => increaseQuantity(item.addQuantity)}>
                  +
                </button>
              </div>
              <button onClick={() => clickHandler(item.title)}>
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
