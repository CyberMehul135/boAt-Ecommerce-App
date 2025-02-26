import { useEffect, useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

export default function Product() {
  let [allProducts, setAllProducts] = useState({});
  let [products, setProducts] = useState([]);
  let [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  useEffect(() => {
    let newValue = Object.values(allProducts).flat();
    setProducts(newValue);
    setSavedProducts(newValue);
  }, [allProducts]);

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
      <NavBar cartCount={cartCount} loggedInUser={loggedInUser} />
      <main className="pt-[116px]">
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
        />
      </main>
      <Footer />
    </>
  );
}
