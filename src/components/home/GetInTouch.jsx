import React from "react";

function GetInTouch() {
  return (
    <div className="bg-black" id="contact">
      <div className="flex flex-col max-w-[1200px] mx-auto p-[5%]">
        <h1 className="text-5xl font-bold text-white my-[5%]">Get in touch.</h1>
        
        <form className="flex flex-col w-full md:w-1/2">
          <label className="text-xl text-white mt-5">Name</label>
          <input className="rounded-md my-3 p-3 bg-customGray" />
          <label className="text-xl text-white mt-5">Email</label>
          <input className="rounded-md my-3 p-3 bg-customGray" />
          <label className="text-xl text-white mt-5">Message</label>
          <textarea className="rounded-md my-3 p-3 bg-customGray" />
          <button className="bg-customGray p-3 my-3 rounded-md text-white hover:bg-customOrange">
            Just send it!
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
