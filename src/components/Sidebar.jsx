// all icons
import { icons } from "../data/Icons";

const Sidebar = ({ title, children, show, onHide }) => {
  return (
    <div
      className={`fixed inset-0 transition z-50 ${
        show ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* sidebar overlay */}
      <div
        onClick={onHide}
        className="fixed inset-0 bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md -z-10"
      ></div>

      {/* sidebar box */}
      <div
        className={`relative w-80 h-full p-4 bg-white dark:bg-zinc-900 transition ${
          show ? `opacity-100 translate-x-0` : "opacity-0 -translate-x-full"
        }`}
      >
        {/* sidebar header */}
        <div className="flex-center-between pb-4 border-b border-b-gray-100 dark:border-b-white/5">
          <h4 className="text-xl text-zinc-700 dark:text-white">{title}</h4>
          <button
            onClick={onHide}
            type="button"
            className="grid-center text-xl text-zinc-700 dark:text-white"
          >
            {icons.close}
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Sidebar;
