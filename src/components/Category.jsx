import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category({ allProduct }) {
  let [allProducts, setAllProducts] = useState(() => allProduct || {});
  let navigate = useNavigate();

  useEffect(() => {
    if (!allProducts?.TrueWirelessEarbuds) {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data) => setAllProducts(data));
    }
  }, [allProduct]);

  return (
    <div className="px-11 flex justify-around  max-w-[1600px] mx-auto text-sm font-bold max-md:px-3 max-sm:flex flex-wrap gap-2">
      {Object.values(allProducts).map((product, idx) => {
        return (
          <span
            key={idx}
            className="flex flex-col justify-start items-center max-w-[100px] w-full cursor-pointer"
            onClick={() =>
              navigate(`/category/${product[0].category}`, { state: product })
            }
          >
            <span className="max-w-[82px] max-h-[82px]">
              <img src={product[0].categoryImage} alt={product[0].category} />
            </span>
            <span className="text-center max-md:text-[12px]">
              {product[0].categoryName}
            </span>
          </span>
        );
      })}
    </div>
  );
}
