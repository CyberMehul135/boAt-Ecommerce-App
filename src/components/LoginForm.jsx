import { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";

export default function LoginForm({ setLoggedInUser }) {
  let [signIn, setSignIn] = useState(false);

  let [userData, setUserData] = useState({});
  let [userData2, setUserData2] = useState({});

  let [allUserData, setAllUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserData")) || [];
  });

  useEffect(() => {
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
    setUserData({});
  }, [allUserData]);

  // Signup & SignIn On-Off
  let SignInOn = () => {
    setSignIn(true);
  };

  let SignUpOn = () => {
    setSignIn(false);
  };

  // Signup handler
  let handleSignUp = (e) => {
    e.preventDefault();

    let userExist = allUserData.some(
      (data) =>
        data.userName == userData.userName ||
        data.userEmail == userData.userEmail
    );

    if (userExist) {
      alert("User already exist");
      return [...allUserData];
    }

    setAllUserData([...allUserData, userData]);
  };

  // SignIn handler
  let handleSignIn = (e) => {
    e.preventDefault();

    let userLoggedIn = allUserData.find(
      (data) =>
        data.userName == userData2.userName &&
        data.userPassword == userData2.userPassword
    );

    if (userLoggedIn) {
      setLoggedInUser(userLoggedIn);
      alert(`Logged In Sucessfully, Welcome ${userLoggedIn.userName}`);
      setUserData2({});
      window.location.href = "/";
    } else {
      setLoggedInUser(userLoggedIn);
      alert("Wrong Details");
    }
  };

  // (SignUp) Input Values Update Functions
  let updateUserName = (e) => {
    setUserData({ ...userData, userName: e.target.value });
  };

  let updateEmail = (e) => {
    setUserData({ ...userData, userEmail: e.target.value });
  };

  let updatePassword = (e) => {
    setUserData({
      ...userData,
      userPassword: e.target.value,
      cart: [],
      cartCount: 0,
    });
  };

  // (SignIn) Input Values Update Functions
  let updateUserName2 = (e) => {
    setUserData2({ ...userData2, userName: e.target.value });
  };

  let updatePassword2 = (e) => {
    setUserData2({ ...userData2, userPassword: e.target.value });
  };

  return (
    <>
      <div className="mt-40 px-10 max-md:px-3">
        {signIn ? (
          <form
            className="h-[350px] w-[270px] shadow-md shadow-[rgb(209,213,220)] rounded mx-auto px-5 py-6 flex flex-col"
            onSubmit={handleSignIn}
          >
            <div className="flex justify-around mb-5 gap-1">
              <h2
                className="bg-white text-black w-1/2 text-center border p-1 rounded text-xl cursor-pointer"
                onClick={SignUpOn}
              >
                SIGN UP
              </h2>
              <h2 className="bg-black text-white w-1/2 text-center p-1 rounded text-xl cursor-pointer">
                SIGN IN
              </h2>
            </div>

            <div>
              <span className="flex flex-col mb-2">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  id="userName"
                  className="border rounded px-2"
                  value={userData2.userName ? userData2.userName : ""}
                  onChange={updateUserName2}
                />
              </span>
              <span className="flex flex-col mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="border rounded px-2"
                  value={userData2.userPassword ? userData2.userPassword : ""}
                  onChange={updatePassword2}
                />
              </span>
            </div>

            <div className="w-full mt-5 flex justify-center">
              <Button text={"LogIn"} />
            </div>
          </form>
        ) : (
          <form
            className="h-[350px] w-[270px] shadow-md shadow-[rgb(209,213,220)] rounded mx-auto px-5 py-6 flex flex-col"
            onSubmit={handleSignUp}
          >
            <div className="flex justify-around mb-5 gap-1">
              <h2 className="bg-black text-white w-1/2 text-center border-r p-1 rounded text-xl cursor-pointer">
                SIGN UP
              </h2>
              <h2
                className="bg-white text-black w-1/2 text-center border p-1 rounded text-xl cursor-pointer"
                onClick={SignInOn}
              >
                SIGN IN
              </h2>
            </div>

            <div>
              <span className="flex flex-col mb-2">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  id="userName"
                  value={userData.userName ? userData.userName : ""}
                  onChange={updateUserName}
                  className="border rounded px-2"
                />
              </span>
              <span className="flex flex-col mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={userData.userEmail ? userData.userEmail : ""}
                  onChange={updateEmail}
                  className="border rounded px-2"
                />
              </span>
              <span className="flex flex-col mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={userData.userPassword ? userData.userPassword : ""}
                  onChange={updatePassword}
                  className="border rounded px-2"
                />
              </span>
            </div>

            <div className="w-full mt-5 flex justify-center">
              <Button text={"Register"} />
            </div>
          </form>
        )}
      </div>
    </>
  );
}
