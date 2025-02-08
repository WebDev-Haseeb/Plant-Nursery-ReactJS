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
            <div onClick={() => navigate("/")} className="navBrand">
                <Leaf className="brandIcon" />
                <h2>Nursery Store</h2>
            </div>

            <div className="navLinks">
                <a onClick={() => navigate("/")} id="home" className={`navLink ${location.pathname === "/" ? "active" : ""}`}>Home</a>

                <a onClick={() => navigate("/Products")} id="products" className={`navLink ${location.pathname === "/Products" ? "active" : ""}`}>Products</a>

                <a onClick={() => navigate("/Cart")} id="cart" className={`navLink ${location.pathname === "/Cart" ? "active" : ""}`}>
                    <FaShoppingCart className="cartIcon" />
                    <span className="cartLabel">Cart</span>
                    {cartCount > 0 && <span className="cartCount">{cartCount}</span>} {/* Show cart count */}
                </a>
            </div>
        </nav>
    );
}
