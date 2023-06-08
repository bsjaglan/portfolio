import React from "react";

function Button({dark, children, ...restProps}) {
  return dark ? (
    <button
      {...restProps}
      className="border border-customGray rounded-xl bg-[#343233] text-white px-4 py-2 hover:bg-customOrange  hover:border-customOrange"
    >
      {children}
    </button>
  ) : (
    <button
      {...restProps}
      className="border border-customGray rounded-xl px-4 py-2 hover:border-customOrange"
    >
      {children}
    </button>
  );
}

export default Button;
