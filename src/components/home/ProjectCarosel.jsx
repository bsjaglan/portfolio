import React, {useState} from "react";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";
import Button from "../Button";

function ProjectCarosel() {
  const [curr, setCurr] = useState(0);

  const projects = [
    {
      id: 1,
      image: "images/projects/1-netflix-clone.png",
      discription:
        "Its a netflix clone made with React, styled-components, Firebase and TMDB API.",
    },
    {
      id: 2,
      image: "images/projects/2-amazon-clone.jpg",
      discription: "Amazon clone made with React, Firebase and Tailwind.",
    },
    {
      id: 3,
      image: "images/projects/3-instagram-clone.png",
      discription: "Instagram clone made with react-native and Firebase",
    },
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto p-[5%]" id="projects">
      <div className="flex justify-between items-center my-[5%]">
        <h1 className="text-5xl font-bold">Projects.</h1>
        <Button dark>Explore all</Button>
      </div>
      <div className="flex overflow-hidden transition-transform ease-out duration-500b items-center">
        {projects.map((project) => (
          <div
            className="flex flex-col md:flex-row min-w-full transition-transform ease-out duration-500"
            style={{gap: "20px", transform: `translateX(-${curr * 100}%)`}}
          >
            <img src={project.image} className="w-full md:w-1/2 rounded-xl" />
            <div className="flex flex-col justify-around">
              <p className="text-xl">{project.discription}</p>
              <div className="flex space-x-10 justify-center border-t border-customGray p-5 mt-5">
                <Button>View Project</Button>
                <GrLinkPrevious
                  onClick={prev}
                  size={40}
                  className="p-2 border border-black bg-cus rounded-full cursor-pointer hover:bg-customOrange"
                />
                <GrLinkNext
                  onClick={next}
                  size={40}
                  className="p-2 border border-black bg-cus rounded-full cursor-pointer hover:bg-customOrange"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarosel;
