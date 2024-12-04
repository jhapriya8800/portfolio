import React, { useState } from "react";
import coding from "../../public/image/coding.jpg";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const [Show, setShow] = useState(false);
  const handleMenu = () => {
    setMenu(!Menu);
  };

  const NavItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "About",
    },
    {
      id: 3,
      item: "Portfolio",
    },
    {
      id: 4,
      item: "Experince",
    },
    {
      id: 5,
      item: "Contact Us",
    },
  ];
  return (
    <div>
      <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={coding} alt="coding" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Priy<span className="text-blue-500 text-2xl">a</span>
              <p className="text-sm">Front End Developer</p>
            </h1>
          </div>
          {/* DeskTop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {NavItem.map(({ id, item }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={handleMenu}>
              {Menu ? <IoMenuSharp /> : <RxCross2 />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {Menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {NavItem.map(({ id, item }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
