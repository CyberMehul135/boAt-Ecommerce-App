import { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CategoryWiseProduct from "./pages/CategoryWiseProduct";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  let [allProducts, setAllProducts] = useState({});

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  // Popup
  let [popUp, setPopUp] = useState({ name: "", on: false });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home allProducts={allProducts} popUp={popUp} setPopUp={setPopUp} />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              allProducts={allProducts}
              popUp={popUp}
              setPopUp={setPopUp}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails popUp={popUp} setPopUp={setPopUp} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryWiseProduct popUp={popUp} setPopUp={setPopUp} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
