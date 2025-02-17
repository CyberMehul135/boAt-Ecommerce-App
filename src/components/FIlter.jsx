import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Filter({ savedProducts, filterProducts }) {
  let [filterOn, setFilterOn] = useState(false);

  // Extract Unique Colors, Categories, and Min-Max Prices
  const colors = [...new Set(savedProducts.map((product) => product.color))];
  const categories = [
    ...new Set(savedProducts.map((product) => product.subCategory)),
  ];
  const minPrice = Math.min(...savedProducts.map((p) => p.price));
  const maxPrice = Math.max(...savedProducts.map((p) => p.price));
  const bestFor = [...new Set(savedProducts.map((b) => b.bestfor))];
  const playback = [...new Set(savedProducts.map((p) => p.playback))];

  // Selected Filters
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]); // Default Price Range
  const [selectedBestFor, setSelectedBestFor] = useState([]);
  const [selectedPlayback, setSelectedPlayback] = useState([]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]); // Ensure price range is correctly set after initial render
  }, [minPrice, maxPrice]);

  let filterOnn = () => setFilterOn(true);
  let filterOff = () => setFilterOn(false);

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange([minPrice, Number(e.target.value)]);
  };

  const handlebestForChange = (bestfor) => {
    setSelectedBestFor((prev) =>
      prev.includes(bestfor)
        ? prev.filter((b) => b !== bestfor)
        : [...prev, bestfor]
    );
  };

  const handlePlaybackChange = (pb) => {
    setSelectedPlayback((prev) =>
      prev.includes(pb) ? prev.filter((p) => p != pb) : [...prev, pb]
    );
  };

  useEffect(() => {
    let filteredProducts = savedProducts.filter((product) => {
      return (
        (selectedColors.length === 0 ||
          selectedColors.includes(product.color)) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.subCategory)) &&
        (selectedBestFor.length === 0 ||
          selectedBestFor.includes(product.bestfor)) &&
        (selectedPlayback.length === 0 ||
          selectedPlayback.includes(product.playback)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });

    filterProducts(filteredProducts);
  }, [
    selectedColors,
    selectedCategories,
    priceRange,
    selectedBestFor,
    selectedPlayback,
  ]);

  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedPlayback([]);
    setSelectedBestFor([]);
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <>
      {/* Filter Button */}
      <div className="w-full flex justify-center mt-5" onClick={filterOnn}>
        <div className="bg-[rgb(239,244,247)] px-2 py-3 rounded border border-[rgb(226,235,239)]">
          <div className="font-bold cursor-pointer">
            <TuneIcon />
            <span className="ml-3 text-[17px] max-md:text-[16px]">
              Filter By{" "}
            </span>
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      <div
        className={
          filterOn
            ? "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-10 max-md:-ml-3 bg-white border"
            : "fixed top-0 z-50 w-[320px] h-full transition-all duration-500 ease-out -ml-120 bg-white border"
        }
      >
        {/* Header */}
        <header className="bg-white px-3 h-[10%] flex items-center justify-between">
          <span>
            <TuneIcon />
            <span className="ml-3 text-xl">Filters By</span>
          </span>
          <span onClick={filterOff}>
            <CancelIcon className="cursor-pointer" />
          </span>
        </header>

        {/* Filters */}
        <div className="flex flex-col h-[75%] overflow-y-scroll p-3 bg-[rgb(239,244,247)]">
          {/* Categories Filter */}
          <div className="mb-4">
            <span className="font-bold mb-1 block">Filtered by Category</span>
            {categories.map((category, id) => (
              <label key={id} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>

          {/* Colors Filter */}
          <div className="mb-4">
            <span className="font-bold mb-1 block">Filtered by Color</span>
            {colors.map((color, id) => (
              <label key={id} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                {color}
              </label>
            ))}
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <span className="font-bold mb-1 block">Price Range</span>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>₹{minPrice}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* BestFor Filter */}
          <div className="mb-4">
            <span className="font-bold mb-1 block">Filtered by Bestfor</span>
            {bestFor.map((bestfor, id) => (
              <label key={id} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={selectedBestFor.includes(bestfor)}
                  onChange={() => handlebestForChange(bestfor)}
                />
                {bestfor}
              </label>
            ))}
          </div>

          {/* Playback Filter */}
          <div className="mb-4">
            <span className="font-bold mb-1 block">Filtered by Playback</span>
            {playback.map((pb, id) => (
              <label key={id} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={selectedPlayback.includes(pb)}
                  onChange={() => handlePlaybackChange(pb)}
                />
                {pb}
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="h-[15%] w-full flex justify-center items-center px-3 gap-1">
          <span className="w-[70%]">
            <Button text={"Clear All"} handleClick={clearAllFilters} />
          </span>
        </div>
      </div>
    </>
  );
}
