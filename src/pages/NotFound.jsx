// react router dom
import { useNavigate } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/");
  };

  return (
    <>
      <Header />

      <div className="grid-center min-h-[70vh] text-center">
        <img src="/images/notfound.svg" alt="not-found" className="w-64" />
        <h1 className="text-black dark:text-white my-6">Page Not Found</h1>
        <button
          onClick={navigateUser}
          className="p-3 w-fit mx-auto bg-primary text-white text-sm rounded-lg hover:bg-emerald-600"
        >
          Go To Home Page
        </button>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
