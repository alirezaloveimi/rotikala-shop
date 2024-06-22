// react
import { useEffect, useRef, useState } from "react";

// react router dom
import { Link } from "react-router-dom";

// hooks
import { useTheme } from "../context/ThemeContext";
import { useWidth } from "../hooks/useWidth";
import { useBasketContext } from "../context/BasketContext";
import { useUser } from "../context/UserContext";

// components
import Sidebar from "./Sidebar";
import Dropdowm from "./Dropdowm";
import MenuItems from "./MenuItems";

// datas
import { icons } from "../data/Icons";
import { menuItems } from "../data/data";

const Header = () => {
  // sidebar state
  const [basketSidebar, setBasketSidebar] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);

  // dropdowm sidebar
  const [basketDropdown, setBasketDropdown] = useState(false);

  // line state
  const [linePos, setLinePos] = useState({ width: 0, left: 0 });

  //  hooks
  const { theme, toggleTheme } = useTheme();
  const windowWidth = useWidth();
  const {
    basketLength,
    basket,
    addProduct,
    minesProduct,
    removeFromBasket,
    calcAllPrice,
  } = useBasketContext();
  const { isSignin } = useUser();

  // basket Ref
  const basketRef = useRef(null);

  // close dropdown when click outside of it
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!basketRef.current?.contains(e.target) && basketDropdown) {
        setBasketDropdown(false);
      }
    };

    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, [basketDropdown]);

  // sidebar handlers
  const toggleBasketSidebar = () => setBasketSidebar((b) => !b);
  const toggleMenuSidebar = () => setMenuSidebar((m) => !m);

  // dropdown handler
  const toggleBasketDropdown = () => setBasketDropdown((b) => !b);

  // line enter and leave mouse event handler
  const enterHandler = (target) => {
    const { offsetWidth, offsetLeft } = target;

    setLinePos({ width: offsetWidth, left: offsetLeft });
  };
  const leaveHandler = (target) => {
    const { offsetLeft } = target;

    setLinePos({ width: 0, left: offsetLeft });
  };

  return (
    <header className="sticky top-0 z-50 shadow bg-white dark:bg-zinc-900 py-4 lg:py-0 lg:pt-4">
      <div className="container">
        <div className="flex-align-center flex-wrap gap-y-3.5 lg:justify-between">
          {/* icons wrapper */}
          <div className="flex items-center">
            {/* theme */}
            <div>
              <button
                onClick={toggleTheme}
                type="button"
                className="grid-center text-xl text-zinc-700 dark:text-white"
              >
                {theme === "dark" ? icons.sun : icons.moon}
              </button>
            </div>
            {/* basket */}
            {isSignin && (
              <div
                ref={basketRef}
                className="relative cursor-pointer mr-3 ml-2"
              >
                <button
                  onClick={
                    windowWidth < 992
                      ? toggleBasketSidebar
                      : toggleBasketDropdown
                  }
                  type="button"
                  className="relative grid-center text-xl text-zinc-700 dark:text-white"
                >
                  {icons.shopping}
                  <span className="absolute w-5 h-5 -top-3 -right-3.5 bg-primary rounded-full text-white grid-center text-xs font-bold">
                    {basketLength}
                  </span>
                </button>

                <Dropdowm show={basketDropdown}>
                  {/* dropdown header */}
                  <div className="flex-align-center text-primary space-x-2">
                    <span>Shopping Card</span>
                    {icons.arrowForwar}
                  </div>

                  {/* dropdown body */}
                  <ul className="h-60 overflow-auto mt-6 mb-0">
                    {basket.map((product) => (
                      <li
                        key={product.uniqueKey}
                        className="flex py-3 gap-x-2.5 border-b border-b-gray-100 dark:border-b-white/5"
                      >
                        {/* PRODUCT-IMAGE */}
                        <div className="relative">
                          <img
                            src={product.img}
                            className="w-[120px] h-[120px] -scale-x-100"
                            alt="card-img"
                          />
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromBasket(product.uniqueKey);
                            }}
                            className="absolute w-8 h-8 cursor-pointer grid-center -top-2 rounded-full bg-gray-100 dark:bg-black"
                          >
                            <span className="text-red-600 text-xl">
                              {icons.close}
                            </span>
                          </div>
                        </div>
                        {/* PRODUCT-CONTENT */}
                        <div className="flex flex-col gap-4 flex-1">
                          {/* PRODUCT-NAME */}
                          <p className="text-zinc-700 dark:text-white text-xs sm:text-sm">
                            {product.name}
                          </p>

                          {/* PRODUCT-COLOR */}
                          <div className="flex-align-center text-zinc-500 dark:text-gray-300 text-xs gap-x-2">
                            <span>Size : {product.productSize}</span>
                            <div className="rounded-full bg-gray-200 w-px h-3"></div>
                            <div className="flex-align-center gap-x-2">
                              <div
                                style={{
                                  backgroundColor: product.productColor,
                                }}
                                className="w-4 h-4 shadow rounded-full"
                              ></div>
                              <span className="color">
                                {product.productColor}
                              </span>
                            </div>
                          </div>

                          {/* PRODUCT-COUNT-PRICE */}
                          <div className="flex-center-between">
                            <span className="text-primary mr-3">
                              ${product.price * product.count}
                            </span>
                            <div className="flex-align-center rounded-lg border border-gray-100 dark:border-white/5 px-2 gap-x-5">
                              <span
                                onClick={() => addProduct(product)}
                                className="cursor-pointer text-green-500 text-[20px] select-none"
                              >
                                +
                              </span>
                              <span className="text-lg dark:text-white select-none">
                                {product.count}
                              </span>
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  minesProduct(product);
                                }}
                                className="cursor-pointer text-red-600 text-[20px] select-none"
                              >
                                -
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* dropdown footer */}
                  <div className="py-2 flex-center-between">
                    {/* BASKET-FOOTER-BUTTON */}
                    <button className="w-32 py-3 bg-primary text-white text-sm rounded-lg hover:bg-emerald-600">
                      See Shoing Cart
                    </button>

                    {/* BASKET-FOOTER-PRICE */}
                    <div className="flex flex-col">
                      <span className="text-sm capitalize text-zinc-500 dark:text-zinc-400">
                        amount payable
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-300">
                        {calcAllPrice}$
                      </span>
                    </div>
                  </div>
                </Dropdowm>
              </div>
            )}
            {/* user */}
            <div>
              <Link to={isSignin ? "/dashboard" : "/signin"}>
                <button
                  type="button"
                  className="grid-center text-xl text-zinc-700 dark:text-white"
                >
                  {isSignin ? icons.dashboard : icons.user}
                </button>
              </Link>
            </div>
          </div>

          {/* header logo */}
          <div className="h-10 mx-auto lg:order-3 lg:mx-0 lg:h-12">
            <Link to="/">
              <img
                src="/images/logo.png"
                className="h-full object-cover"
                alt="logo"
              />
            </Link>
          </div>

          {/* hamberger btn */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenuSidebar}
              type="button"
              className="grid-center text-xl text-zinc-700 dark:text-white"
            >
              {icons.hamberger}
            </button>
          </div>

          {/* input box */}
          <div className="w-full lg:max-w-[36rem] flex-align-center gap-2 px-3 h-12 bg-main rounded-lg">
            <span className="text-xl text-zinc-700 dark:text-white">
              {icons.search}
            </span>
            <input
              type="text"
              className="w-full h-full outline-none bg-transparent text-sm text-zinc-700 dark:text-white placeholder:text-sm placeholder:text-zinc-500 placeholder:dark:text-zinc-400"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* bottom menu */}
        {windowWidth > 992 && (
          <div className="hidden lg:block lg:w-fit lg:mt-8 relative">
            <ul className="flex items-center gap-x-8">
              {menuItems.map((item) => (
                <MenuItems
                  leave={leaveHandler}
                  enter={enterHandler}
                  type="desktop"
                  key={item.id}
                  {...item}
                />
              ))}
            </ul>
            {/* line */}
            <div
              style={{ width: linePos.width, left: linePos.left }}
              className="absolute top-full h-0.5 bg-primary transition"
            ></div>
          </div>
        )}
      </div>

      {/* sidebar */}
      {windowWidth < 992 && (
        <div className="lg:hidden">
          {/* basket sidebar */}
          <Sidebar
            onHide={toggleBasketSidebar}
            show={basketSidebar}
            title="Basket"
          >
            <div className="h-[80vh] overflow-y-auto mt-4">
              {basket.map((product) => (
                <div
                  key={product.uniqueKey}
                  className="flex py-3 gap-x-2.5 border-b border-b-gray-100 dark:border-b-white/5"
                >
                  {/* PRODUCT-IMAGE */}
                  <div className="relative py-4">
                    <img
                      src={product.img}
                      className="w-[100px] h-auto -scale-x-100"
                      alt="cart-img"
                    />
                    <div
                      onClick={() => removeFromBasket(product.uniqueKey)}
                      className="absolute w-8 h-8 cursor-pointer grid-center -top-2 rounded-full bg-gray-100 dark:bg-black"
                    >
                      <span className="text-red-600 text-xl">
                        {icons.close}
                      </span>
                    </div>
                  </div>
                  {/* PRODUCT-CONTENT */}
                  <div className="flex flex-col gap-4">
                    {/* PRODUCT-NAME */}
                    <p className="text-zinc-700 dark:text-white text-xs sm:text-sm">
                      {product.name}
                    </p>

                    {/* PRODUCT-COLOR */}
                    <div className="flex-align-center text-zinc-500 dark:text-gray-300 text-xs gap-x-2">
                      <span>Size : {product.productSize}</span>
                      <div className="rounded-full bg-gray-200 w-px h-3"></div>
                      <div className="flex-align-center gap-x-2">
                        <div
                          style={{ backgroundColor: product.productColor }}
                          className="w-4 h-4 rounded-full shadow"
                        ></div>
                        <span className="color">{product.productColor}</span>
                      </div>
                    </div>

                    {/* PRODUCT-COUNT-PRICE */}
                    <div className="flex-align-center">
                      <span className="text-primary mr-3">
                        ${product.price * product.count}
                      </span>
                      <div className="flex-align-center rounded-lg border border-gray-100 dark:border-white/5 px-2 gap-x-5">
                        <span
                          onClick={() => addProduct(product)}
                          className="cursor-pointer text-green-500 text-[20px] select-none"
                        >
                          +
                        </span>
                        <span className="text-lg dark:text-white select-none">
                          {product.count}
                        </span>
                        <span
                          onClick={() => minesProduct(product)}
                          className="cursor-pointer text-red-600 text-[20px] select-none"
                        >
                          -
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute w-full left-0 bottom-3 px-4 flex-center-between">
              {/* BASKET-FOOTER-BUTTON */}
              <button className="w-32 py-3 bg-primary text-white text-sm rounded-lg hover:bg-emerald-600">
                See Shoing Cart
              </button>

              {/* BASKET-FOOTER-PRICE */}
              <div className="flex flex-col">
                <span className="text-sm capitalize text-zinc-500 dark:text-zinc-400">
                  amount payable
                </span>
                <span className="text-zinc-600 dark:text-zinc-300">
                  {calcAllPrice}$
                </span>
              </div>
            </div>
          </Sidebar>
          {/* menu sidebar */}
          <Sidebar onHide={toggleMenuSidebar} show={menuSidebar} title="Menu">
            <ul className="">
              {menuItems.map((item) => (
                <MenuItems type="mobile" hover={true} key={item.id} {...item} />
              ))}
            </ul>
          </Sidebar>
        </div>
      )}
    </header>
  );
};

export default Header;
