import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export default function HamBurgerMenu() {
  let [hamBurgerMenuOn, setHamburgerMenuOn] = useState(false);

  const onHamburgerMenu = () => setHamburgerMenuOn(!hamBurgerMenuOn);
  const offHamburgerMenu = () => setHamburgerMenuOn(!hamBurgerMenuOn);

  return (
    <>
      <div className="hidden max-md:block" onClick={onHamburgerMenu}>
        <MenuIcon />
      </div>

      <div
        className={
          hamBurgerMenuOn
            ? "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-3 bg-white border"
            : "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-120 bg-white border"
        }
      >
        {/* Header */}
        <header className="bg-white px-3 h-[10%] flex items-center justify-between">
          <span>
            <span className="text-xl font-bold">Hello User</span>
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

          <span className="h-14 flex items-center">
            <span>
              <InfoIcon />
            </span>
            <span className="ml-2">About</span>
          </span>
        </div>
      </div>
    </>
  );
}
