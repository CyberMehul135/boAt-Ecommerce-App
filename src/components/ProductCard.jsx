import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ProductCard({ products, cartCount, updateCartCount }) {
  let [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let addToCart = (e, product) => {
    e.preventDefault(); // Prevent default behavior

    //check if product already in cart
    let isProductInCart = cart.some((products) => products.id == product.id);
    if (isProductInCart) {
      alert("This Product is already in cart");
      return;
    } else {
      setCart((cart) => [...cart, product]);
      updateCartCount(cartCount + 1);
    }
  };

  return (
    // <div className="max-w-[1400px] h-auto max-h-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center mx-auto px-10 mt-10">
    //   {products.map((product) => {
    //     return (
    //       <Link to={`/product/${product.id}`} key={product.id}>
    //         <div
    //           key={product.id}
    //           className="max-w-[416px] w-full h-full max-h-[200px] border-[1px] border-gray-300 p-1 rounded-xl flex  gap-2 bg-[rgb(250,250,250)]"
    //         >
    //           <div className="w-[45%] h-auto relative">
    //             <img
    //               src={product.image}
    //               className="w-full h-full rounded-lg"
    //               alt=""
    //             />
    //             <span className="absolute bottom-0 left-0 bg-[rgb(252,197,11)] w-full rounded-b-md text-sm font-bold text-center">
    //               {product.mvp}
    //             </span>
    //           </div>

    //           <div className=" pt-3 pb-2 pl-1.5 pr-1.5 w-[55%] flex flex-col">
    //             <div className="flex justify-between">
    //               <div>
    //                 <span className="text-amber-400">★</span>
    //                 <span className="text-sm">{product.rating} | </span>
    //                 <span className="text-sm">{product.sales} </span>
    //               </div>
    //               <div>
    //                 <span className="text-sm bg-[rgb(239,244,247)] pl-1 pr-1 rounded-2xl">
    //                   {product.bestSeller}
    //                 </span>
    //               </div>
    //             </div>
    //             <h3 className="mb-2 mr-auto font-extrabold">{product.name}</h3>
    //             <div className="mr-auto">
    //               <span className="font-bold">₹{product.price} </span>
    //               <span className="line-through text-[13px] text-gray-400 ">
    //                 ₹{product.orignalPrice}
    //               </span>
    //               <span className="text-sm text-green-400 font-bold">
    //                 {" "}
    //                 {`${(
    //                   ((product.orignalPrice - product.price) * 100) /
    //                   product.orignalPrice
    //                 ).toFixed(0)}% off`}
    //               </span>
    //             </div>
    //             <div className="w-full h-[1px] mb-1 bg-gray-400 rounded"></div>
    //             <span className="p-1 bg-[rgb(239,244,247)] rounded-2xl">
    //               {product.mvp2}
    //             </span>
    //             <Button
    //               text={"Add To Cart"}
    //               handleClick={(e) => addToCart(e, product)}
    //             />
    //           </div>
    //         </div>
    //       </Link>
    //     );
    //   })}
    // </div>
    <div className="max-w-[1400px] w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mx-auto px-10 mt-10 max-md:px-3">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="w-full">
          <div className="w-full max-w-[400px] h-[200px] border border-gray-300 p-2 rounded-xl flex  gap-3 bg-gray-100 shadow-lg max-md:mx-auto">
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
            <div className="w-[55%] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-amber-400">★</span>
                  <span>
                    {product.rating} | {product.sales}
                  </span>
                  <span className="ml-auto bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                    {product.bestSeller}
                  </span>
                </div>
                <h3 className="font-extrabold text-lg">{product.name}</h3>
                <div className="mt-1">
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
