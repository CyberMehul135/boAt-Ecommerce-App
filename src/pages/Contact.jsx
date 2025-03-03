import AnnoucementBar from "../components/AnnoucementBar";
import Button from "../components/Button";
import MapComponent from "../components/MapComponent";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  let [allUserData, setAllUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserData")) || [];
  });

  useEffect(() => {
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
  }, [allUserData]);

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
    return JSON.parse(localStorage.getItem("cartCount")) || 0;
  });

  useEffect(() => {
    return localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  let sendMessage = (e) => {
    e.preventDefault();
  };

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Title
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <AnnoucementBar />
      <NavBar
        cartCount={cartCount}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <main className="h-fit pt-[116px]">
        <div className="max-w-[1600px] flex justify-between  px-10 mx-auto max-md:px-3 mt-5 gap-5 max-md:flex-col">
          <span className="w-full">
            <span>
              <div className="text-2xl font-bold">Contact Us</div>
              <div>Get in touch with us. We are always here to help you.</div>
            </span>
            <form>
              <span className="flex flex-col mt-5">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Full Name"
                  className="border px-4 h-[40px] text-[14px]"
                />
              </span>

              <span className="flex flex-col mt-5">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="boat123@gmail.com"
                  className="border px-4 h-[40px] text-[14px]"
                />
              </span>

              <span className="flex flex-col mt-5">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Title of Your Message"
                  className="border px-4 h-[40px] text-[14px]"
                />
              </span>

              <span className="flex flex-col mt-5 mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="we are always here to help you."
                  cols={30}
                  rows={3}
                  className="border px-4"
                ></textarea>
              </span>

              <Button text={"Send Message"} handleClick={sendMessage} />
            </form>
          </span>
          <span className="w-full">
            <MapComponent />
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
