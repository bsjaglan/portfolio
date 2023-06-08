import React, {useRef, useEffect} from "react";
import {
  AiOutlineClose as CloseIcon,
  AiOutlineHome as HomeIcon,
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineFundProjectionScreen as ProjectIcon,
  AiOutlineMail as ContactIcon,
  AiFillHeart,
} from "react-icons/ai";
import {socialLinks} from "../data/social-links";

function Sidebar({handleClose}) {
  // sidebar links with icons and routes
  const sidebarItems = [
    {id: 1, text: "Home", icon: HomeIcon, route: "#"},
    {id: 2, text: "About", icon: InfoIcon, route: "#"},
    {id: 3, text: "Contact", icon: ContactIcon, route: "#contact"},
    {id: 4, text: "Projects", icon: ProjectIcon, route: "#projects"},
  ];

  // handle click outside and close the the sidebar

  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      handleClose(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      ref={myRef}
      className="fixed bottom-0 right-0 top-0 z-20 h-screen w-[80vw] flex-col space-y-[5vw] bg-black px-[5vw] py-4"
    >
      {/*1 - close button with hover orange icon */}
      <div className="group relative flex justify-end">
        <CloseIcon size={40} color="#FF7B00" />
        <CloseIcon
          onClick={handleClose}
          size={40}
          color="white"
          className="absolute top-0 hover:cursor-pointer group-hover:opacity-0 "
        />
      </div>

      {/* 2 - each item of sidebar with hoverable icons */}
      <ul className="space-y-6">
        {sidebarItems.map((item) => (
          <a
            key={item.id}
            className="group flex cursor-pointer items-center justify-end gap-6"
            href={item.route}
            onClick={handleClose}
          >
            <p className="text-center text-2xl text-white group-hover:text-customOrange">
              {item.text}
            </p>
            <div className="relative">
              <item.icon size={40} color="#FF7B00" />
              <item.icon
                size={40}
                color="white"
                className="absolute top-0 group-hover:opacity-0 "
              />
            </div>
          </a>
        ))}
      </ul>

      {/* 3 - social links with hover effect */}
      <div className="flex h-[40vh] items-end justify-end gap-6">
        {socialLinks.map((item) => (
          <div className="group relative">
            <item.icon size={40} color="#FF7B00" />
            <item.icon
              size={40}
              color="white"
              className="absolute top-0 group-hover:opacity-0 "
            />
          </div>
        ))}
      </div>

      {/* 4 - footer section */}
      <div className="flex justify-end text-sm text-white">
        Made with <AiFillHeart size={20} color="red" className="mx-2" /> by
        Balvinder Singh
      </div>
    </div>
  );
}

export default Sidebar;
