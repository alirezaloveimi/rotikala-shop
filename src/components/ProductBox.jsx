// components
import Ring from "./Ring";

// react router dom
import { Link } from "react-router-dom";

const ProductBox = (props) => {
  return (
    <Ring borderRadius="12px">
      <Link to={`/products/${props.name.replace(/\s+/g, "-")}`}>
        <div className="relative flex flex-col p-[15px] gap-2 rounded-xl shadow bg-white dark:bg-zinc-900">
          <div className="grid-center">
            <img
              src={props.img}
              className="w-32 mx-auto h-auto sm:w-48 md:w-auto md:mx-0"
              alt="product-img"
            />
          </div>
          <p className="cursor-pointer text-wrap text-zinc-700 dark:text-white text-xs sm::text-sm md:text-base">
            {props.name}
          </p>
          <span className="text-primary text-sm">${props.price}</span>

          {/* colors */}
          <div className="flex-align-center space-x-1">
            {props.colors.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="inline-block w-5 h-5 shadow-md rounded-full"
              ></span>
            ))}
          </div>

          {/* side */}
          <div className="flex-align-center space-x-0.5 my-1">
            {props.sizes.map((size) => (
              <span
                key={size}
                className="grid-center p-2 uppercase shadow-md text-xs sm:text-sm rounded-full bg-main dark:text-white"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Ring>
  );
};

export default ProductBox;
