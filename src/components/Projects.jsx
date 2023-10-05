import dmfClub from "../assets/projects/dmf-club.png";
import planPerfect from "../assets/projects/plan-perfect.png";
import programmerFashion from "../assets/projects/programmer-fashion.png";
import programmerRecife from "../assets/projects/programmer-recife.png";
import repliqCommerce from "../assets/projects/repliq-commerce.png";
import toyMaster from "../assets/projects/toy-master.png";
import Project from "./components/Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: programmerFashion,
      title: "Programmer Fashion",
      details: "E-commerce website with user and admin dashboard.",
      live: "https://programmer-fashion.netlify.app",
      code: "https://github.com/mfarhadattari/programmer-fashion-client",
    },
    {
      id: 2,
      src: planPerfect,
      title: "Plan Perfect",
      details: "Responsive and user-friendly task management website.",
      live: "https://plan-perfect.vercel.app",
      code: "https://github.com/mfarhadattari/plan-perfect",
    },
    {
      id: 3,
      src: dmfClub,
      title: "DMF Language Club",
      details:
        "An Educational application with admin, instructor and student role.",
      live: "https://dmf-language-club.web.app",
      code: "https://github.com/mfarhadattari/dmf-language-club-client",
    },
    {
      id: 4,
      src: repliqCommerce,
      title: "Repliq Commerce",
      details: "E-commerce admin dashboard system.",
      live: "https://repliq-commerce.vercel.app",
      code: "https://github.com/mfarhadattari/repliq-commerce",
    },
    {
      id: 5,
      src: toyMaster,
      title: "Toy Mater",
      details:
        "A Toys Market application with user login and registration system and add toys functionality",
      live: "https://mfarhad-toy-master.web.app",
      code: "https://github.com/mfarhadattari/toy-master-client",
    },
    {
      id: 6,
      src: programmerRecife,
      title: "Programmer Recife",
      details:
        "A Recife website with user login and registration and private routing system.",
      live: "https://mfarhad-programmar-recipe-bd.web.app",
      code: "https://github.com/mfarhadattari/programmer-recipe-bd-client",
    },
  ];
  return (
    <>
      <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-12 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
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
