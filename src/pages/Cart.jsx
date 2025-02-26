import { useState, useEffect } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import CartDetails from "../components/CartDetails";
import Footer from "../components/Footer";

export default function Cart() {
  let [allUserData, setAllUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserData")) || [];
  });

  useEffect(() => {
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
  }, [allUserData]);

  let [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || false;
  });

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setAllUserData(
      allUserData.map((data) => {
        if (data.userName == loggedInUser.userName) {
          return loggedInUser;
        } else {
          return data;
        }
      })
    );
  }, [loggedInUser]);

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
      <NavBar cartCount={cartCount} loggedInUser={loggedInUser} />
      <main className="pt-[116px]">
        <CartDetails
          cart={cart}
          updateCart={updateCart}
          cartCount={cartCount}
          updateCartCount={updateCartCount}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      </main>
      <Footer />
    </>
  );
}
