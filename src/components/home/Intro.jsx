import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto px-[5%] md:h-[85vh] sm:flex-row sm:space-x-[5vw] ">
      <p className="text-5xl font-bold my-10  md:text-[72px] sm:text-6xl sm:w-1/2">
        A full stack web developer from Canada
      </p>

      <div className="sm:w-1/2">
        <p className="text-customGray">
          I'm a highly motivated developer and mechanical engineer from Canada.
          I adore building accessible, responsive and performant code.
          Furthermore, I love science and technoloy. Learning something new
          every week. Currently focused on Frontend Web Development and a bit of
          Web Design.
        </p>
        <br />
        <p className="text-customGray">
          I have graduated from Canadore Collegeas a Mechanical Engineer and
          love programming as well.
        </p>
        <div className="flex my-6 space-x-4">
          <button className="border border-customGray rounded-xl bg-[#343233] text-white px-4 py-2 hover:bg-customOrange  hover:border-customOrange">
            About me
          </button>
          <button className="border border-customGray rounded-xl px-4 py-2 hover:border-customOrange">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
