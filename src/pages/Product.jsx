import { useEffect, useState } from "react";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Filter from "../components/FIlter";
import SortBy from "../components/SortBy";

export default function Product() {
  let [products, setProducts] = useState([]);
  let [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSavedProducts(data);
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

  let filterProducts = (filteredProducts) => {
    setProducts(filteredProducts);
  };

  let sortProducts = (sortedProducts) => {
    setProducts((products) => [...sortedProducts]);
  };

  return (
    <>
      <AnnoucementBar />
      <NavBar cartCount={cartCount} />
      <main className="pt-[116px]">
        <div className="max-w-[1600px] flex justify-between  px-10 mx-auto">
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
        />
      </main>
    </>
  );
}
