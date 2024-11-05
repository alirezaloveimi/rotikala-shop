// react
import { useMemo, useState } from "react";

// components
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BlurBox from "../components/BlurBox";
import ProductBox from "../components/ProductBox";
import Footer from "../components/Footer";

// datas
import { allProducts as products } from "../data/data";
import { icons } from "../data/Icons";

import { pathName } from "../utils/pathName";

const Products = () => {
  const [sortedBy, setSortedBy] = useState("inexpensive");

  const paths = pathName();

  // sort the products
  const sortProductsFunc = () => {
    const sortProductArray = structuredClone(products).sort((a, b) =>
      sortedBy === "expensive" ? b.price - a.price : a.price - b.price
    );

    return sortProductArray;
  };

  const sortedProducts = useMemo(
    () => sortProductsFunc(),
    [products, sortedBy]
  );

  return (
    <>
      <Header />

      <main className="my-6">
        {/* blur box */}
        <BlurBox />

        <div className="container">
          {/* breadcrumb */}
          <Breadcrumb paths={paths} />

          {/* sorted prodct  wrapper */}
          <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row md:items-center dark:bg-zinc-900 p-3 gap-3">
            <div className="flex-align-center p-3 gap-2 justify-center md:justify-start">
              <span className="text-sm text-zinc-600 dark:text-zinc-300 cursor-pointer">
                Sorted By
              </span>
              <span className="text-zinc-600 dark:text-zinc-300 text-xl">
                {icons.sort}
              </span>
            </div>

            <button
              disabled={sortedBy === "inexpensive"}
              onClick={() => setSortedBy("inexpensive")}
              className={`text-left dark:text-zinc-300 rounded-lg p-3 text-sm lg:px-4 cursor-pointer ${
                sortedBy === "inexpensive"
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 hover:dark:bg-black"
              }`}
            >
              Inexpensive
            </button>

            <button
              disabled={sortedBy === "expensive"}
              onClick={() => setSortedBy("expensive")}
              className={`text-left dark:text-zinc-300 rounded-lg p-3 text-sm lg:px-4 cursor-pointer ${
                sortedBy === "expensive"
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 hover:dark:bg-black"
              }`}
            >
              Expensive
            </button>
          </div>

          {/* products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5">
            {sortedProducts.map((product) => (
              <ProductBox key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Products;
