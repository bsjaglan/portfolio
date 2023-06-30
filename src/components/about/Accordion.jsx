import React, {useState} from "react";

const Accordion = ({job}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="flex flex-col"
      style={!isActive ? {marginBottom: "20px"} : {}}
    >
      <div
        className="flex justify-between rounded-lg bg-customGray p-5 text-white transition-colors ease-in-out hover:cursor-pointer hover:bg-customOrange"
        onClick={() => setIsActive(!isActive)}
        style={
          !isActive
            ? {}
            : {borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}
        }
      >
        <div className="flex flex-col md:flex-row md:gap-2">
          <span>{job.jobTitle}</span>
          <span>({job.company})</span>
        </div>
        <div>
          {`${job.startMonth} ${job.startYear} - ${
            job.currentlyWorking ? "Present" : job.endMonth + " " + job.endYear
          }`}
        </div>
      </div>
      {isActive && (
        <ul
          className="mb-5 flex flex-col gap-4 border border-customGray p-10"
          style={
            !isActive
              ? {}
              : {
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  borderTop: "none",
                }
          }
        >
          {job.duties.map((item) => (
            <li key={item.id} className="list-disc text-justify">
              {item.duty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
