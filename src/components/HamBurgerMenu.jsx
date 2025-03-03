import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import LogInSymbol from "./LogInSymbol";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout2 from "./Logout2";

export default function HamBurgerMenu({ loggedInUser, setLoggedInUser }) {
  let [hamBurgerMenuOn, setHamburgerMenuOn] = useState(false);

  const onHamburgerMenu = () => setHamburgerMenuOn(!hamBurgerMenuOn);
  const offHamburgerMenu = () => setHamburgerMenuOn(false);

  return (
    <>
      <div
        className="hidden max-md:block cursor-pointer"
        onClick={onHamburgerMenu}
      >
        <MenuIcon />
      </div>

      {/* DimEffect */}
      {hamBurgerMenuOn && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-40"
          onClick={offHamburgerMenu} // Click outside to close sidebar
        ></div>
      )}

      <div
        className={
          hamBurgerMenuOn
            ? "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-3 bg-white border border-[rgb(209,213,220)]"
            : "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-120 bg-white border border-[rgb(209,213,220)]"
        }
      >
        {/* Header */}
        <header className="bg-white px-3 h-[10%] flex items-center justify-between">
          <span>
            <span className="text-xl font-bold flex gap-2">
              <span>
                {loggedInUser ? (
                  <LogInSymbol loggedInUser={loggedInUser} />
                ) : (
                  <AccountCircleIcon />
                )}
              </span>
              <span>Hello {loggedInUser ? loggedInUser.userName : "User"}</span>
            </span>
          </span>
          <span onClick={offHamburgerMenu}>
            <CancelIcon className="cursor-pointer" />
          </span>
        </header>

        {/* Links */}
        <div className="h-[90%] bg-[rgb(239,244,247)] flex flex-col px-3 ">
          <Link to={`/`}>
            <span className="h-14 flex items-center">
              <span>
                <HomeIcon />
              </span>
              <span className="ml-2">Home</span>
            </span>
          </Link>
          <Link to={`/product`}>
            <span className="h-14 flex items-center">
              <span>
                <CategoryIcon />
              </span>
              <span className="ml-2">boAt Products</span>
            </span>
          </Link>

          <Link to={`/about`}>
            <span className="h-14 flex items-center">
              <span>
                <InfoIcon />
              </span>
              <span className="ml-2">Contact</span>
            </span>
          </Link>

          <span className="mt-auto mb-10">
            <Logout2
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </span>
        </div>
      </div>
    </>
  );
}
