import { useContext } from "react";
import FirebaseContext from "../context/firbase";
import { Link } from "react-router-dom";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div
              class="flex-shrink-0 flex items-center"
              aria-label="Instify Logo"
            >
              <Link to={ROUTES.DASHBOARD}>
                <img
                  className=" lg:block h-10 w-auto"
                  src="/images/logo.png"
                  alt="Instify Logo"
                />
              </Link>
            </div>
          </div>
          {/* Right Side  */}
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user ? (
              <>
                <button
                  type="button"
                  title="Sign Out"
                  className="text-white"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={'/profile/${user.displayName}'}>
                    <img className="rounded-full h-8 w-8 flex"
                      src={`/images/avatars/${user.displayName}.jpg`}
                    alt={`${user.displayName} profile`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button type="button" className="bg-indigo-500 rounded font-bold text-white w-20 h-8">Log In</button>
                </Link>

                <Link to={ROUTES.REGISTER}>
                  <button type="button"  className="bg-yellow-400 rounded font-bold ml-4 w-20 h-8">Register</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
