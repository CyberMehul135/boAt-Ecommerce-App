import { useEffect, useState } from "react";

export default function ProductHeading({ word1, word2 }) {
  const [styledWord, setStyledWord] = useState([]);

  useEffect(() => {
    const updatedLetters = word2.split("").map((char, index) =>
      index >= word2.length - 2 ? (
        <span
          key={index}
          style={{ textDecoration: "underline", textDecorationColor: "red" }}
        >
          {char}
        </span>
      ) : (
        <span key={index}>{char}</span>
      )
    );
    console.log(updatedLetters);

    setStyledWord(updatedLetters);
  }, [word2]);

  return (
    <>
      <div className="max-w-[1600px] px-10 max-md:px-3 text-2xl mb-10 mt-12">
        <span className="font-medium">{word1}</span>&nbsp;
        <span className="font-bold">{styledWord}</span>
      </div>
    </>
  );
}
