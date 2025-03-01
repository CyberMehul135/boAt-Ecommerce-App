import Logo from "../assets/logo.svg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import HamBurgerMenu from "./HamburgerMenu";
import Logout from "./Logout";
import { useEffect, useState } from "react";
import LogInSymbol from "./LogInSymbol";

export default function NavBar({ cartCount, loggedInUser }) {
  return (
    <nav className="h-20 w-full border-b-[1px] border-[rgb(219,219,219)] fixed top-9 left-0 z-50 bg-white">
      <div className="h-20 max-w-[1600px] flex items-center pl-10 pr-10 mx-auto max-md:px-3 max-md:gap-4">
        <div>
          <HamBurgerMenu />
        </div>

        <div className="w-[85px] mr-12 max-md:w-[60px]">
          <img src={Logo} alt="" />
        </div>

        <div className="text-[rgba(65,63,63,0.9)] font-medium max-md:hidden">
          <span className="ml-4">
            <Link to={`/`}>Home</Link>
          </span>
          <span className="ml-4">
            <Link to={`/product`}>boAt Products</Link>
          </span>
          <span className="ml-4">
            <Link to={`/about`}>Contact</Link>{" "}
          </span>
        </div>

        <div className="ml-auto flex gap-5">
          <span>
            <Link to={`/login`}>
              {loggedInUser ? (
                <LogInSymbol loggedInUser={loggedInUser} />
              ) : (
                <PermIdentityOutlinedIcon className="text-[rgba(65,63,63,0.9)]" />
              )}
            </Link>
          </span>
          <span className="max-md:hidden text-[rgb(84,82,82)]">
            <Logout />
          </span>
          <span>
            <Link to={`/cart`}>
              <ShoppingCartOutlinedIcon className="text-[rgba(65,63,63,0.9)]" />
              <sup
                className={
                  loggedInUser
                    ? loggedInUser.cartCount
                      ? "px-[5px] rounded-lg bg-red-500 text-white text-[11px]"
                      : null
                    : cartCount
                    ? "px-[5px] rounded-lg bg-red-500 text-white text-[11px]"
                    : null
                }
              >
                {loggedInUser ? loggedInUser.cartCount : cartCount}
              </sup>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
