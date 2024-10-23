import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="text-center">Total Price: ${totalPrice.toFixed(2)}</h3>
          <div className="text-center">
            <Link to="/checkout">
              <button className="btn btn-primary mt-3">Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
