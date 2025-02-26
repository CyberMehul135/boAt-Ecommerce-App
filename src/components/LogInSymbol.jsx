export default function LogInSymbol({ loggedInUser }) {
  return (
    <>
      <div className="h-6 w-6 border-[2px] border-[rgb(84,82,82)] rounded-[50%] mt-[2px] flex justify-center items-center text-[13px] text-red-600 font-semibold">
        {loggedInUser.userName[0]}
      </div>
    </>
  );
}
