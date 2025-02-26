export default function CartSubtotal({ productId, cart, loggedInUser }) {
  let subTotal = () => {
    if (loggedInUser) {
      let selectedProduct = loggedInUser.cart.find(
        (product) => product.id == productId
      );
      let subTotal = selectedProduct.qty * selectedProduct.price;
      return subTotal;
    } else {
      let selectedProduct = cart.find((product) => product.id == productId);
      let subTotal = selectedProduct.qty * selectedProduct.price;
      return subTotal;
    }
  };

  return (
    <>
      <div>₹{subTotal()}</div>
    </>
  );
}
