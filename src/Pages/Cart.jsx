import { useCart } from "../Context/CartContext";
import "../Styling/CartStyles.css";
import Navbar from "../Components/Navbar";

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.source} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.title)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;