// react router dom
import { useLocation } from "react-router-dom";

export const usePathName = () => {
  const pathNameArray = useLocation()
    .pathname.split("/")
    .filter((p) => p);

  return pathNameArray;
};
