import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import ProductHeading from "../components/ProductHeading";
import ToastPopup from "../components/ToastPopup";

export default function CategoryPage({ popUp, setPopUp }) {
  let location = useLocation();

  let { categoryName } = useParams();
  let [allProducts, setAllProducts] = useState({});
  let [categoryProducts, setCategoryProducts] = useState(location.state || []);
  let [savedCategoryProducts, setSavedCategoryProducts] = useState(
    location.state || []
  );

  useEffect(() => {
    if (categoryProducts.length === 0) {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          setAllProducts(data);
          if (data[categoryName]) {
            setCategoryProducts(data[categoryName]);
            setSavedCategoryProducts(data[categoryName]);
          }
        });
    }
  }, [categoryName, categoryProducts]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  // Update Functions :
  let updateCartCount = (updatedCartCount) => {
    setCartCount(updatedCartCount);
  };

  let filterProducts = (filteredProducts) => {
    setCategoryProducts(filteredProducts);
  };

  let sortProducts = (sortedProducts) => {
    setCategoryProducts((products) => [...sortedProducts]);
  };

  return (
    <>
      <AnnoucementBar />
      <NavBar
        cartCount={cartCount}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <main className="mt-[116px]">
        <ToastPopup
          popUp={popUp}
          setPopUp={setPopUp}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <div className="max-w-[1600px] flex justify-between  px-10 mx-auto max-md:px-3 max-md:gap-2">
          <span>
            <Filter
              savedProducts={savedCategoryProducts}
              filterProducts={filterProducts}
            />
          </span>
          <span>
            <SortBy products={categoryProducts} sortProducts={sortProducts} />
          </span>
        </div>
        <ProductCard
          products={categoryProducts}
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
