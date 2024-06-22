// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Panel from "./pages/Panel";
import Privet from "./pages/Privet";

// react router dom
import { Routes, Route } from "react-router-dom";

// context provider
import BasketProvider from "./context/BasketContext";
import ThemeProvider from "./context/ThemeContext";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route
              path="/signin"
              element={
                <Privet>
                  <Signin />
                </Privet>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productName" element={<Product />} />
            <Route
              path="/dashboard"
              element={
                <Privet>
                  <Dashboard />
                </Privet>
              }
            >
              <Route path="profile" element={<Profile />} />
              <Route path="panel" element={<Panel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BasketProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
