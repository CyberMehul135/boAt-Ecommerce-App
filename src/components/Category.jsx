import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  let [allProducts, setAllProducts] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="px-11 flex justify-around  max-w-[1600px] mx-auto text-sm font-bold">
      {Object.values(allProducts).map((product, idx) => {
        return (
          <span
            key={idx}
            className="flex flex-col justify-start items-center max-w-[100px] w-full cursor-pointer"
            onClick={() => navigate(`/category/${product[0].category}`)}
          >
            <span className="max-w-[82px] max-h-[82px]">
              <img src={product[0].categoryImage} alt={product[0].category} />
            </span>
            <span className="text-center">{product[0].categoryName}</span>
          </span>
        );
      })}
    </div>
  );
}
