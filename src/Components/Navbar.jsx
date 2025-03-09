import { FaShoppingCart } from "react-icons/fa";
import { Leaf } from "lucide-react";
import "../Styling/NavbarStyles.css";
import { useNavigate, useLocation } from "react-router";
import { useCart } from "../Context/CartContext"; // Import cart context

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cart } = useCart(); // Get cart state
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items

    return (
        <nav className="navContainer">
            <div onClick={() => navigate("/Plant-Nursery-ReactJS")} className="navBrand">
                <Leaf className="brandIcon" />
                <h2>Nursery Store</h2>
            </div>

            <div className="navLinks">
                <a onClick={() => navigate("/Plant-Nursery-ReactJS")} id="home" className={`navLink ${location.pathname === "/Plant-Nursery-ReactJS" ? "active" : ""}`}>Home</a>

                <a onClick={() => navigate("/Plant-Nursery-ReactJS/Products")} id="products" className={`navLink ${location.pathname === "/Plant-Nursery-ReactJS/Products" ? "active" : ""}`}>Products</a>

                <a onClick={() => navigate("/Plant-Nursery-ReactJS/Cart")} id="cart" className={`navLink ${location.pathname === "/Plant-Nursery-ReactJS/Cart" ? "active" : ""}`}>
                    <FaShoppingCart className="cartIcon" />
                    <span className="cartLabel">Cart</span>
                    {cartCount > 0 && <span className="cartCount">{cartCount}</span>} {/* Show cart count */}
                </a>
            </div>
        </nav>
    );
}
