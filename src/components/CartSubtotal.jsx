export default function CartSubtotal({ productId, cart }) {
  let subTotal = () => {
    let selectedProduct = cart.find((product) => product.id == productId);
    let subTotal = selectedProduct.qty * selectedProduct.price;
    return subTotal;
  };

  return (
    <>
      <div>₹{subTotal()}</div>
    </>
  );
}
