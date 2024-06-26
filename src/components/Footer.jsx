"use client";

import db from "@/utils/db";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <div
        className={`bg-cover bg-[url('https://img.freepik.com/free-photo/businessmen-handshake_587448-5043.jpg?t=st=1696559988~exp=1696563588~hmac=108a768c6cdecbbb54e619c701a33a1113d9d15be31cca3aa45449058846b2da&w=826')] bg-center w-full h-96 relative opacity-90  z-0`}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <Fade bottom duration={4000}>
          <div className="absolute inset-0 my-32">
            <h2 className="text-white text-4xl font-semibold text-center">
              I know your mind wants to hire me 👀
            </h2>
            <p className="text-gray-200 text-center my-3">
              The button bellow will make it easy
            </p>
            <p className="text-center mt-4">
              <button className="bg-gradient-to-b from-cyan-500 to-blue-500 font-semibold text-white px-4 py-2 rounded-sm hover:scale-110 duration-300">
                <a href={db.links.linkedin}>Hire Me ❤️</a>
              </button>
            </p>
          </div>
        </Fade>
      </div>
      <div className="bg-gradient-to-b from-black to-gray-800">
        <div className="py-6 space-y-1 container mx-auto text-white px-20 flex flex-col md:flex-row md:justify-between text-center justify-center">
          <Fade left duration={4000}>
            <p className="text-3xl">
              <span className="font-extrabold">MOHAMMAD</span>
              <span className="text-cyan-300"> FARHAD</span>
            </p>
          </Fade>
          <Fade right duration={4000}>
            <p className="text-gray-400">Copyright © All Rights Reserved.</p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Footer;
