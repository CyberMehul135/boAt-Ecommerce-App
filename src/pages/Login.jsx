import AnnoucementBar from "../components/AnnoucementBar";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function Login() {
  let [cartCount, setCartCount] = useState(() => {
    return JSON.parse(localStorage.getItem("cartCount")) || 0;
  });

  useEffect(() => {
    return localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  return (
    <div>
      <AnnoucementBar />
      <NavBar cartCount={cartCount} />
      <LoginForm />
    </div>
  );
}
