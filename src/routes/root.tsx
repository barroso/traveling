import { Outlet, Link } from "react-router-dom";
import MenuItem from "../components/Menu/MenuItem";

function Root() {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                  <Link
                    to={"/"}
                    className="font-semibold text-gray-500 text-2xl"
                  >
                    Traveling
                  </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <MenuItem title="Your Dream" to="/"/>
                <MenuItem title="Services" to="about"/>
                <MenuItem title="About" to="about"/>
                <MenuItem title="Contact Us" to="contact"/>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 ">
              <a
                href=""
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Log In
              </a>
              <a
                href=""
                className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
              >
                Sign Up
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                  x-show="!showMenu"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden mobile-menu">
          {/* add mobile menu*/}
        </div>
      </nav>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
