// react router dom
import { Link } from "react-router-dom";

const MenuItems = ({ icon, text, hover, type, enter, leave, to }) => {
  const isHover = hover
    ? "hover:text-emerald-500 dark:hover:text-emerald-400"
    : "";

  const p = type === "mobile" ? "py-4" : "py-2";

  return (
    <Link to={!!to.length && to}>
      <li
        onMouseEnter={enter ? (e) => enter(e.currentTarget) : null}
        onMouseLeave={leave ? (e) => leave(e.currentTarget) : null}
        className={`flex-align-center gap-x-3 text-zinc-700 dark:text-white ${p} ${isHover}`}
      >
        <span className="hidden xl:inline-block text-2xl">{icon}</span>
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default MenuItems;
