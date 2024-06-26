import Skill from "./components/Skill";

const Skills = () => {
  const skills = [
    {
      src: "/assets/skills/html.png",
      title: "HTML",
      style: "hover:shadow-orange-500 shadow-orange-500",
    },
    {
      src: "/assets/skills/css.png",
      title: "CSS",
      style: "shadow-blue-500 hover:shadow-blue-500",
    },
    {
      src: "/assets/skills/scss.png",
      title: "SCSS",
      style: "shadow-pink-400 hover:shadow-pink-400",
    },
    {
      src: "/assets/skills/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400 hover:shadow-sky-400",
    },
    {
      src: "/assets/skills/bootstrap.png",
      title: "Bootstrap",
      style: "shadow-blue-700 hover:shadow-blue-700",
    },
    {
      src: "/assets/skills/react-bootstrap.png",
      title: "React Bootstrap",
      style: "shadow-sky-500 hover:shadow-sky-500",
    },
    {
      src: "/assets/skills/react.png",
      title: "React",
      style: "shadow-sky-800 hover:shadow-sky-800",
    },
    {
      src: "/assets/skills/redux.png",
      title: "Redux",
      style: "shadow-purple-600 hover:shadow-purple-600",
    },
    {
      src: "/assets/skills/nextjs.png",
      title: "Next JS",
      style: "shadow-white hover:shadow-white",
    },
    {
      src: "/assets/skills/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500 hover:shadow-yellow-500",
    },
    {
      src: "/assets/skills/typescript.png",
      title: "TypeScript",
      style: "shadow-white hover:shadow-white",
    },
    {
      src: "/assets/skills/node.png",
      title: "Node JS",
      style: "shadow-green-400 hover:shadow-green-400",
    },
    {
      src: "/assets/skills/expressjs.png",
      title: "Express JS",
      style: "shadow-orange-400 hover:shadow-orange-400",
    },
    {
      src: "/assets/skills/mongo.png",
      title: "MongoDB",
      style: "shadow-green-700 hover:shadow-green-700",
    },
    {
      src: "/assets/skills/postgresql.png",
      title: "PostgreSQL",
      style: "shadow-[#346692] hover:shadow-[#346692]",
    },
    {
      src: "/assets/skills/mongoose.png",
      title: "Mongoose",
      style: "shadow-[#870100] hover:shadow-[#870100]",
    },
    {
      src: "/assets/skills/prisma.png",
      title: "Prisma",
      style: "shadow-[#0A344A] hover:shadow-[#0A344A]",
    },
    {
      src: "/assets/skills/jwt.png",
      title: "JWT Token",
      style: "shadow-[#612075] hover:shadow-[#612075]",
    },
    {
      src: "/assets/skills/firebase.png",
      title: "Firebase",
      style: "shadow-yellow-800 hover:shadow-yellow-800",
    },
    {
      src: "/assets/skills/github.png",
      title: "GitHub",
      style: "shadow-gray-400 hover:shadow-gray-400",
    },
    {
      src: "/assets/skills/postman.png",
      title: "Postman",
      style: "shadow-[#FE6C35] hover:shadow-[#FE6C35]",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-12 text-center">
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 uppercase">The technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map((skill, i) => (
            <Skill key={i} i={i} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
