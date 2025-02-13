export default function ServiceHighlights() {
  return (
    <div className="w-full bg-[rgb(246,250,255)] text-[12px]">
      <div className="w-full max-w-[1600px] h-[72px] mx-auto px-1 grid grid-cols-4 gap-2 max-md:h-[100px]">
        <span className="flex items-center justify-center max-md:flex-col max-md:text-center">
          <img
            src="/ServiceHighlights/warranty.svg"
            alt="1 Year Warranty"
            className="max-w-[58px]"
          />
          <span className="flex flex-col">
            <span className="font-semibold">1 Year</span>
            <span>Warranty</span>
          </span>
        </span>

        <span className="flex items-center justify-center max-md:flex-col max-md:text-center">
          <img
            src="/ServiceHighlights/replacement.svg"
            alt="7 Day Replacement"
            className="max-w-[58px]"
          />
          <span className="flex flex-col">
            <span className="font-semibold">7-day</span>
            <span>Replacement</span>
          </span>
        </span>

        <span className="flex items-center justify-center max-md:flex-col max-md:text-center">
          <img
            src="/ServiceHighlights/delivery.svg"
            alt="Free Expree Delivery"
            className="max-w-[58px]"
          />
          <span className="flex flex-col">
            <span className="font-semibold">Free Express</span>
            <span>Delivery*</span>
          </span>
        </span>

        <span className="flex items-center justify-center max-md:flex-col max-md:text-center">
          <img
            src="/ServiceHighlights/Billing.svg"
            alt="GST Billing"
            className="max-w-[58px]"
          />
          <span className="flex flex-col">
            <span className="font-semibold">GST</span>
            <span>Billing</span>
          </span>
        </span>
      </div>
    </div>
  );
}
