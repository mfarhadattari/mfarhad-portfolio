"use client";

import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-12 text-center">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="py-6 uppercase">Brief about me</p>
        </div>
        <Fade duration={4000}>
          <p className="text-xl mt-3">
            Hello, My name is Mohammad Farhad. I am a Junior passionate web
            designer & developer with a specialization in front-end and back-end
            web development. I have expertise in React JS which allow me to
            develop interactive and dynamic web frontend. I am also computable
            with JavaScript, Express.js and MongoDB which allow me to develop
            API and backend system using node environment. I am always love to
            learn something new. I really love to code & my happiness is to
            solve these problems with joy, in modular and reusable way so the
            project always remains scalable and maintainable.
          </p>
        </Fade>
        <br />
        <Fade duration={4000}>
          <p className="text-xl mb-4">
            Motivated to learn, grow and excel in Industry.
          </p>
        </Fade>
        <Fade duration={4000}>
          <p className="text-xl">
            𝐇𝐨𝐰 𝐈 a𝐦 𝐡𝐞𝐥𝐩𝐢𝐧𝐠 𝐲𝐨𝐮:
            <br />
            * I can build websites with amazing UI/UX
            <br />
            * I will make your website dynamic
            <br />* I will analyze your requirements properly
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
