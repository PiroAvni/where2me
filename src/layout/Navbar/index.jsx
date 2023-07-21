import { useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FriendsIcon, HomeIcon, MapIcon } from "../../components/Icons";
import { CustomLink } from "../../components";
import { Tooltip } from "react-tooltip";
import logoImage from "../../../public/images/Where2Me.png";
import "react-tooltip/dist/react-tooltip.css";

const LocationDisplay = () => {
  const location = useLocation();

  return <span>{location.pathname}</span>;
};

const NavBar = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "#B63E96",
  };

  return (
    <>
      {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1>Logo</h1>
        </div>
        <div className="justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex items-center justify-around flex-wrap gap-40">
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Dashboard"
            data-tooltip-place="bottom"
          >
            <CustomLink
              href="/"
              title={<HomeIcon />}
              className=""
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            />
          </a>
          <Tooltip id="my-tooltip" />
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Map"
            data-tooltip-place="bottom"
          >
            <CustomLink
              href="/map"
              title={<MapIcon />}
              className=""
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            />
          </a>
          <Tooltip id="my-tooltip" />

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Friends"
            data-tooltip-place="bottom"
          >
            <CustomLink
              href="/friend"
              title={<FriendsIcon />}
              className=""
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            />
          </a>
          <Tooltip id="my-tooltip" />
        </ul>
        </div>
      </nav> */}

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img className=" w-16 h-auto" src={logoImage} alt="Logo" height="10" /> 
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Profile
            </button>
            
          </div>
         
            <div className="justify-between hidden w-full md:flex md:w-auto md:order-1" >
        <ul className="flex items-center justify-around flex-wrap gap-40">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Dashboard"
                data-tooltip-place="top"
              >
                <CustomLink
                  href="/"
                  title={<HomeIcon />}
                  className=""
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                />
              </a>
              <Tooltip id="my-tooltip" />
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Map"
                data-tooltip-place="bottom"
              >
                <CustomLink
                  href="/map"
                  title={<MapIcon />}
                  className=""
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                />
              </a>
              <Tooltip id="my-tooltip" />

              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Friends"
                data-tooltip-place="bottom"
              >
                <CustomLink
                  href="/friends"
                  title={<FriendsIcon />}
                  className=""
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                />
              </a>
              <Tooltip id="my-tooltip" />
            </ul>
          </div>
        </div>
      </nav>
      <span className="flex justify-start ml-3">
        <LocationDisplay />
      </span>
      <Outlet />
    </>
  );
};

export default NavBar;
