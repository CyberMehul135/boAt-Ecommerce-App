export default function CartQty({
  productId,
  cart,
  updateCart,
  loggedInUser,
  setLoggedInUser,
}) {
  let getProductQty = () => {
    if (loggedInUser) {
      let product = loggedInUser.cart.find(
        (product) => product.id === productId
      );
      return product ? product.qty : 1;
    } else {
      let product = cart.find((product) => product.id === productId);
      return product ? product.qty : 1;
    }
  };

  let incrementQty = () => {
    if (loggedInUser) {
      let updatedCart = loggedInUser.cart.map((product) =>
        product.id === productId
          ? { ...product, qty: product.qty + 1 }
          : product
      );

      setLoggedInUser({
        ...loggedInUser,
        cart: updatedCart,
      });

      // localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      let updatedCart = cart.map((product) =>
        product.id === productId
          ? { ...product, qty: product.qty + 1 }
          : product
      );

      updateCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  let decrementQty = () => {
    if (loggedInUser) {
      let updatedCart = loggedInUser.cart.map((product) =>
        product.id === productId && product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : product
      );

      setLoggedInUser({ ...loggedInUser, cart: updatedCart });
      // localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      let updatedCart = cart.map((product) =>
        product.id === productId && product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : product
      );

      updateCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
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
