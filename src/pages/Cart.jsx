import { useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import CartDetails from "../components/CartDetails";
import Footer from "../components/Footer";

export default function Cart() {
  let [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem("cartCount")) || 0;
  });

  let [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateCartCount = (newCartCount) => {
    setCartCount(newCartCount);
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  };

  return (
    <>
      <AnnoucementBar />
      <NavBar cartCount={cartCount} />
      <main className="pt-[116px]">
        <CartDetails
          cart={cart}
          updateCart={updateCart}
          cartCount={cartCount}
          updateCartCount={updateCartCount}
        />
      </main>
      <Footer />
    </>
  );
}
