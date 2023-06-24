import React from "react";

function Intro() {
  return (
    <div className="mx-auto flex max-w-[850px] flex-col items-center gap-10 p-[5%] md:flex-row">
      <img
        src="images/profile/profile.jpg"
        className="h-[200px] w-[200px] rounded-full md:rounded md:w-[250px] md:h-[250px]"
      />
      <div className="space-y-5">
        <p className="whitespace-pre-wrap text-justify md:text-md">
          Hey there! I am motivated web developer and I also experience in
          different domains. I am mechanical engineering gradute from Canadore
          College. I have 3 work experience in machine operation in food
          manufacturing companies and 2 years of experience in office
          adminstration. 
        </p>
        <p className="whitespace-pre-wrap text-justify md:text-md">
          In my free time, I watch youtube videos about some science topics,
          engineering videos and tech experiments. Vsauce and Vertasium are my
          favourite channels.
        </p>
      </div>
    </div>
  );
}

export default Intro;
