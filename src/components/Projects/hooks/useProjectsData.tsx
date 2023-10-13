export type pills = {
  frontEnd?: { name: string }[];
  backEnd?: { name: string }[];
  others?: { name: string }[];
};

export type projectData={
  Title: string;
  Description: string;
  pillsData: pills;
  Image: JSX.Element;
  pillsJustify:{frontend?:string, backend?:string, others?:string};
  githubLink: string;
}

const useProjectsData = () => {
  const projectsData: projectData[] = [{
    Image: <img src="/mef logo.svg" alt="project's logo" />,
    Title: "Hiring competitions platform",
    Description:
      "This project was the fruit of my internship in the Moroccan finance ministry. It's basically a remake of the platform they used to publish and manage the hiring competitions since it has some major limitations.",
    pillsData: {
      frontEnd: [
        { name: "React Ts" },
        { name: "redux toolkit" },
        { name: "DaisyUI" },
        { name: "react-router-dom" },
        { name: "DndKit" },
        { name: "RHF" },
      ],
      backEnd: [
        { name: "Express Ts" },
        { name: "Prisma" },
        { name: "Envalid" },
        { name: "JWT" },
        { name: "GoogleApis" },
        { name: "Nodemailer" },
        { name: "MailGen" },
      ],
    },
    pillsJustify:{
      frontend:"justify-center",
      backend:"justify-center",
      others:""
    },
    githubLink: "https://github.com/Diamo-B/Stage-Minister-Finance.git"
  },{
    Image: (
      <img
        src="/nextjs-text.svg"
        className="w-36"
        alt="project's logo"
      />
    ),
    Title: "Simple E-commerce App",
    Description:
      "This project was my attempt at freelancing. It was a simple E-commerce project I made for a client from the app's wireframes and mockups, to the technical design, the coding, testing and deployment",
    pillsData: {
      frontEnd: [
        { name: "ReactJS" },
        { name: "SwiperJS" },
        { name: "RHF" },
      ],
      backEnd: [
        { name: "NextJS 12" },
        { name: "Prisma" },
        { name: "Next-Auth" },
      ],
      others: [{ name: "Linode" }, { name: "Nginx" }, { name: "Mysql" }],
    },
    pillsJustify:{
      frontend:"justify-end",
      backend:"justify-center",
      others:""
    },
    githubLink: "https://github.com/Diamo-B/First_Freelance.git"
  },{
    Image: (
      <img src="/react.svg" className="w-36" alt="project's logo" />
    ),
    Title: "Passengers Transportation",
    Description:
      "This was my end of year project at school for the second year of engineering cycle. It's purpose was to make an app that handles the transportation of passengers between defined locations, just like Uber or InDriver.",
    pillsData: {
      frontEnd: [
        { name: "ReactJS" },
        { name: "redux toolkit" },
        { name: "react-router-dom" },
        { name: "RHF" },
        { name: "Tailwindcss" },
      ],
      backEnd: [
        { name: "Express JS" },
        { name: "Prisma" },
        { name: "JWT" },
        { name: "Multer" },
      ],
    },
    pillsJustify:{
      frontend:"justify-center",
      backend:"justify-center",
      others:""
    },
    githubLink: "https://github.com/Diamo-B/PFA-4IIR-Gestion_transferts.git"
  },{
    Image: (
      <img src="/laravel.svg" className="w-36" alt="project's logo" />
    ),
    Title: "Events Management platform",
    Description:
      "This was the fruit of my internship inside the Moroccan Agency of logistics development. It's purpose was to make a platform that handles the Management of the different events held at the agency starting from the creation of the events to the distribution of invitations by mail and more.",
    pillsData: {
      frontEnd: [{ name: "HTML" }, { name: "CSS" }, { name: "Vanilla JS" }],
      backEnd: [
        { name: "Laravel" },
        { name: "asika/pdf2text" },
        { name: "maatwebsite/excel" },
        { name: "Laravel/Breeze" },
      ],
    },
    pillsJustify:{
      frontend:"justify-center",
      backend:"justify-center",
      others:""
    },
    githubLink: "https://github.com/Diamo-B/Event-s-Management.git"
  },{
    Image: (
      <img src="/frontEndMentorLogo.svg" className="w-full 2xl:w-3/4 h-7 px-5 " alt="project's logo" />
    ),
    Title: "FrontEndMentor challenges",
    Description:
      "This holds the solutions of the frontEndMentor website challenges. This website offers user interface images for various viewport sizes, and the goal is to replicate them by looking at the images using any front-end framework/tools you like",
    pillsData: {
      frontEnd: [{ name: "HTML" }, { name: "Vanilla JS" }, { name: "CSS" }, {name: "React JS"}],
      others:[{name: "APIs"}]
    },
    pillsJustify:{
      frontend:"justify-center",
      backend:"",
      others:"justify-center"
    },
    githubLink: "https://github.com/Diamo-B/Front-End-Mentor.git"
  }
  ]
  return { projectsData };
};

export default useProjectsData;
