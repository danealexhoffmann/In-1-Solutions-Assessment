import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const ProductDetails = () => {
  let params = useParams();

  // Call API On Mount
  useEffect(() => {
    fetchAvailableProducts();
  });

  const [productInfo, setProductInfo] = useState([]);

  // Fetch API Data and Add to State
  const fetchAvailableProducts = async () => {
    const data = await fetch(
      "https://shop.bookin1.com/api/property/7716/allvouchers"
    );
    const items = await data.json();
    setProductInfo(items.vouchers[params.id]);
    // console.log(productInfo);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-dark-teal dark:text-white pt-32">
      {/* Title */}
      <h1 className=" product-title text-center font-GildaDisplay text-4xl text-dark-teal pt-5 pb-10 mx-7 dark:text-white lg:text-7xl lg:mx-20">
        {productInfo.name}
      </h1>
      {/* Title-Image */}
      <div className="w-full h-[187px] lg:h-[540px] mb-24">
        <img
          className="w-full h-[187px] object-cover lg:h-[540px]"
          src={productInfo.voucherImageUrl}
          loading="lazy"
          alt={productInfo.name}
        />
      </div>

      {/* Description */}
      <div className="lg:grid lg:grid-cols-2 2xl:mx-60 lg:gap-16 transition-all">
        {/* Description-Text */}
        <div className="mx-7">
          <h1 className="product-title text-start font-GildaDisplay text-5xl leading-tight text-dark-teal pt-5 pb-7 dark:text-white">
            {productInfo.name}
          </h1>
          <div
            className="font-Poppins font-light text-start text-xl pb-1"
            dangerouslySetInnerHTML={{
              __html: productInfo.description,
            }}
          />
          <h2 className="text-center font-Poppins text-6xl font-light mt-5 lg:text-left">
            <h3 className="text-xl inline-block">{productInfo.currency}</h3>{" "}
            {productInfo.displayPrice}
          </h2>
          {/* Book Now Button */}
          <div className="text-center mt-10 mb-20 lg:text-left">
            <button
              href={productInfo.voucherUrl}
              className="font-Poppins bg-white text-2xl text-dark-teal border border-solid border-2 border-dark-teal w-full py-3 transition-all hover:bg-dark-teal hover:border-dark-teal hover:text-white dark:bg-dark-teal dark:text-white dark:border-white hover:dark:bg-white hover:dark:text-dark-teal lg:w-72 "
            >
              BOOK NOW
              <span>
                <ArrowSmRightIcon className="h-5 w-5 inline-block ml-2 mb-0.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Description-Image */}
        <div className="">
          <img
            className="pb-10 mx-auto max-w-full lg:pt-5"
            src={productInfo.voucherImageUrl}
            loading="lazy"
            alt={productInfo.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
