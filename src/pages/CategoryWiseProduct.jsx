import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AnnoucementBar from "../components/AnnoucementBar";
import NavBar from "../components/NavBar";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";

export default function CategoryPage() {
  let { categoryName } = useParams();
  let [allProducts, setAllProducts] = useState({});
  let [categoryProducts, setCategoryProducts] = useState([]);
  let [savedCategoryProducts, setSavedCategoryProducts] = useState([]);

  console.log(savedCategoryProducts);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        if (data[categoryName]) {
          setCategoryProducts(data[categoryName]);
          setSavedCategoryProducts(data[categoryName]);
        }
      });
  }, [categoryName]);

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
      <NavBar cartCount={cartCount} />
      <main className="mt-[116px]">
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
        />
      </main>
    </>
  );
}
