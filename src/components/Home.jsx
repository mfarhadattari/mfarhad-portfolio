"use client";

import db from "@/utils/db";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import { TypeAnimation } from "react-type-animation";

const info = db;

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800 pt-14 md:pt-40 pb-10"
    >
      <div className=" container mx-auto px-20  flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Fade left duration={2000}>
            <div className="flex flex-col justify-center h-full mt-14 lg:mt-6 w-full">
              <h1 className="text-4xl sm:text-3xl font-bold text-white">
                This is{" "}
                <span className="text-blue-300">{info.name.split(" ")[0]}</span>
                ,
              </h1>
              <h2 className="text-4xl sm:text-3xl font-bold text-white w-full">
                I am a
                <TypeAnimation
                  sequence={info.titleArray}
                  speed={50}
                  className="text-accent ml-4"
                  wrapper="span"
                  repeat={Infinity}
                />
              </h2>
              <p className="text-gray-400 py-4 max-w-md">{info.description}</p>
              <Tada duration={2000}>
                <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  <a
                    href={info.resume}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                  <span className="group-hover:rotate-90 duration-300">
                    <MdDownload size={20} className="ml-1" />
                  </span>
                </div>
              </Tada>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className="lg:ml-52 w-full ">
              <Image
                src="/assets/mfarhad.png"
                alt="me"
                width={0}
                height={0}
                sizes="100vw"
                style={{ borderRadius: "0 200px 200px 200px" }}
                className="w-[200px] mt-10 mb-6  mx-auto md:mx-0 lg:mx-0"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
