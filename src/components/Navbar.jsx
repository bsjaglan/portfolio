import React, {useState} from "react";
import {CiMenuFries} from "react-icons/ci";
import Sidebar from "./Sidebar";

function Navbar() {
  const [clicked, setClicked] = useState(1);
  const [sidebar, setSidebar] = useState(false);

  const navItems = [
    {id: 4, text: "Projects", route: "/#projects"},
    {id: 3, text: "Contact", route: "/#contact"},
    {id: 2, text: "About", route: "/about"},
    {id: 1, text: "Home", route: "#"},
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-10  bg-[#f5f0e8]">
      <div className="container flex items-center justify-between">
        <p className="text-4xl font-extrabold">Portfolio.</p>
        <ul className="hidden gap-4 sm:flex">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => setClicked(item.id)}>
              <a
                className="group relative"
                href={item.route}
                style={
                  clicked === item.id
                    ? {fontWeight: "bold", color: "black"}
                    : {}
                }
              >
                {item.text}
                <span
                  className="absolute -bottom-2 right-0 block h-[2px] w-1/2 rounded-2xl bg-customGray opacity-0 duration-500 group-hover:w-3/4 group-hover:opacity-100"
                  style={
                    clicked === item.id
                      ? {opacity: "1", backgroundColor: "black"}
                      : {}
                  }
                ></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="block sm:hidden sm:w-0">
          {!sidebar ? (
            <CiMenuFries
              size={35}
              onClick={() => setSidebar(true)}
              className="cursor-pointer"
            />
          ) : (
            <Sidebar handleClose={() => setSidebar(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
