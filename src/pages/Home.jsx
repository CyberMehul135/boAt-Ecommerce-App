import { useEffect, useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import HeroSectionSlider from "../components/HeroSectionSlider";
import ServiceHighlights from "../components/ServiceHighlights";
import ProductCard from "../components/ProductCard";
import Category from "../components/Category";
import Footer from "../components/Footer";
import ProductHeading from "../components/ProductHeading";

export default function Home({ allProducts }) {
  let [products, setProducts] = useState(
    () => allProducts.TrueWirelessEarbuds || []
  );
  let [savedProducts, setSavedProducts] = useState(
    () => allProducts.TrueWirelessEarbuds || []
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

  console.log(allProducts.TrueWirelessEarbuds);

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

  return (
    <>
      <AnnoucementBar />
      <NavBar cartCount={cartCount} loggedInUser={loggedInUser} />
      <main className="h-fit pt-[116px] w-full">
        <HeroSectionSlider />
        <ServiceHighlights />
        <div className="my-8">
          <ProductHeading word1={"Shop by"} word2={"Categories"} />
          <Category allProduct={allProducts} />
        </div>
        <ProductHeading word1={"Explore top"} word2={"Products"} />
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
