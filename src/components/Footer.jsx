import logo from "../assets/logo.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="min-h-[300px] px-8 py-10 bg-[rgb(231,240,245)] mt-10 mx-2 max-md:px-3">
      <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-5 max-w-[1600px] mx-auto">
        <span>
          <img
            className="mb-3 max-sm:w-[130px]"
            src={logo}
            alt="company Logo"
          />
          <h2 className="text-2xl font-bold text-[rgb(41,48,54)]">
            Subscribe to our email alerts!
          </h2>
        </span>

        <span className="flex flex-col text-[13px] space-y-2 lg:justify-self-center">
          <span className="font-bold mb-4">SHOP</span>
          <span>True Wireless Earbirds</span>
          <span>Wired Headphones</span>
          <span>Smart Watches</span>
          <span>Wireless Headphones</span>
          <span>Wireless Speakers</span>
          <span>Neckbands</span>
        </span>

        <span className="flex flex-col text-[13px] space-y-2 lg:justify-self-center">
          <span className="font-bold mb-4">FOOTER POLICIES</span>
          <span>Return Your Order</span>
          <span>Shipping Policy</span>
          <span>Return, Refund, and Cancellation</span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Fraud Protection</span>
          <span>Contact Us</span>
        </span>

        <span className="flex flex-col text-[13px] lg:justify-self-center">
          <span className="font-bold mb-4">FOLLOW US</span>
          <p className="mb-5">Stay in touch!</p>
          <span>
            <span className="p-3 border-y border-l">
              <FacebookOutlinedIcon />
            </span>
            <span className="p-3 border-y border-l">
              <InstagramIcon />
            </span>
            <span className="p-3 border-y border-l">
              <XIcon />
            </span>
            <span className="p-3 border-y border-x">
              <YouTubeIcon />
            </span>
          </span>
        </span>
      </div>
    </footer>
  );
}
