export default function Button({ text, handleClick }) {
  return (
    <>
      <button
        className={`w-full h-10 rounded-lg bg-[rgb(26,32,36)] text-white cursor-pointer min-w-28 max-w-[200px]`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}
