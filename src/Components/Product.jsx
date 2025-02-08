// import { useState } from "react";
import { useCart } from "../Context/CartContext"; // Import cart context
import "../Styling/ProductStyles.css";
import PropTypes from 'prop-types';

export default function Product({ source, title, description, price }) {
    const { cart, addToCart } = useCart(); // Access cart state
    const isAdded = cart.some(item => item.title === title); // Check if product is in cart

    return (
        <div className="productContainer">
            <img className="productImage" src={source} alt={title} />
            <h2 className="productTitle">{title}</h2>
            <p className="productDescription">{description}</p>
            <span className="productPrice">{price}$</span>
            <button
                onClick={() => addToCart({ title, source, description, price })}
                className={`addToCart ${isAdded ? "disabled" : ""}`}
                disabled={isAdded}
            >
                {isAdded ? "Added" : "Add"} to Cart
            </button>
        </div>
    );
}

Product.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
