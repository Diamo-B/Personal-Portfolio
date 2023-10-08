import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  activePanel: string
}

type showCase = {
  top: string,
  middle: string,
  bottom:string
}

const HalfCircle = ({activePanel}:Props) => {

  const variants = {
    hidden:{
      opacity:0,
      transition:{
        duration:0.3
      }
    },
    animate:{
      opacity:1
    }
  }

  const controls = useAnimation();


  const [showCase, setShowCase] = useState<showCase>({
    top: "backend",
    middle: "frontend",
    bottom:"others"
  })

  useEffect(() => {
    let newShowCase = { ...showCase }; // create a copy of the showCase state
    switch(activePanel){
      case "frontend":
        newShowCase.top = "backend"
        newShowCase.middle = "frontend"
        newShowCase.bottom = "others"
      break;
      case "backend":
        newShowCase.top = "frontend"
        newShowCase.middle = "backend"
        newShowCase.bottom = "others"
      break;
      case "others":
        newShowCase.top = "frontend"
        newShowCase.middle = "others"
        newShowCase.bottom = "backend"
      break;
    }
    controls.start("hidden").then(()=>{
      setShowCase(newShowCase);
    }).finally(()=>{
      controls.start("animate")
    })
  }, [activePanel]); // dependency array


  return (
    <div className="sticky top-36 2xl:top-64">
      <div className="w-96 h-96 border-r-8 border-white rounded-full grid grid-col-1">
        <div className="flex justify-end">
          <button className={`border-2 rounded-full border-white text-slate-900 font-bold text-xl bg-white w-28 h-10 mr-24`}
          >
            <motion.p
              variants={variants}
              animate={controls}
            >
              {showCase.top}
            </motion.p>
          </button>
        </div>
        <div className="flex items-center justify-between pl-20 -mr-5">
          <h1 className="text-white font-bold text-4xl font-itim ">My Skills</h1>
          <button className={`border-2 rounded-full border-white  font-bold text-xl w-28 h-10
            ${showCase.middle === activePanel ? "bg-amber-500 text-white" : "bg-white text-slate-900"}
          `}
          >
            <motion.p
              variants={variants}
              animate={controls}
            >
              {showCase.middle}
            </motion.p>
          </button>
        </div>
        <div className="flex items-end justify-end mr-24">
          <button className={`border-2 rounded-full border-white text-slate-900 font-bold text-xl bg-white w-28 h-10`}
          >
            <motion.p
              variants={variants}
              animate={controls}
            >
              {showCase.bottom}
            </motion.p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HalfCircle;
