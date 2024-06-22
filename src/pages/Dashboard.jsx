import { useState } from "react";

// components
import Header from "../components/Header";
import Modal from "../components/Modal";
import DropUp from "../components/DropUp";

// react router dom
import { NavLink, useNavigate, useOutlet } from "react-router-dom";

// hook
import { useUser } from "../context/UserContext";

// datas
import { dashboardSidebarItems } from "../data/data";
import { icons } from "../data/Icons";

const Dashboard = () => {
  // state for modal
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const [showDropUp, setShowDropUp] = useState(false);

  // get user info
  const { userInfo, signout } = useUser();

  // subroute content
  const outlet = useOutlet();
  // navigate user to another pahe
  const navigate = useNavigate();

  // map thorw the sidebar links
  const sidebarLinks = dashboardSidebarItems.map((item) =>
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

  // close sign out modal
  const closeSignOutHandler = () => setShowSignOutModal(false);

  const signOutHandler = () => {
    signout();
    navigate("/");
  };

  return (
    <>
      <Header />

      <main className="py-6">
        <div className="container">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* sidebar info */}
            <div className="p-5 shadow bg-white dark:bg-zinc-900 rounded-xl lg:flex-1">
              <div className="grid-center text-center gap-y-1.5 lg:hidden">
                <div className="w-20 mx-auto">
                  <img
                    src="/images/user.png"
                    className="w-full object-cover"
                    alt="user"
                  />
                </div>
                <h4 className="text-lg text-zinc-700 dark:text-white">
                  Alireza Delf loveimi
                </h4>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                  Alireza@gmail.com
                </p>
                <button
                  onClick={() => setShowDropUp(true)}
                  type="button"
                  className="bg-primary text-white py-3 text-sm rounded-lg hover:opacity-90 active:scale-95"
                >
                  Show Panel
                </button>
              </div>

              <div className="hidden lg:block">
                <div className="flex-align-center gap-x-3 pb-3 border-b">
                  <img src="/images/user.png" alt="user" className="w-12" />
                  <div>
                    <h4 className="text-zinc-700 dark:text-white">
                      {userInfo.fullName}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                      {userInfo.email}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {sidebarLinks}

                  <li
                    onClick={() => setShowSignOutModal(true)}
                    className="cursor-pointer rounded-xl overflow-hidden flex-align-center gap-x-3 p-3 text-red-600 transition hover:bg-red-400/10"
                  >
                    <span className="">{icons.close}</span>
                    <span>Exit</span>
                  </li>
                </ul>
              </div>
            </div>

            {outlet ? (
              <div className="p-5 shadow bg-white dark:bg-zinc-900 rounded-xl lg:flex-[4]">
                {outlet}
              </div>
            ) : (
              <h2 className="text-zinc-700 dark:text-white text-2xl lg:flex-[4]">
                Hello {userInfo.fullName} Wellcome to Your Dashboard
              </h2>
            )}
          </div>
        </div>
      </main>

      {/* sign out modal */}
      <Modal
        show={showSignOutModal}
        onClose={closeSignOutHandler}
        title={"Sign Out User"}
      >
        <div className="grid-center">
          <span className="p-3 rounded-full border-2 border-red-700 text-3xl text-red-700">
            {icons.close}
          </span>
        </div>
        <h5 className="text-center my-5">Are You Sure About Your Sign Out</h5>

        <div className="flex-align-center [&>button]:flex-1 gap-x-3">
          <button
            onClick={signOutHandler}
            type="button"
            className="bg-primary py-3 rounded-xl text-white text-sm"
          >
            Yes
          </button>
          <button
            onClick={closeSignOutHandler}
            type="button"
            className="bg-red-700 py-3 rounded-xl text-white text-sm"
          >
            No
          </button>
        </div>
      </Modal>

      <DropUp
        show={showDropUp}
        onOpenModal={() => setShowSignOutModal(true)}
        onClose={() => setShowDropUp(false)}
      />
    </>
  );
};

export default Dashboard;
