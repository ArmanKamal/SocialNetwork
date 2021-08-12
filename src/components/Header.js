import React, { useContext } from "react";
import FirebaseContext from "../context/firbase";
import { Link } from "react-router-dom";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className="dark:bg-gray-800 bg-blue-200 mb-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className="flex-shrink-0 flex items-center"
              aria-label="Instify Logo"
            >
              <Link to={ROUTES.DASHBOARD}>
                <img
                  className=" lg:block h-10 w-auto"
                  src="/images/logo.png"
                  alt="Instify Logo"
                />
              </Link>

              <span
                onClick={() => setTheme(colorTheme)}
                className="w-10 h-10 ml-4 bg-indigo-500 block rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
              >
                {colorTheme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
          {/* Right Side  */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user ? (
              <React.Fragment>
                <button
                  type="button"
                  title="Sign Out"
                  className="text-black-300 dark:text-white"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer ml-2">
                  <Link to={"/profile/${user.displayName}"}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile`}
                    />
                  </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-indigo-500 rounded font-bold text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>

                <Link to={ROUTES.REGISTER}>
                  <button
                    type="button"
                    className="bg-yellow-400 rounded font-bold ml-4 w-20 h-8"
                  >
                    Register
                  </button>
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
