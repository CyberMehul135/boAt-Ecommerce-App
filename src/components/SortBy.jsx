import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function SortBy({ products, sortProducts }) {
  let sortProduct = (e) => {
    let sort = e.target.value;

    let sortedProducts =
      sort == "featured"
        ? products.sort((a, b) => a.id - b.id)
        : sort == "best selling"
        ? products.sort((a, b) => b.sales - a.sales)
        : sort == "high to low"
        ? products.sort((a, b) => b.price - a.price)
        : sort == "low to high"
        ? products.sort((a, b) => a.price - b.price)
        : sort == "A to Z"
        ? products.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { numeric: true })
          )
        : sort == "Z to A"
        ? products.sort((a, b) =>
            b.name.localeCompare(a.name, undefined, { numeric: true })
          )
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
          className="cursor-pointer outline-none max-sm:w-[20px]"
        >
          <option value="featured">Featured</option>
          <option value="best selling">Best Selling</option>
          <option value="low to high">Price, low to high</option>
          <option value="high to low">Price, high to low</option>
          <option value="A to Z">Alphabetically, A - Z</option>
          <option value="Z to A">Alphabetically, Z - A</option>
        </select>
      </div>
    </div>
  );
}
