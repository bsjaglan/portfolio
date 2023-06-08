import React from "react";
import Button from "../Button";

function Intro() {
  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto px-[5%] md:h-[85vh] md:flex-row md:space-x-[5vw] ">
      <p className="text-5xl font-bold my-10  md:text-[72px] sm:text-6xl md:w-1/2">
        A full stack web developer from Canada
      </p>

      <div className="md:w-1/2">
        <p className="text-customGray text-xl">
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
          <Button dark>About me</Button>
          <Button>Resume</Button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
