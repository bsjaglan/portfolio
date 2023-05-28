import React, {useState} from "react";
import {CiMenuFries} from "react-icons/ci";
import Sidebar from "./Sidebar";

function Navbar() {
  const [clicked, setClicked] = useState(1);
  const [sidebar, setSidebar] = useState(false);

  const navItems = [
    {id: 4, text: "Projects", route: "#"},
    {id: 3, text: "Contact", route: "#"},
    {id: 2, text: "About", route: "#"},
    {id: 1, text: "Home", route: "#"},
  ];

  return (
    <div className="flex justify-between items-center py-4 px-[5%] max-w-[1200px] mx-auto">
      <p className="text-4xl font-extrabold">Portfolio.</p>
      <ul className="gap-4 hidden sm:flex">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => setClicked(item.id)}>
            <a
              className="group relative"
              href={item.route}
              style={clicked === item.id ? {fontWeight: "bold", color: 'black'} : {}}
            >
              {item.text}
              <span
                className="absolute block right-0 w-1/2 -bottom-2 h-[2px] opacity-0 bg-customGray rounded-2xl group-hover:opacity-100 group-hover:w-3/4 duration-500"
                style={clicked === item.id ? {opacity: "1", backgroundColor: 'black'} : {}}
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
  );
}

export default Navbar;
