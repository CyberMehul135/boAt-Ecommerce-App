import { useEffect, useState } from "react";

export default function BillTotal({ cart, loggedInUser }) {
  let [bill, setBill] = useState({});

  useEffect(() => {
    if (loggedInUser) {
      let x = loggedInUser.cart.map((product) => product.qty * product.price);
      let subTotal = x.reduce((acc, curr) => acc + curr, 0).toFixed(2);
      let tax = ((subTotal * 18) / 100).toFixed(2);
      let total = (parseInt(subTotal) + Number(tax)).toFixed(2);
      setBill({ ...bill, subTotal: subTotal, tax: tax, total: total });
    } else {
      let x = cart.map((product) => product.qty * product.price);
      let subTotal = x.reduce((acc, curr) => acc + curr, 0).toFixed(2);
      let tax = ((subTotal * 18) / 100).toFixed(2);
      let total = (parseInt(subTotal) + Number(tax)).toFixed(2);
      setBill({ ...bill, subTotal: subTotal, tax: tax, total: total });
    }
  }, [, cart, loggedInUser]);

  return (
    <>
      <div className="w-full max-w-[1600px] h-fit mx-auto px-10">
        <span className="border border-[rgb(212,231,241)] rounded-lg max-w-[400px] ml-auto flex flex-col px-5 pt-5 pb-7 max-md:mx-auto">
          <span className="mb-3 font-medium max-md:font-bold">
            Selected Offer Summary
          </span>
          <span className="mb-3 flex justify-between">
            <span>Sub Total</span>
            <span>₹ {bill.subTotal}</span>
          </span>
          <span className=" flex justify-between">
            <span>Tax (18%)</span>
            <span>₹ {bill.tax}</span>
          </span>
          <span className="w-full h-[1px] bg-[rgb(212,231,241)] mb-3"></span>
          <span className="mb-3 flex justify-between">
            <span>Final Total</span>
            <span>₹ {bill.total}</span>
          </span>
        </span>
      </div>
    </>
  );
}
