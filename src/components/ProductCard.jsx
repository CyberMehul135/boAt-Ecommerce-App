import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import saleLogo from "../assets/Maskdone.png";

export default function ProductCard({
  products,
  cartCount,
  updateCartCount,
  loggedInUser,
  setLoggedInUser,
}) {
  let [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Functionality
  let addToCart = (e, product) => {
    e.preventDefault(); // Prevent default behavior

    //check if product already in cart
    if (loggedInUser) {
      let isProductInCart = loggedInUser.cart.some(
        (products) => products.id == product.id
      );
      if (isProductInCart) {
        alert("This Product is already in cart");
        return;
      } else {
        setLoggedInUser({
          ...loggedInUser,
          cart: [...loggedInUser.cart, product],
          cartCount: (loggedInUser.cartCount += 1),
        });
      }
    } else {
      let isProductInCart = cart.some((products) => products.id == product.id);
      if (isProductInCart) {
        alert("This Product is already in cart");
        return;
      } else {
        setCart((cart) => [...cart, product]);
        updateCartCount(cartCount + 1);
      }
    }
  };

  return (
    <div className="max-w-[1400px] w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mx-auto px-10 mt-10 max-md:px-3">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="w-full">
          <div className="w-full max-w-[400px] h-[200px] border border-gray-300 p-2 rounded-xl flex  gap-3 bg-[rgb(250,250,250)]   max-md:mx-auto">
            {/* Image Section */}
            <div className="w-[45%] h-full flex-shrink-0 relative">
              <img
                src={product.image}
                className="w-full h-full object-cover rounded-lg"
                alt={product.name}
              />
              <span className="absolute bottom-0 left-0 bg-[rgb(252,197,11)] w-full rounded-b-md text-sm font-bold text-center">
                {product.mvp}
              </span>
            </div>

            {/* Product Details */}
            <div className="w-[55%] flex flex-col justify-between pt-2">
              <div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-amber-400">★</span>
                  <span className="flex">
                    <span>{product.rating}</span>
                    <span>&nbsp;|</span>
                    <span className="flex items-center">
                      {" "}
                      <span>&nbsp;{product.sales}&nbsp;</span>
                      <div className="w-[14px]">
                        <img src={saleLogo} alt="" className="w-full" />
                      </div>
                    </span>
                  </span>
                  <span
                    className={
                      product.bestSeller
                        ? "ml-auto bg-gray-200 px-2 py-0.5 rounded-full text-xs"
                        : null
                    }
                  >
                    {product.bestSeller}
                  </span>
                </div>
                <h3 className="font-bold text-lg max-md:font-extrabold">
                  {product.name}
                </h3>
                <div className="mt-4">
                  <span className="font-bold text-lg">₹{product.price} </span>
                  <span className="line-through text-sm text-gray-400">
                    ₹{product.orignalPrice}
                  </span>
                  <span className="text-green-500 font-bold text-sm">
                    {" "}
                    {`${(
                      ((product.orignalPrice - product.price) * 100) /
                      product.orignalPrice
                    ).toFixed(0)}% off`}
                  </span>
                </div>
              </div>

              <Button
                text="Add To Cart"
                handleClick={(e) => addToCart(e, product)}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
