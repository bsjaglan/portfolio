import React from "react";

function Skillset() {
  const skillset = [
    {
      id: 1,
      category: "Frontend",
      skills: [
        {id: 1, skill: "React & Next.js"},
        {id: 2, skill: "styled-components"},
        {id: 3, skill: "State Management"},
        {id: 4, skill: "Tailwind CSS"},
        {id: 5, skill: "HTML, CSS & SCSS"},
      ],
    },
    {
      id: 2,
      category: "Backend",
      skills: [
        {id: 1, skill: "Node.js"},
        {id: 2, skill: "REST APIs"},
        {id: 3, skill: "State Management"},
        {id: 4, skill: "MongoDB"},
        {id: 5, skill: "MySQL"},
        {id: 6, skill: "Python & Django"},
      ],
    },
    {
      id: 3,
      category: "Other",
      skills: [
        {id: 1, skill: "Git & GitHub"},
        {id: 2, skill: "Adobe Tools"},
        {id: 3, skill: "Firebase"},
      ],
    },
  ];

  return (
    <div className="bg-black">
      <div className=" p-[5%] max-w-[1200px] mx-auto">
        <p className="text-white text-4xl mb-[5%]">My evolving skillset</p>
        <div className="flex flex-col space-y-10 ">
          {skillset.map((item) => (
            <section
              key={item.id}
              className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0"
            >
              <h2 className="text-white text-5xl font-bold w-full md:w-[40%]">
                {"#" + item.id + " " + item.category}
              </h2>
              <ul className="flex flex-wrap w-[60%]">
                {item.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="text-white text-2xl w-full min-w-[250px] py-2 md:w-1/2 flex-grow "
                  >
                    {skill.skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skillset;
