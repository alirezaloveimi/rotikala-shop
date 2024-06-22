// all icons
import { icons } from "../data/Icons";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-gray-100 dark:border-white/5 bg-white dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between py-8">
          <button
            onClick={goToTop}
            type="button"
            className="flex-align-center rounded-lg text-sm p-2 text-zinc-700 dark:text-white border border-gray-300 dark:border-white/5"
          >
            Go To Top
            <span className="rotate-90 ml-2">{icons.arrowBack}</span>
          </button>
          <div className="flex flex-col items-center gap-3 text-sm pt-4 lg:flex-row lg:pt-0">
            <span className="text-zinc-500 dark:text-zinc-300 lg:border-r  lg:pr-3">
              021-11223344
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">
              We answer you 24 hours a day, 7 days a week
            </span>
          </div>
        </div>

        <div className="flex-align-center flex-col bg-main py-4 px-6 gap-6 rounded-2xl lg:flex-row lg:justify-between">
          <div className="order-3 flex-align-center gap-5 text-zinc-700 dark:text-white text-lg md:text-xl lg:order-1">
            <span className="cursor-pointer">{icons.instagram}</span>
            <span className="cursor-pointer">{icons.telegram}</span>
            <span className="cursor-pointer">{icons.youtube}</span>
          </div>

          <div className="w-full order-2 relative lg:w-[520px]">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full py-3 px-4 rounded-lg shadow bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 placeholder:text-sm placeholder:text-zinc-500 placeholder:dark:text-zinc-400"
            />
            <button
              type="button"
              className="absolute bg-primary text-sm py-2 px-4 right-2 rounded-lg text-white hover:bg-emerald-700 top-1/2 -translate-y-1/2"
            >
              Send
            </button>
          </div>

          <span className="order-1 text-sm text-zinc-500 dark:text-zinc-300 lg:order-3">
            Find out about the latest discounts
          </span>
        </div>

        <div className="flex-align-center justify-around py-8 lg:gap-0 lg:w-2/5 lg:justify-between">
          <div className="flex-align-center flex-col gap-3 lg:items-start">
            <h4 className="text-lg text-zinc-700 dark:text-white">Rotikala</h4>
            <ul className="flex-align-center flex-col gap-5 lg:items-start">
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Return terms
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Purchase guide
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Terms and Conditions
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Why Rotikala ?
              </li>
            </ul>
          </div>

          <div className="flex-align-center flex-col gap-3 lg:items-start">
            <h4 className="text-lg text-zinc-700 dark:text-white">
              Easy access
            </h4>
            <ul className="flex-align-center flex-col gap-5 lg:items-start">
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Track orders
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                contact us
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Frequently Asked
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                about us
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 text-center py-4 text-zinc-700 dark:text-white">
          Created With ❤ By Alireza Dl
        </div>
      </div>

      <div className="absolute left-1/2 -top-3 -translate-x-1/2">
        <span className="text-gray-500 dark:text-gray-100 text-2xl">
          {icons.global}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
