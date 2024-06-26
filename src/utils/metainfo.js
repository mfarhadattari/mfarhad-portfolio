const data = {
  title: "Mohammad Farhad",
  url: "https://mfarhad-dev.vercel.app",
  keywords:
    "Mohammad Farhad, programmer, full-stack developer, web development, mfarhadattari, mfarhaddev, mfarhad, devmfarhad, DevMFarhad",
  description:
    "I am Mohammad Farhad. Programmer and full-stack web application developer with a specialization in front-end and back-end web development.",
};

export const metainfo = {
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    type: "website",
    url: data.url,
    image: "./favicon.ico",
  },
  keywords: data.keywords,
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    image: "./favicon.ico",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Farhad",
    url: data.url,
    sameAs: [
      "https://www.linkedin.com/in/DevMFarhad",
      "https://www.facebook.com/DevMFarhad",
      "https://github.com/DevMFarhad",
      "https://github.com/mfarhadattari",
    ],
    jobTitle: "Full-Stack Developer",
    description: data.description,
  },
};
