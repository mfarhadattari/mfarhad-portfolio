import backend from "../assets/services/backend.png";
import frontend from "../assets/services/frontend.png";
import responsive from "../assets/services/responsive.png";
import Service from "./components/Service";
const Services = () => {
  const services = [
    {
      id: 1,
      image: frontend,
      name: "Frontend Development",
      details:
        "Develop modern looking UI using HTML, CSS, JavaScript, React JS, Bootstrap & Tailwind CSS.",
    },
    {
      id: 2,
      image: backend,
      name: "Backend Development",
      details:
        "Backend REST API development using ExpressJS, MongoDB and Node JS.",
    },
    {
      id: 3,
      image: responsive,
      name: "Responsive Design",
      details:
        "Websites I make will look good in Mobile, Tablet and Desktop devices.",
    },
  ];

  return (
    <div
      name="services"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="my-10 text-center">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6 uppercase">The services I provide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
