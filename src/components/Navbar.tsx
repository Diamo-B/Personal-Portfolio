import { motion } from "framer-motion";
import {
  UilHome,
  UilUser,
  UilFolder,
  UilDesktop,
} from "@iconscout/react-unicons";
import useAutoScroll from "../helpers/autoScroll";

const Navbar = () => {
  const {scrollToSection} = useAutoScroll();

  return (
    <motion.div
      className="w-full flex mt-5 2xl:mt-10 justify-center"
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        transition: {
          duration: 3,
          delay: 1,
        },
        y: 0,
        opacity: 1,
      }}
    >
      <div className="w-1/4 px-3 bg-slate-100 shadow-md rounded-full grid grid-cols-4 justify-items-center place-content-center text-sm">
        <button
          className="flex flex-col justify-center items-center group hover: cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <UilHome className="w-5 group-hover:text-sky-700" />
          <p className="group-hover:text-sky-700">Home</p>
        </button>
        <button
          className="flex flex-col justify-center items-center group hover: cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          <UilUser className="w-5 group-hover:text-sky-700" />
          <p className="group-hover:text-sky-700">Skills</p>
        </button>
        <button
          className="flex flex-col justify-center items-center group hover: cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          <UilFolder className="w-5 group-hover:text-sky-700" />
          <p className="group-hover:text-sky-700">Projects</p>
        </button>
        <button
          className="flex flex-col justify-center items-center group hover: cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <UilDesktop className="w-5 group-hover:text-sky-700" />
          <p className="group-hover:text-sky-700">About</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
