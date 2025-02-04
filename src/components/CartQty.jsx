export default function CartQty({ productId, cart, updateCart }) {
  let getProductQty = () => {
    let product = cart.find((product) => product.id === productId);
    return product ? product.qty : 1;
  };

  let incrementQty = () => {
    let updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, qty: product.qty + 1 } : product
    );

    updateCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  let decrementQty = () => {
    let updatedCart = cart.map((product) =>
      product.id === productId && product.qty > 1
        ? { ...product, qty: product.qty - 1 }
        : product
    );

    updateCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="grid grid-cols-3 w-32 h-8 border border-[rgb(205,227,238)] rounded-lg">
      <span
        className="w-full h-full flex justify-center items-center border-r border-[rgb(205,227,238)] text-lg cursor-pointer"
        onClick={incrementQty}
      >
        +
      </span>
      <span className="w-full h-full flex justify-center items-center border-r border-[rgb(205,227,238)]">
        {getProductQty()}
      </span>
      <span
        className="w-full h-full flex justify-center items-center text-lg cursor-pointer"
        onClick={decrementQty}
      >
        -
      </span>
    </div>
  );
}

// export default function CartQty({ productId, cart, updateCart }) {
//   let getProductQty = () => {
//     let product = cart.find((product) => product.id === productId);
//     return product ? product.qty : 1;
//   };

//   let incrementQty = () => {
//     let updatedCart = cart.map((product) =>
//       product.id === productId ? { ...product, qty: product.qty + 1 } : product
//     );
//     updateCart(updatedCart); // Update Cart
//   };

//   let decrementQty = () => {
//     let updatedCart = cart.map((product) =>
//       product.id === productId && product.qty > 1
//         ? { ...product, qty: product.qty - 1 }
//         : product
//     );
//     updateCart(updatedCart);
//   };

//   return (
//     <div className="grid grid-cols-3 w-24 h-8 border border-[rgb(205,227,238)] rounded-lg">
//       <span
//         className="w-full h-full flex justify-center items-center border-r border-[rgb(205,227,238)] text-lg cursor-pointer"
//         onClick={incrementQty}
//       >
//         +
//       </span>
//       <span className="w-full h-full flex justify-center items-center border-r border-[rgb(205,227,238)]">
//         {getProductQty()}
//       </span>
//       <span
//         className="w-full h-full flex justify-center items-center text-lg cursor-pointer"
//         onClick={decrementQty}
//       >
//         -
//       </span>
//     </div>
//   );
// }
