import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
  let handleLogout = () => {
    let logout = confirm("Are you sure you want to logout!");
    if (logout) {
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    }
  };

  return (
    <>
      <div onClick={handleLogout}>
        <LogoutIcon className="cursor-pointer" />
      </div>
    </>
  );
}
