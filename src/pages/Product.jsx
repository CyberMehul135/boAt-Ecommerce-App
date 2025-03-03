import { useEffect, useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import ToastPopup from "../components/ToastPopup";

export default function Product({ allProducts, popUp, setPopUp }) {
  let [products, setProducts] = useState(() =>
    Object.values(allProducts).flat()
  );
  let [savedProducts, setSavedProducts] = useState(() =>
    Object.values(allProducts).flat()
  );

  useEffect(() => {
    if (!allProducts?.TrueWirelessEarbuds) {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.TrueWirelessEarbuds);
          setSavedProducts(data.TrueWirelessEarbuds);
        });
    }
  }, [allProducts]);

  let [allUserData, setAllUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserData")) || [];
  });

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    return JSON.parse(localStorage.getItem("cartCount")) || 0;
  });

  useEffect(() => {
    return localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  // Update Functions :
  let updateCartCount = (updatedCartCount) => {
    setCartCount(updatedCartCount);
  };

  let filterProducts = (filteredProducts) => {
    setProducts(filteredProducts);
  };

  let sortProducts = (sortedProducts) => {
    setProducts((products) => [...sortedProducts]);
  };

  return (
    <>
      <AnnoucementBar />
      <NavBar
        cartCount={cartCount}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <main className="pt-[116px]">
        <ToastPopup
          popUp={popUp}
          setPopUp={setPopUp}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <div className="max-w-[1600px] flex justify-between  px-10 mx-auto max-md:px-3">
          <span>
            <Filter
              savedProducts={savedProducts}
              filterProducts={filterProducts}
            />
          </span>
          <span>
            <SortBy products={products} sortProducts={sortProducts} />
          </span>
        </div>
        <ProductCard
          products={products}
          cartCount={cartCount}
          updateCartCount={updateCartCount}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          popUp={popUp}
          setPopUp={setPopUp}
        />
      </main>
      <Footer />
    </>
  );
}
