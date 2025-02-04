import TuneIcon from "@mui/icons-material/Tune";

export default function Filter({ savedProducts, filterProducts }) {
  let handleFilter = (e) => {
    let filter = e.target.value;

    let filteredProducts =
      filter == "feature"
        ? savedProducts.filter((product) => product.id >= 1)
        : filter == "bestSeller"
        ? savedProducts.filter((product) => product.bestSeller == "BestSeller")
        : filter == "bestRating"
        ? savedProducts.filter((product) => product.rating > 4.8)
        : filter == "lowPrice"
        ? savedProducts.filter((product) => product.price < 900)
        : savedProducts;
    filterProducts(filteredProducts);
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="bg-[rgb(239,244,247)] px-2 py-3 rounded border border-[rgb(226,235,239)]">
        <label htmlFor="filter" className="font-bold">
          {" "}
          <TuneIcon />
          <span className="ml-1 text-[17px]">Filter :</span>
        </label>
        <select
          id="filter"
          onChange={handleFilter}
          className="cursor-pointer outline-none"
        >
          <option value="featured">Featured</option>
          <option value="bestSeller">Best Seller</option>
          <option value="bestRating">Best Rating</option>
          <option value="lowPrice">Low Price</option>
        </select>
      </div>
    </div>
  );
}
