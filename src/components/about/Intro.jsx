import React from "react";

function Intro() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 p-[5%] md:flex-row">
      <img
        src="images/profile/profile.jpg"
        className="h-[189px] w-[180px] rounded-full md:rounded"
      />
      <div className="space-y-5">
        <p className="md:text-md whitespace-pre-wrap text-justify">
          Hey there! I am motivated web developer and I also have experience in
          different domains. I am mechanical engineering graduate from Canadore
          College. Further, I have 3 years work experience in machine operation
          in food manufacturing companies and 2 years of expertise in office
          adminstration. Also, my evolving skillset is very verstaile which
          enables me to work in different work environments.
        </p>
        <p className="md:text-md whitespace-pre-wrap text-justify">
          In my free time, I watch youtube videos about some science topics,
          engineering videos and tech experiments. Vsauce and Vertasium are my
          favourite channels. I am also a huge fan of movies, love masterpiece
          by Chirlopher Nolan, Stanly Kubrik, Quentin Tarantino and Martin
          Scorsese.
        </p>
      </div>
    </div>
  );
}

export default Intro;
