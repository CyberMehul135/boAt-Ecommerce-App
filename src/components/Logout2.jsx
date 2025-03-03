import LogoutIcon from "@mui/icons-material/Logout";
import Button from "./Button";

export default function Logout2({ loggedInUser, setLoggedInUser }) {
  let handleLogout = () => {
    let logout = confirm("Are you sure you want to logout!");
    if (logout) {
      setLoggedInUser(false);
      localStorage.removeItem("loggedInUser");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  return (
    <>
      <div onClick={handleLogout} className="w-full flex justify-center">
        <Button text={"Logout"} />
      </div>
    </>
  );
}
