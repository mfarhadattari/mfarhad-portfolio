"use client";

import Image from "next/image";
import Fade from "react-reveal/Fade";

const Service = ({ service }) => {
  return (
    <Fade key={service.id} top duration={4000}>
      <div className="shadow-md shadow-gray-600 hover:shadow-lg hover:shadow-gray-600  rounded-lg p-5 space-y-4 my-2">
        <Image className="w-[60px]" src={service?.image} alt="" />
        <h1 className="text-2xl font-semibold">{service?.name}</h1>
        <p>{service?.details}</p>
      </div>
    </Fade>
  );
};

export default Service;
