import { useEffect, useState } from "react";

export default function ToastPopup({
  popUp,
  setPopUp,
  loggedInUser,
  setLoggedInUser,
}) {
  useEffect(() => {
    if (loggedInUser) {
      let timer;
      if (popUp) {
        timer = setTimeout(() => {
          setLoggedInUser({ ...loggedInUser, popUp: { on: false } });
        }, 2000);
      }
      return () => clearTimeout(timer);
    } else {
      let timer;
      if (popUp) {
        timer = setTimeout(() => {
          setPopUp({ ...popUp, on: false });
        }, 2000);
      }
      return () => clearTimeout(timer);
    }
  }, [popUp][loggedInUser]);

  return (
    <>
      {loggedInUser ? (
        <div
          className={
            loggedInUser.popUp.on
              ? `fixed right-[10px] transition-all duration-600 z-50 w-fit min-w-[250px] min-h-[30px] bg-red-400 text-white font-semibold rounded flex justify-center items-center mt-5`
              : `fixed -right-[260px] transition-all duration-600 z-50 w-fit min-w-[250px] min-h-[30px] bg-red-400 text-white font-semibold rounded flex justify-center items-center mt-5`
          }
        >
          {`Add "${loggedInUser.popUp.name}"`}
        </div>
      ) : (
        <div
          className={
            popUp.on
              ? `fixed right-[10px] transition-all duration-600 z-50 w-fit min-w-[250px] min-h-[30px] bg-red-400 text-white font-semibold rounded flex justify-center items-center mt-5`
              : `fixed -right-[260px] transition-all duration-600 z-50 w-fit min-w-[250px] min-h-[30px] bg-red-400 text-white font-semibold rounded flex justify-center items-center mt-5`
          }
        >
          {`Add "${popUp.name}"`}
        </div>
      )}
    </>
  );
}
