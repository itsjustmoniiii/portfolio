import fhlogo from "../public/assets/fhlogo.png";
import elements from "../public/assets/elements.png";
import me from "../public/assets/me.JPG";

const technologies = [
  {
    name: "Tailwind CSS",
    icon: "assets/logos/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "assets/logos/bootstrap.png",
  },
  {
    name: "SASS",
    icon: "assets/logos/sass.png",
  },
  {
    name: "JavaScript",
    icon: "assets/logos/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "assets/logos/typescript.png",
  },
  {
    name: "React JS",
    icon: "assets/logos/react.png",
  },
  {
    name: "Vue JS",
    icon: "assets/logos/vue.png",
  },
  {
    name: "Next JS",
    icon: "assets/logos/nextjs.svg",
  },
  {
    name: "Express JS",
    icon: "assets/logos/express.png",
  },
  {
    name: "MongoDB",
    icon: "assets/logos/mongodb.png",
  },
  {
    name: "Prisma",
    icon: "assets/logos/prisma.png",
  },
  {
    name: "Git",
    icon: "assets/logos/git.png",
  },
  {
    name: "Flutter",
    icon: "assets/logos/flutter.png",
  },
  {
    name: "Figma",
    icon: "assets/logos/figma.png",
  },
  {
    name: "Adobe XD",
    icon: "assets/logos/adobexd.png",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "elements",
    icon: elements,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    info: "During my internship at element, I worked in the role of a frontend developer. During this time I worked on different components with web frameworks (e.g. React and Vue) and transformed the designs into code",
  },
  {
    title: "Student",
    company_name: "FH St.Pölten",
    icon: fhlogo,
    iconBg: "#E6DEDD",
    date: "September 2020 - September 2023",
    info: "During my studies I gained a lot of experience in different programming languages when I realized projects alone or in a team.",
  },
];

const projects = [
  {
    name: "travelfam",
    short_description: "Travelfam - A Social Media Plattform for Travelers",
    long_description:
      "Travelfam - A Social Media Plattform for Travelers is a social media platform for travelers. You can publish posts with images, follow other travel users and see the top 10 trending posts as well as users.",
    tag: {
      name: "#programming",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-700",
    },
    tagsDetail: [
      {
        name: "reactjs",
        image: "assets/logos/react.png",
      },
      {
        name: "nextjs",
        image: "assets/logos/nextjs.svg",
      },
      {
        name: "mongodb",
        image: "assets/logos/mongodb.png",
      },
      {
        name: "tailwind",
        image: "assets/logos/tailwind.png",
      },
      {
        name: "prisma",
        image: "assets/logos/prisma.png",
      },
      {
        name: "typescript",
        image: "assets/logos/typescript.png",
      },
    ],
    image: "/assets/logos/typescript.png",
    website_link: "https://travelfam.vercel.app",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "assets/logos/adobexd.png",
  //   source_code_link: "https://github.com/",
  // },
];

export { experiences, technologies, projects };
