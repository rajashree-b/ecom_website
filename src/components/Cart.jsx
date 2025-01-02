import React, { useContext } from "react";
import AppContext from "../Context/Context";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);

  // If the cart is empty, display a message
  if (cart.length === 0) {
    return (
      <div>
        <h2 className="text-center" style={{ padding: "10rem" }}>
          Your cart is empty!
        </h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div
            key={item.id}
            className="card mb-3"
            style={{
              width: "18rem",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <p className="card-text">Quantity: {item.quantity}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-secondary"
        style={{ marginTop: "20px" }}
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
