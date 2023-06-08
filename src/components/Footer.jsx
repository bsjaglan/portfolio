import React from "react";
import {BsArrowUpRight} from "react-icons/bs";
import {socialLinks} from "../data/social-links";

function Footer() {
  return (
    <div className="flex max-w-[1200px] px-[5%] py-3 mx-auto justify-between">
      <div className="flex gap-5">
        {socialLinks.map((item) => (
          <a key={item.id} className="flex items-center gap-1 cursor-pointer hover:scale-[1.1]">
            {item.text}
            <BsArrowUpRight size={13} />
          </a>
        ))}
      </div>
      <p className="cursor-pointer hover:scale-[1.1]">© 2023</p>
    </div>
  );
}

export default Footer;
