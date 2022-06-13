import React from "react";
import {
  MenuAlt1Icon,
  ArrowSmRightIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import useDarkmode from "../hooks/useDarkMode";

const Navbar = () => {
  const [colourTheme, setTheme] = useDarkmode();

  return (
    <div className="fixed w-full z-50">
      <nav className="text-center bg-white transition-all dark:bg-dark-teal">
        <div className="grid grid-cols-3 text-left">
          {/* Navbar Icons */}
          <div className="my-auto ml-5 lg:ml-24">
            {/* Menu Icon */}
            <MenuAlt1Icon className="h-8 w-8 text-dark-teal my-auto mr-5  cursor-pointer inline-block dark:text-white" />
            {/* Theme Button */}
            <span onClick={() => setTheme(colourTheme)}>
              {colourTheme === "light" ? (
                <MoonIcon className="h-8 w-8 text-dark-teal my-auto cursor-pointer inline-block dark:text-white" />
              ) : (
                <SunIcon className="h-8 w-8 text-dark-teal my-auto cursor-pointer inline-block dark:text-white" />
              )}
            </span>
          </div>
          {/* Navbar title */}
          <h3 className="inline-block font-GildaDisplay text-2xl text-dark-teal pt-9 mb-7 cursor-pointer text-center lg:text-4xl dark:text-white">
            MERCHANT
          </h3>
          {/* Book Now Button */}
          <div className="my-auto mr-5 lg:mr-24">
            <button className="font-Poppins font-bold text-dark-teal text-xs w-28 h-8 border border-solid border-2 border-dark-teal  my-auto float-right transition-all hover:bg-dark-teal hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-dark-teal lg:text-base lg:w-56 lg:h-14">
              BOOK NOW
              <span>
                <ArrowSmRightIcon className="h-5 w-5 inline-block ml-2 mb-0.5" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
