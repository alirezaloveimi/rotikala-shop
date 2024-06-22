import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Privet = ({ children }) => {
  const { pathname } = useLocation();
  const { isSignin } = useUser();

  if (pathname.includes("signin")) {
    return isSignin ? <Navigate to="/dashboard" /> : children;
  } else {
    return isSignin ? children : <Navigate to="/signin" />;
  }
};

export default Privet;
