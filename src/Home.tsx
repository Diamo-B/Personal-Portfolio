import { motion } from "framer-motion";
import Title from "./components/title";
import AnimatedText from "./components/AnimatedWrittenText";
import Navbar from "./components/Navbar";
const Home = () => {
  const introImage = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const introText = "Hello, I'm Bachar, a passionate software engineering student from Morocco, having my senior year of studies at the Moroccan School of Engineering Sciences";

  return (
    <div className="h-screen pt-10" id="intro">
      <Title />
      <Navbar />
      <div className="flex pl-24">
        <motion.div className="grid grid-cols-2 justify-items-center place-items-center ">
          <AnimatedText text={introText} />
          <motion.img
            src="/gears-removebg-preview.png"
            alt="Gears image"
            variants={introImage}
            initial={"hidden"}
            animate="visible"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
