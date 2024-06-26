import db from "@/utils/db";
import Project from "./components/Project";

const Projects = () => {
  const projects = db.projects;
  return (
    <>
      <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-12 text-center">
            <p className="text-3xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6 uppercase">Some of my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-5">
            {projects.map((project) => (
              <Project key={project?.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
