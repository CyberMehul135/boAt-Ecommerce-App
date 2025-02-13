import Logo from "../assets/logo.svg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import HamBurgerMenu from "./HamburgerMenu";

export default function NavBar({ cartCount }) {
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
          <span className="ml-4">About</span>
        </div>

        <div className="ml-auto">
          <span>
            <PermIdentityOutlinedIcon className="text-[rgba(65,63,63,0.9)]" />
          </span>
          <span className="ml-5">
            <Link to={`/cart`}>
              <ShoppingCartOutlinedIcon className="text-[rgba(65,63,63,0.9)]" />
              <sup
                className={
                  cartCount
                    ? "px-[5px] rounded-lg bg-red-500 text-white text-[11px]"
                    : null
                }
              >
                {cartCount}
              </sup>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
