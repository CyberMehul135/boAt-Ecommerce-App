import { useEffect, useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import HeroSectionSlider from "../components/HeroSectionSlider";
import ServiceHighlights from "../components/ServiceHighlights";
import ProductCard from "../components/ProductCard";
import Category from "../components/Category";
import Footer from "../components/Footer";
import ProductHeading from "../components/ProductHeading";

export default function Home() {
  let [products, setProducts] = useState([]);
  let [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.TrueWirelessEarbuds);
        setSavedProducts(data.TrueWirelessEarbuds);
      });
  }, []);

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
      <NavBar cartCount={cartCount} />
      <main className="h-fit pt-[116px] w-full">
        <HeroSectionSlider />
        <ServiceHighlights />
        <div className="my-8">
          <ProductHeading word1={"Shop by"} word2={"Categories"} />
          <Category />
        </div>
        <ProductHeading word1={"Explore top"} word2={"Products"} />
        <ProductCard
          products={products}
          cartCount={cartCount}
          updateCartCount={updateCartCount}
        />
      </main>
      <Footer />
    </>
  );
}
