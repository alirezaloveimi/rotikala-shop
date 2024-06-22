// react
import { useEffect } from "react";

// react router dom
import { NavLink, useLocation } from "react-router-dom";

// datas
import { icons } from "../data/Icons";
import { dashboardSidebarItems } from "../data/data";

const DropUp = ({ onClose, show, onOpenModal }) => {
  const { pathname } = useLocation();

  const adminPanelMenu = dashboardSidebarItems.map((item) =>
    item.to ? (
      <li
        key={item.id}
        className="[&>a]:flex-align-center [&>a]:p-3 rounded-xl overflow-hidden"
      >
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-500/5 text-primary"
              : "hover:bg-primary transition text-zinc-700 dark:text-white hover:text-white"
          }
        >
          <span className="mr-3 text-xl">{item.icon}</span>
          <span>{item.text}</span>
        </NavLink>
      </li>
    ) : (
      <li
        key={item.id}
        className="cursor-pointer rounded-xl overflow-hidden flex-align-center gap-x-3 p-3 text-zinc-700 dark:text-white transition hover:bg-primary hover:text-white"
      >
        <span className="text-xl">{item.icon}</span>
        <span className="">{item.text}</span>
      </li>
    )
  );

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 transition z-50 flex items-end ${
        show ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md -z-10"
      ></div>

      <div
        className={`w-full rounded-t-xl p-4 bg-white dark:bg-zinc-900 transition text text-zinc-700 dark:text-white ${
          show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="py-3 flex-center-between">
          <h4 className="text-xl text-zinc-700 dark:text-white">
            Admin Panel Menu
          </h4>
          <button
            onClick={onClose}
            type="button"
            className="grid-center text-xl text-zinc-700 dark:text-white"
          >
            {icons.close}
          </button>
        </div>

        <ul className="space-y-4">
          {adminPanelMenu}

          <li
            onClick={onOpenModal}
            className="cursor-pointer rounded-xl overflow-hidden flex-align-center gap-x-3 p-3 text-red-600 transition hover:bg-red-400/10"
          >
            <span className="">{icons.close}</span>
            <span>Exit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropUp;
