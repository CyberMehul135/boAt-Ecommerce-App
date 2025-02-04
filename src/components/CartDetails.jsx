import { useState } from "react";
import CartQty from "./CartQty";
import CartSubtotal from "./CartSubtotal";
import Button from "./Button.jsx";

export default function CartDetails({
  cart,
  updateCart,
  cartCount,
  updateCartCount,
}) {
  let handleRemoveItem = (productId) => {
    let updatedCart = cart.filter((product) => product.id != productId);
    updateCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    let updatedCartCount = cartCount - 1;
    updateCartCount(updatedCartCount);
    localStorage.setItem("cartCount", JSON.stringify(updatedCartCount));
  };

  return (
    <>
      <main className="max-w-[1600px] px-10 mx-auto mt-10 flex flex-col">
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              className="grid grid-cols-5 mb-5 border border-[rgb(212,231,241)] rounded-lg pl-5 pr-5 pt-4 pb-4"
            >
              <span className="flex gap-3 justify-start items-center w-[120%] h-full text-[15px]">
                <div className="w-[100px] h-[100px]">
                  <img
                    className="w-full h-full rounded"
                    src={product.image}
                    alt="product-image"
                  />
                </div>
                <span>{product.name}</span>
              </span>
              <span className="w-full h-full flex justify-center items-center">
                ₹{product.price}
              </span>
              <span className="w-full h-full flex justify-center items-center">
                <CartQty
                  productId={product.id}
                  cart={cart}
                  updateCart={updateCart}
                />
              </span>
              <span className="w-full h-full flex justify-center items-center">
                <CartSubtotal productId={product.id} cart={cart} />
              </span>
              <span className="w-full h-full flex justify-center items-center px-10">
                <Button
                  text={"Remove"}
                  handleClick={() => handleRemoveItem(product.id)}
                />
              </span>
            </div>
          );
        })}
      </main>
    </>
  );
}
