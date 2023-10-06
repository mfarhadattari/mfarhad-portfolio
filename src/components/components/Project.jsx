import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = ({ project }) => {
  const { src, title, live, code, details } = project;
  return (
    <div className="shadow-md shadow-gray-600 hover:shadow-lg hover:shadow-gray-600 rounded-lg h-full">
      <Image
        src={src}
        alt=""
        className="rounded-md duration-200 lg:h-[160px] hover:scale-105"
      />
      <h2 className="mt-2 px-2 text-2xl">{title}</h2>
      <p className="mt-2 px-2">{details}</p>
      <hr className="mt-5" />
      <div className="flex items-center justify-center">
        <button className="w-1/2 font-semibold px-3 py-2 m-4 duration-200 hover:scale-105">
          <a href={live} className="flex items-center gap-2" target="_blank">
            {" "}
            <FaLink /> Live
          </a>
        </button>
        <button className="w-1/2 font-semibold px-3 py-2 m-4 duration-200 hover:scale-105">
          <a href={code} className="flex items-center gap-2" target="_blank">
            {" "}
            <FaGithub /> Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
