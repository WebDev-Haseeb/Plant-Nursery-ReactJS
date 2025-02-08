import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

// Create the context
export const CartContext = createContext();

// Custom hook for using CartContext
export function useCart() {
    return useContext(CartContext);
}

// Context provider component
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Function to add product to cart
    function addToCart(product) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.title === product.title);
            if (existingProduct) {
                return prevCart.map((item, index) =>
                    item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    // Function to remove or decrease quantity
    function removeFromCart(title) {
        setCart(prevCart => {
            return prevCart
                .map((item) => (item.title === title ? { ...item, quantity: item.quantity - 1 } : item))
                .filter(item => item.quantity > 0);
        });
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};