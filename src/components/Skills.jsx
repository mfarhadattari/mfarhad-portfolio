import bootstrap from "../assets/skills/bootstrap.jpg";
import css from "../assets/skills/css.png";
import expressjs from "../assets/skills/expressjs.png";
import firebase from "../assets/skills/firebase.png";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import jwt from "../assets/skills/jwt.jpg";
import mongo from "../assets/skills/mongo.png";
import nextjs from "../assets/skills/nextjs.png";
import node from "../assets/skills/node.png";
import reactImage from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import tailwind from "../assets/skills/tailwind.png";

import Skill from "./components/Skill";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-orange-500 shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 hover:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 hover:shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600 hover:shadow-blue-600",
    },
    {
      id: 14,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600 hover:shadow-purple-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 hover:shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-400 hover:shadow-blue-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white hover:shadow-white",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-400 hover:shadow-green-400",
    },
    {
      id: 9,
      src: expressjs,
      title: "Express JS",
      style: "shadow-orange-400 hover:shadow-orange-400",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400 hover:shadow-green-400",
    },
    {
      id: 11,
      src: jwt,
      title: "JWT Token",
      style: "shadow-pink-400 hover:shadow-pink-400 ",
    },
    {
      id: 12,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-800 hover:shadow-yellow-800",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 hover:shadow-gray-400",
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
            <Skill key={skill.id} i={i} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
