import ReturnToTop from "./components/ReturnToTop";

import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import FrontEnd from "./components/skills/frontEnd";
import Backend from "./components/skills/Backend";
import HalfCircle from "./components/skills/HalfCircle";

const Skills = () => {
  const [frontScope, frAnimate] = useAnimate();
  const isFrInView = useInView(frontScope);

  const [backScope, backAnimate] = useAnimate();
  const isBackInView = useInView(backScope);

  useEffect(() => {
    if (isFrInView) {
      console.log("fr");
      
      backAnimate(
        backScope.current,
        { opacity: 0 },
        { duration: 0.6, ease: "linear" }
      );
      frAnimate(
        frontScope.current,
        { opacity: 1 },
        { duration: 1.5, ease: "linear" }
      );
      
    }
    if (isBackInView) {
      console.log("ba");
      
      frAnimate(
        frontScope.current,
        { opacity: 0 },
        { duration: 0.6, ease: "linear" }
      ).then(() => {
        backAnimate(
          backScope.current,
          { opacity: 1 },
          { duration: 1.5, ease: "linear" }
        );
      });
    }
  }, [isFrInView, isBackInView]);

  return (
    <div className="relative bg-slate-900 flex flex-col gap-10" id="skills">
      <div className="flex flex-col h-screen">
        <div className="w-full flex gap-20 h-full">
          <div className="absolute top-0 h-full py-32">
            <HalfCircle />
          </div>
          <div className="w-96"></div>
          <motion.div
            className="h-full w-2/4 flex flex-col justify-center"
            ref={frontScope}
            initial={{
              opacity: 0,
            }}
          >
            <FrontEnd />
          </motion.div>
        </div>
      </div>
      <div className="h-screen relative">
        <div
          className={`absolute right-5 ${
            isBackInView ? "justify-end pb-32" : "-top-36"
          } h-full flex flex-col`}
        >
          <ReturnToTop />
        </div>
        <div className="w-full  flex gap-20 h-full">
          <div className="w-96"></div>
          <motion.div
            className="h-full w-2/4 flex flex-col justify-center"
            ref={backScope}
            initial={{
              opacity: 0,
            }}
          >
            <Backend />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
