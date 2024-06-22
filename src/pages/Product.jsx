// react
import { useState } from "react";

// components
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BlurBox from "../components/BlurBox";

// react router dom
import { useParams, Navigate } from "react-router-dom";

// hooks
import { usePathName } from "../hooks/usePathName";
import { useBasketContext } from "../context/BasketContext";
import { useUser } from "../context/UserContext";

// datas
import { allProducts } from "../data/data";
import { icons } from "../data/Icons";
import { toast } from "react-toastify";

const Product = () => {
  // get value of param
  const { productName } = useParams();

  // get the selected product
  const selectedProduct = allProducts.find(
    (product) => product.name === productName.replace(/-/g, " ")
  );

  console.log(selectedProduct);

  // product states
  const [productSize, setProductSize] = useState(selectedProduct?.sizes[0]);
  const [productColor, setProductColor] = useState(selectedProduct?.colors[0]);

  // get path name array
  const paths = usePathName();

  const { addProduct } = useBasketContext();
  const { isSignin } = useUser();

  const addToCartHandler = (product) => {
    if (isSignin) {
      addProduct(product);
    } else {
      toast.error("Please Login Or Make Account");
    }
    setProductColor(selectedProduct.colors[0]);
    setProductSize(selectedProduct.sizes[0]);
  };

  return selectedProduct !== undefined ? (
    <>
      <Header />

      <main className="my-6">
        <BlurBox />

        <div className="container">
          <Breadcrumb paths={paths} />

          {/* product info */}
          <div className="flex flex-col rounded-xl shadow-md bg-white dark:bg-zinc-900 lg:flex-row">
            {/* product info left side */}
            <div className="flex flex-col p-4 lg:flex-1">
              {/* product icons */}
              <div className="flex-align-center gap-x-2 [&>span]:cursor-pointer">
                <span className="grid-center text-zinc-700 dark:text-white text-xl">
                  {icons.compass}
                </span>
                <span className="grid-center text-zinc-700 dark:text-white text-xl">
                  {icons.heart}
                </span>
                <span className="grid-center text-zinc-700 dark:text-white text-xl">
                  {icons.stackshare}
                </span>
              </div>

              {/* product image */}
              <img
                src={selectedProduct.img}
                alt="product-image"
                className="w-full h-96 object-contain lg:h-auto"
              />
            </div>

            {/* product info right side */}
            <div className="flex flex-col p-4 lg:flex-[4]">
              <h2 className="text-zinc-700 dark:text-white text-xl">
                {selectedProduct.name}
              </h2>
              <span className="text-sm text-primary mt-2">
                Product Code : #6457
              </span>

              <div className="flex flex-col lg:flex-row lg:flex-1">
                <div className="mt-3 border-t border-gray-100 dark:border-white/5">
                  {/* color picker box */}
                  <div>
                    <h3 className="my-2 text-zinc-700 dark:text-white text-lg">
                      Pick A Color
                    </h3>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-x-1 text-zinc-700 dark:text-white">
                      {selectedProduct.colors.map((color) => (
                        <div
                          key={color}
                          onClick={() => setProductColor(color)}
                          className={`flex-align-center cursor-pointer rounded-full border-2 p-3 shadow gap-x-2 ${
                            productColor === color
                              ? "border-primary"
                              : "dark:border-white/5"
                          }`}
                        >
                          <span
                            style={{ backgroundColor: color }}
                            className="h-5 w-5 rounded-full border-2 shadow border-gray-200 dark:border-white/30"
                          ></span>

                          <span className="capitalize">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* size picker box */}
                  <div className="size-box">
                    <h3 className="my-2 dark:text-white text-zinc-700 text-lg">
                      Choes Size
                    </h3>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-1 mt-3 dark:text-white">
                      {selectedProduct.sizes.map((size) => (
                        <div
                          onClick={() => setProductSize(size)}
                          key={size}
                          className={`cursor-pointer rounded-full border-2 p-2.5 text-center md:text-left mr-2 shadow uppercase ${
                            productSize === size
                              ? "border-primary"
                              : "dark:border-white/5"
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-pay-box my-6 lg:m-0 lg:ml-10 lg:flex lg:flex-col lg:justify-end">
                  {/* ALERT-BOX */}
                  <div className="py-4 px-3 rounded-xl text-xs sm:text-sm flex-align-center gap-2 text-primary bg-emerald-500/10 dark:bg-emerald-400/5 gap-x-2">
                    <span>{icons.check}</span>
                    Guarantee of physical health and authenticity of goods
                  </div>
                  <h4 className="text-primary my-5 text-base sm:text-lg md:text-2xl">
                    ${selectedProduct.price}
                  </h4>
                  <button
                    onClick={() =>
                      addToCartHandler({
                        ...selectedProduct,
                        productColor,
                        productSize,
                      })
                    }
                    className="w-full p-4 rounded-xl bg-primary hover:bg-emerald-700 text-white text-sm"
                    type="button"
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  ) : (
    <Navigate to="/notfound" />
  );
};

export default Product;
