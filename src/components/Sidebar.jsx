import React, {useRef, useEffect} from "react";
import {
  AiOutlineClose as CloseIcon,
  AiOutlineHome as HomeIcon,
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineFundProjectionScreen as ProjectIcon,
  AiOutlineMail as ContactIcon,
  AiFillGithub as GithubIcon,
  AiFillInstagram as InstagramIcon,
  AiFillLinkedin as LinkedInIcon,
  AiFillHeart,
} from "react-icons/ai";

function Sidebar({handleClose}) {
  // sidebar links with icons and routes
  const sidebarItems = [
    {id: 1, text: "Home", icon: HomeIcon, route: "#"},
    {id: 2, text: "About", icon: InfoIcon, route: "#"},
    {id: 3, text: "Contact", icon: ContactIcon, route: "#"},
    {id: 4, text: "Projects", icon: ProjectIcon, route: "#"},
  ];

  const socialLinks = [
    {id: 1, text: "Github", icon: GithubIcon, route: "#"},
    {id: 2, text: "Instagram", icon: InstagramIcon, route: "#"},
    {id: 3, text: "LinkedIn", icon: LinkedInIcon, route: "#"},
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
      className="absolute flex-col right-0 top-0 bottom-0 h-screen bg-black w-[60vw] px-[5vw] py-4 space-y-[5vw]"
    >
      {/*1 - close button with hover orange icon */}
      <div className="group relative flex justify-end">
        <CloseIcon size={40} color="#FF7B00" />
        <CloseIcon
          onClick={handleClose}
          size={40}
          color="white"
          className="absolute top-0 group-hover:opacity-0 hover:cursor-pointer "
        />
      </div>

      {/* 2 - each item of sidebar with hoverable icons */}
      <ul className="space-y-6">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className="group flex items-center gap-6 justify-end cursor-pointer"
          >
            <p className="text-white text-center text-2xl group-hover:text-customOrange">
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
          </li>
        ))}
      </ul>

      {/* 3 - social links with hover effect */}
      <div className="flex justify-end gap-6 h-[40vh] items-end">
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
      <div className="flex text-sm text-white justify-end">
        Made with <AiFillHeart size={20} color="red" className="mx-2" /> by
        Balvinder Singh
      </div>
    </div>
  );
}

export default Sidebar;
