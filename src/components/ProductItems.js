import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Imgix from "react-imgix";
import "../App.css";

const ProductItems = () => {
  const imgixProps = {
    imgixParams: {
      fit: "crop",
    },
  };

  // Call API On Mount
  useEffect(() => {
    fetchAvailableProducts();
  }, []);

  const [availableProducts, setAvailableProducts] = useState([]);

  // Fetch API Data and Add to State
  const fetchAvailableProducts = async () => {
    const data = await fetch(
      "https://shop.bookin1.com/api/property/7716/allvouchers"
    );
    const items = await data.json();
    setAvailableProducts(items.vouchers);
  };

  // Search Bar Query State
  const [query, setQuery] = useState("");

  return (
    <div className="container mx-auto py-10 bg-light-gray">
      <div className="text-center pt-10 pb-20">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder="Search offers"
          className="w-[400px] py-3 font-Poppins font-light px-4 border border-solid border-2 border-dark-teal"
        />
      </div>

      {/* Grid */}
      <div className="product-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* column */}
        {/* Filter Data According to Search Value & Map Data to HTML Elements */}
        {availableProducts
          .filter((val) => {
            if (query == "") {
              return val;
            } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
              return val;
            }
          })
          .map((product) => (
            <Link to={`/product/${product.sequence - 1}`} className="mx-auto">
              <div
                key={product.id}
                sequence={product.sequence}
                className="flex justify-center flex-col bg-white h-fit w-400 shrink grow mx-auto"
              >
                {/* Image */}
                <Imgix
                  {...imgixProps}
                  src={product.voucherImageUrl}
                  height={237}
                  width={400}
                  alt="product-image"
                  className="mb-3"
                />

                {/* Name */}
                <div className="flex flex-col align-center justify-center h-24 my-8">
                  <h4 className="font-GildaDisplay text-center text-3xl text-dark-gray mx-6">
                    {product.name}
                  </h4>
                </div>

                {/* Price */}
                <h3 className="font-Poppins font-light text-dark-gray text-center text-2xl my-5">
                  <h3 className="text-sm text-dark-gray inline-block">
                    {product.currency}
                  </h3>{" "}
                  {product.displayPrice}
                </h3>

                {/* Description */}
                <div
                  className="description font-Poppins font-light text-medium-gray text-start mx-10 h-24 overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: product.description.slice(0, 160),
                  }}
                />

                {/* Button */}
                <div className="read-more text-center mb-6">
                  <button className="font-Poppins mx-auto bg-dark-teal text-white px-32 py-3 border border-solid border-2 border-dark-teal transition-all hover:bg-white hover:border hover:border-solid hover:border-2 hover:border-dark-teal hover:text-dark-teal">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductItems;
