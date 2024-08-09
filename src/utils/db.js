const titleArray = [
  "MERN Stack Developer",
  2000,
  "Front-End Developer",
  2000,
  "Backend-End Developer",
  2000,
  "React Developer",
  2000,
];

const services = [
  {
    id: 1,
    image: "/assets/services/frontend.png",
    name: "Frontend Development",
    details:
      "Develop modern UI using HTML, CSS, JavaScript, TypeScript, React.JS, Next.JS, Bootstrap & TailwindCSS etc.",
  },
  {
    id: 2,
    image: "/assets/services/backend.png",
    name: "Backend Development",
    details:
      "Develop REST API using JavaScript, TypeScript, ExpressJS, MongoDB, Mongoose & NodeJS etc.",
  },
  {
    id: 3,
    image: "/assets/services/responsive.png",
    name: "Responsive Design",
    details:
      "Websites I make will look good in Mobile, Tablet and Desktop devices.",
  },
];

const projects = [
  {
    id: 1,
    image: "/assets/projects/programmer-fashion.png",
    title: "Programmer Fashion",
    details: "E-commerce website with user and admin dashboard.",
    live: "https://programmer-fashion.netlify.app",
    code: "https://github.com/mfarhadattari/programmer-fashion-client",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "MongoDB",
      "SSL commerce",
      "TailwindCSS & DaisyUI",
      "Firebase",
    ],
  },
  {
    id: 2,
    image: "/assets/projects/plan-perfect.png",
    title: "Plan Perfect",
    details: "Responsive and user-friendly task management website.",
    live: "https://plan-perfect.vercel.app",
    code: "https://github.com/mfarhadattari/plan-perfect",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Material-Tailwind",
      "Firebase",
    ],
  },
  {
    id: 3,
    image: "/assets/projects/dmf-club.png",
    title: "DMF Language Club",
    details:
      "An Educational application with admin, instructor and student role.",
    live: "https://dmf-language-club.web.app",
    code: "https://github.com/mfarhadattari/dmf-language-club-client",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "MongoDB",
      "Stripe",
      "TailwindCSS & DaisyUI",
      "Firebase",
    ],
  },
  {
    id: 4,
    image: "/assets/projects/repliq-commerce.png",
    title: "Repliq Commerce",
    details: "E-commerce admin dashboard system.",
    live: "https://repliq-commerce.vercel.app",
    code: "https://github.com/mfarhadattari/repliq-commerce",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "MongoDB",
      "Stripe",
      "TailwindCSS & DaisyUI",
      "React Query",
    ],
  },
  {
    id: 5,
    image: "/assets/projects/toy-master.png",
    title: "Toy Mater",
    details:
      "A Toys Market application with user login and registration system and add toys functionality",
    live: "https://mfarhad-toy-master.web.app",
    code: "https://github.com/mfarhadattari/toy-master-client",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "MongoDB",
      "Firebase",
      "TailwindCSS & DaisyUI",
      "HTML2PDF",
    ],
  },
  {
    id: 6,
    image: "/assets/projects/programmer-recife.png",
    title: "Programmer Recife",
    details:
      "A Recife website with user login and registration and private routing system.",
    live: "https://mfarhad-programmar-recipe-bd.web.app",
    code: "https://github.com/mfarhadattari/programmer-recipe-bd-client",
    tech: [
      "React",
      "React Router",
      "Express.js",
      "Firebase",
      "TailwindCSS & DaisyUI",
      "React Rating",
    ],
  },
];

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
    style: "shadow-pink-400 hover:shadow-pink-400",
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
];

const contractInfo = {
  email: "mfarhad.dev@gmail.com",
  mobile: "+8801576-685104",
  location: "Chattogram, Bangladesh",
}

const links = {
  linkedin: "https://www.linkedin.com/in/DevMFarhad",
  github1: "https://github.com/mfarhadattari",
  github2: "https://github.com/DevMFarhad",
  facebook: "https://www.facebook.com/DevMFarhad",
  whatsapp: "https://wa.me/+8801576685104",
}

const db = {
  name: "Mohammad Farhad",
  description:
    "Programmer and full-stack web application developer with a specialization in front-end and back-end web development.",
  titleArray: titleArray,
  image: "/assets/mfarhad.png",
  resume: "https://drive.google.com/uc?export=download&id=1uABRmjQb7jp1lQaLwYVoQbr66TvWQLC8",
  services: services,
  projects: projects,
  skills: skills,
  contractInfo: contractInfo,
  links: links,
};

export default db;
