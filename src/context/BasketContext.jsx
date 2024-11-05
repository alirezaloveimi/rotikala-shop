// react
import { createContext, useContext, useMemo, useState } from "react";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTheme } from "./ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

// create new context
const BasketContext = createContext();

// use basket custom hook
export const useBasketContext = () => useContext(BasketContext);

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("user-basket", []);

  // theme
  const { theme } = useTheme();

  // basket length
  const basketLength = basket.length;

  //   generate product key
  const generateCartKey = (product) => {
    return `${product.name}-${product.productColor}-${product.productSize}`;
  };

  //   remove product form basket
  const removeFromBasket = (uniqueKey) => {
    const updatedBasket = basket.filter((item) => item.uniqueKey !== uniqueKey);

    setBasket(updatedBasket);
    toast.error("You Remove Product From Basket");
  };

  //   add to basket or plus one to product count
  const addProduct = (product) => {
    // generate unique key for product
    const selectedUniqueKey = generateCartKey(product);

    // see if product is in basket or not
    const productInBasketIndex = basket.findIndex(
      (item) => item.uniqueKey === selectedUniqueKey
    );

    if (productInBasketIndex === -1) {
      const newProduct = {
        ...product,
        uniqueKey: selectedUniqueKey,
        count: 1,
      };

      setBasket((b) => [...b, newProduct]);

      toast.success("You Added New Product To Basket");
    } else {
      const updatedBasket = basket.map((item, index) =>
        index === productInBasketIndex
          ? { ...item, count: item.count + 1 }
          : item
      );

      setBasket(updatedBasket);
    }
  };

  //   mines product count or remove from basket
  const minesProduct = (product) => {
    // generate unique key for product
    const selectedUniqueKey = generateCartKey(product);

    // see if product is in basket or not
    const selectedProduct = basket.find(
      (item) => item.uniqueKey === selectedUniqueKey
    );

    if (selectedProduct.count > 1) {
      const updatedBasket = basket.map((item) =>
        item.uniqueKey === selectedProduct.uniqueKey
          ? { ...item, count: item.count - 1 }
          : item
      );

      setBasket(updatedBasket);
    } else {
      removeFromBasket(selectedUniqueKey);
    }
  };

  const calcAllPricefunc = () => {
    const sum = basket.reduce((prev, cur) => prev + cur.count * cur.price, 0);

    return sum;
  };

  const calcAllPrice = useMemo(() => calcAllPricefunc(), [basket]);

  return (
    <BasketContext.Provider
      value={{
        removeFromBasket,
        addProduct,
        basketLength,
        minesProduct,
        basket,
        calcAllPrice,
      }}
    >
      {children}

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnHover
        toastClassName="text-sm"
        theme={theme}
      />
    </BasketContext.Provider>
  );
};

export default BasketProvider;
