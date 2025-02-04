import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function SortBy({ products, sortProducts }) {
  let sortProduct = (e) => {
    let sort = e.target.value;

    let sortedProducts =
      sort == "featured"
        ? products.sort((a, b) => a.id - b.id)
        : sort == "high to low"
        ? products.sort((a, b) => b.price - a.price)
        : sort == "low to high"
        ? products.sort((a, b) => a.price - b.price)
        : sort == "lowPrice"
        ? products.filter((product) => product.price < 900)
        : products;
    sortProducts(sortedProducts);
    console.log(sortedProducts);
  };
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="bg-[rgb(239,244,247)] px-2 py-3 rounded border border-[rgb(226,235,239)]">
        <label htmlFor="filter" className="font-bold">
          {" "}
          <SwapVertIcon />
          <span className="ml-1 text-[17px]">Sort By :</span>
        </label>
        <select
          id="filter"
          onChange={sortProduct}
          className="cursor-pointer outline-none"
        >
          <option value="featured">Featured</option>
          <option value="low to high">Price, low to high</option>
          <option value="high to low">Price, high to low</option>
          <option value="lowPrice">Low Price</option>
        </select>
      </div>
    </div>
  );
}
