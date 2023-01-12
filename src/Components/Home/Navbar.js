import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import b from "../../asset/icon-b.png";
import auth from "../../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <div className="drawer drawer-end fixed top-0">
        <input id="  my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar  bg-base-300 px-12">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl">
              <img
                style={{ width: "20px", color: "red" }}
                src={b}
                alt=""
                className="mr-4"
              />
              Best Tools co.
            </div>
            <div className="flex-none lg:hidden">
              <label for="  my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block  ">
              <ul className="menu  menu-horizontal gap-x-2  ">
                <li>
                  <NavLink className="rounded-lg  my-2 " to="/">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-lg  my-2" to="/blogs">
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg  my-2" to="/myportfolio">
                    Portfolio
                  </NavLink>
                </li>

                {user && (
                  <li>
                    <NavLink className="rounded-lg  my-2" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                )}
                {user ? (
                  <>
                    <li>
                      <button>{user?.displayName}</button>
                    </li>
                    <li>
                      <button
                        className="bg-primary rounded-lg  my-2"
                        onClick={logout}
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink className="rounded-lg  my-2" to="/login">
                      Log In
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {children}
        </div>
        <div className="drawer-side   ">
          <label for="  my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-2 overflow-y-auto w-80 bg-base-100">
            <li>
              <NavLink className="rounded-lg  my-2 " to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="rounded-lg  my-2" to="/blogs">
                Blogs
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink className="rounded-lg  my-2" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            )}

            {user ? (
              <li>
                <button
                  className="bg-primary rounded-lg  my-2"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <NavLink className="rounded-lg  my-2" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
