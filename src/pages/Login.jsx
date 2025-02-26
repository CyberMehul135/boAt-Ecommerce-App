import AnnoucementBar from "../components/AnnoucementBar";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function Login() {
  let [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || false;
  });

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  let [cartCount, setCartCount] = useState(() => {
    return JSON.parse(localStorage.getItem("cartCount")) || 0;
  });

  useEffect(() => {
    return localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  return (
    <div>
      <AnnoucementBar />
      <NavBar cartCount={cartCount} loggedInUser={loggedInUser} />
      <LoginForm setLoggedInUser={setLoggedInUser} />
    </div>
  );
}
