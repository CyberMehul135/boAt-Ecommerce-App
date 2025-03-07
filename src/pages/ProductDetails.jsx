import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnnoucementBar from "../components/AnnoucementBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import ToastPopup from "../components/ToastPopup";

export default function ProductDetails({ popUp, setPopUp }) {
  let { id } = useParams();
  let location = useLocation();

  let [productDetail, setProductDetail] = useState(
    () => location.state?.product || []
  );

  useEffect(() => {
    if (productDetail.length === 0) {
      fetch(`/api/product/${id}`)
        .then((response) => response.json())
        .then((data) => setProductDetail(data));
    }
  }, [id, productDetail]);

  let [allUserData, setAllUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserData")) || [];
  });

  useEffect(() => {
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
  }, [allUserData]);

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Title
  useEffect(() => {
    document.title = "Products Detail";
  }, []);

  // Cart Functionality
  let [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || false;
  });

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setAllUserData(
      allUserData.map((data) => {
        if (data.userName == loggedInUser.userName) {
          return loggedInUser;
        } else {
          return data;
        }
      })
    );
  }, [loggedInUser]);

  let [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem("cartCount")) || 0;
  });
  localStorage.setItem("cartCount", JSON.stringify(cartCount));

  let [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!productDetail) return <h2>Loading...</h2>;

  // Add-To-Cart
  let addToCart = () => {
    if (loggedInUser) {
      // check if product alreay in cart
      let isProductInCart = loggedInUser.cart.some(
        (product) => product.id == productDetail.id
      );

      if (isProductInCart) {
        alert("This Product is alreay in the cart!");
        return;
      } else {
        setLoggedInUser({
          ...loggedInUser,
          cart: [...loggedInUser.cart, productDetail],
          cartCount: (loggedInUser.cartCount += 1),
          popUp: { ...loggedInUser.popUp, name: productDetail.name, on: true },
        });
      }
    } else {
      // check if product alreay in cart
      let isProductInCart = cart.some(
        (product) => product.id == productDetail.id
      );

      if (isProductInCart) {
        alert("This Product is alreay in the cart!");
        return;
      } else {
        setCart((cart) => [...cart, productDetail]);
        setCartCount((cartCount) => cartCount + 1);
        setPopUp({ ...popUp, name: productDetail.name, on: true });
      }
    }
  };

  return (
    <>
      <AnnoucementBar />
      <NavBar
        cartCount={cartCount}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <main className="px-10 mt-3 max-w-[1600px] w-full mx-auto flex gap-6 pt-[116px] max-md:flex-col max-md:px-3 max-md:items-center">
        <ToastPopup
          popUp={popUp}
          setPopUp={setPopUp}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <div className="max-w-[500px] w-[45%] max-h-[500px] rounded-lg overflow-hidden max-md:w-full max-md:max-h-[390px]">
          <img
            className="w-full h-full"
            src={productDetail.image}
            alt="product-image"
          />
        </div>

        <div className="flex-1 w-[55%] max-md:w-full">
          <div className="pt-2 pb-2 text-[rgb(74,81,87)]">
            <span className="text-amber-400">★</span>
            <span>{productDetail.rating} | </span>
            <span className="ml-1">{productDetail.sales}</span>
          </div>
          <div className="text-3xl font-bold text-[rgb(26,32,36)] mb-1">
            {productDetail.name}
          </div>
          <div className=" pt-1 pb-1 text-[rgb(147,147,148)] max-md:text-[15px]">
            {" "}
            Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water
            & Sweat Resistance, IWP Technology, Type C Interface
          </div>
          <div className="mt-2">
            <span className="text-2xl">₹{productDetail.price}</span>
            <span className="line-through text-[rgb(74,81,87)] ml-5">
              ₹{productDetail.orignalPrice}.00
            </span>
            <span className="text-sm text-green-400 font-bold ml-2">
              {" "}
              {`${(
                ((productDetail.orignalPrice - productDetail.price) * 100) /
                productDetail.orignalPrice
              ).toFixed(0)}% off`}
            </span>
          </div>
          <div className="text-[rgb(74,81,87)] text-[13px]">
            MRP(Inclusive of all taxes)
          </div>
          <div className="flex border-[1px] border-[rgb(214,228,250)] p-2 gap-3 max-w-[436px] rounded-md mt-4">
            <Button text={"Add To Cart"} handleClick={addToCart} />
            <Button text={"Buy Now"} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
