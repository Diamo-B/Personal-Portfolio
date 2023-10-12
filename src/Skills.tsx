import ReturnToTop from "./components/ReturnToTop";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import FrontEnd from "./components/skills/frontEnd";
import Backend from "./components/skills/Backend";
import HalfCircle from "./components/skills/HalfCircle";
import OtherSkills from "./components/skills/OtherSkills";
import ScrollDown from "./components/skills/ScrollDownForMore";

const Skills = () => {
    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };
    const [textAnimation, startTextAnimation] = useState(false);
    const frontControls = useAnimation();
    const [frontRef, frontInView] = useInView({ threshold: 1 });

    useEffect(() => {
        if (frontInView) {
            setActiveCircle("frontend");
            frontControls.start("visible");
            backControls.start("hidden");
            startTextAnimation(true);
        }
    }, [frontControls, frontInView]);

    const [BtextAnimation, startBTextAnimation] = useState(false);
    const backControls = useAnimation();
    const [backRef, backInView] = useInView({ threshold: 1 });

    useEffect(() => {
        if (backInView) {
            setActiveCircle("backend");
            backControls.start("visible");
            frontControls.start("hidden");
            othersControls.start("hidden");
            startBTextAnimation(true);
        }
    }, [backControls, backInView]);

    const [OtextAnimation, startOTextAnimation] = useState(false);
    const othersControls = useAnimation();
    const [othersRef, othersInView] = useInView({ threshold: 1 });

    useEffect(() => {
        if (othersInView) {
            setActiveCircle("others");
            othersControls.start("visible");
            backControls.start("hidden");
            startOTextAnimation(true);
        }
    }, [othersControls, othersInView]);

    const [activeCircle, setActiveCircle] = useState<string>();

    return (
        <div
            className="relative bg-slate-800 flex flex-col gap-10 2xl:gap-0"
            id="skills"
        >
            {/* 
  //explain: this is the frontend skill panel
*/}

            <div className="flex flex-col h-screen py-10" id="frontView">
                <div className="w-full flex gap-20 h-full">
                    <div className="absolute top-0 h-full py-32 2xl:py-64">
                        <HalfCircle
                            activePanel={
                                activeCircle !== undefined ? activeCircle : ""
                            }
                        />
                    </div>
                    <div className="w-96"></div>
                    <div className="w-full h-full flex flex-col justify-center relative">
                        <div className="w-full h-full flex justify-center items-center">
                            <motion.div
                                className="h-fit w-3/4 2xl:w-2/4 2xl:transform 2xl:scale-125 flex flex-col justify-center"
                                ref={frontRef}
                                animate={frontControls}
                                initial="hidden"
                                variants={variants}
                            >
                                <FrontEnd textAnimation={textAnimation} />
                            </motion.div>
                        </div>
                        <ScrollDown />
                    </div>
                </div>
            </div>

            {/* 
  //explain: this is the backend skill panel
*/}

            <div className="h-screen relative" id="backView">
                <div className="w-full  flex gap-20 h-full">
                    <div className="w-96"></div>
                    <div className="relative w-full flex flex-col justify-center">
                        <div
                            className={`absolute right-5 ${
                                backInView ? "justify-end pb-16" : "-top-36"
                            } h-full flex flex-col`}
                        >
                            <ReturnToTop idToGoTo={"intro"} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <motion.div
                                className="h-fit w-3/4 2xl:w-2/4 relative"
                                ref={backRef}
                                animate={backControls}
                                initial="hidden"
                                variants={variants}
                            >
                                <Backend textAnimation={BtextAnimation} />
                            </motion.div>
                        </div>
                            <ScrollDown/>
                    </div>
                </div>
            </div>

            {/* 
  //explain: this is the last skill panel
*/}

            <div className="h-screen relative">
                <div className="w-full  flex gap-20 h-full">
                    <div className="w-96"></div>
                    <div className="w-full flex justify-center">
                        <div
                            className={`absolute right-5 justify-end pb-16 h-full flex flex-col`}
                        >
                            <ReturnToTop idToGoTo={"intro"} />
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <motion.div
                                className="h-fit w-3/4 2xl:w-2/4"
                                ref={othersRef}
                                animate={othersControls}
                                initial="hidden"
                                variants={variants}
                            >
                                <OtherSkills textAnimation={OtextAnimation} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
