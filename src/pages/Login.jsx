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

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Title
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div>
      <AnnoucementBar />
      <NavBar
        cartCount={cartCount}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <LoginForm setLoggedInUser={setLoggedInUser} />
    </div>
  );
}
