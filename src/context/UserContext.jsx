import { useState, useContext, createContext } from "react";

const UserContext = createContext();

// user hook
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const isSignin = Object.keys(userInfo).length > 0;

  //   sign in
  const signin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserInfo(user);
  };

  //   sign out
  const signout = () => {
    localStorage.removeItem("user");
    setUserInfo({});
  };

  return (
    <UserContext.Provider value={{ userInfo, signin, signout, isSignin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
