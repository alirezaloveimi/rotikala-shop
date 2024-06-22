// react router dom
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  // current path variable
  let currentPath = "";

  // map throw the path name arrays
  const breadcrumbItems = paths.map((path, index) => {
    currentPath += `/${path}`;
    return (
      <Link key={path} to={currentPath}>
        <li className="text-primary flex-align-center gap-2 text-sm md:gap-3">
          <span className="capitalize">{path.replace(/-/g, " ")}</span>
          {index < paths.length - 1 && <span>&gt;</span>}
        </li>
      </Link>
    );
  });

  return (
    <ul className="flex flex-col md:inline-flex md:flex-row rounded-xl bg-white dark:bg-zinc-900 gap-3 px-4 py-5 mb-6 shadow-md">
      <Link to="/">
        <li className="text-primary flex-align-center gap-2 text-sm md:gap-3">
          <span className="capitalize">Home</span>
          <span>&gt;</span>
        </li>
      </Link>
      {breadcrumbItems}
    </ul>
  );
};

export default Breadcrumb;
