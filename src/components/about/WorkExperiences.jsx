import React from "react";
import {workExperiences} from "../../data/workExperiences";
import Accordion from "./Accordion";

function WorkExperiences() {
  return (
    <div className="mx-auto max-w-[1200px] p-[5%]">
      <h1 className="mb-[5%] text-5xl font-bold">Work Experience.</h1>
      {/* Accordion */}
      {workExperiences.map((job) => (
        <Accordion job={job} />
      ))}
    </div>
  );
}

export default WorkExperiences;
