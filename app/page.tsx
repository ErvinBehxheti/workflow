"use server";

import Projects from "@/components/ProjectsView/Projects";

const page = () => {

  return (
    <div className="flex">
      <Projects />
    </div>
  );
};

export default page;
