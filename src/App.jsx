import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CategoryWiseProduct from "./pages/CategoryWiseProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryWiseProduct />}
        />
      </Routes>
    </Router>
  );
}

export default App;
