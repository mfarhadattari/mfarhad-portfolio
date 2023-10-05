"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cq5plb9",
        "template_d4z5s9n",
        form.current,
        "Aaa1hdmEr1dKo_HNX"
      )
      .then(
        (result) => {
          toast("Message sent Succesfully !");
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <Fade top duration={4000}>
        <div className=" flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            />
          </form>
        </div>
      </Fade>
      <ToastContainer />
    </>
  );
};

export default Message;
