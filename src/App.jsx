import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext"; // Import Context

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/Plant-Nursery-ReactJS/" element={<Home />} />
          <Route path="/Plant-Nursery-ReactJS/Products" element={<Products />} />
          <Route path="/Plant-Nursery-ReactJS/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;