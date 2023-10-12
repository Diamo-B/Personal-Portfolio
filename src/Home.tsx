import { AnimationPlaybackControls, animate, motion } from "framer-motion";
import Title from "./components/title";
import AnimatedText from "./components/AnimatedWrittenText";
import { useState, useRef, useEffect } from "react";
import { UilArrowRight } from '@iconscout/react-unicons'
const Home = () => {
    const [textAnimationCompleted, setTextAnimationCompleted] =
        useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement>(null);
    let imageControls: AnimationPlaybackControls | null = null;

    useEffect(() => {
        if (imageRef.current) {
            imageControls = animate(
                imageRef.current,
                { scale: 1, x: 0, opacity: 1 },
                { duration: 2, ease: "easeOut" }
            );
            imageControls.pause();
        }
    }, [imageRef.current]);

    useEffect(() => {
        setTextAnimationCompleted(false);
        if (textAnimationCompleted === true && imageControls !== null) {
            imageControls.play();
        }
    }, [textAnimationCompleted]);

    const introText =
        "Hello, I'm Bachar, a passionate software engineering student from Morocco, having my senior year of studies at the Moroccan School of Engineering Sciences";

    return (
        <div className="h-full overflow-hidden pt-5 2xl:pt-28" id="intro">
            <Title />
            <div className="w-full flex justify-center items-center gap-2 mt-5">
                <a className="w-42 bg-slate-900 border-2 border-slate-900 rounded-full text-white font-base text-lg font-itim px-5 py-1 flex items-center"
                    href="https://mail.google.com/mail/?view=cm&to=elkarni.bachar%40gmail.com" target="__blank"
                >
                  Contact Me <UilArrowRight className="inline"/>
                </a>
                <button className="w-42 rounded-full text-slate-900 border-2 border-slate-900 font-base text-lg font-itim px-5 py-1">
                  Download CV
                </button>
                <a className="w-10" href="https://github.com/Diamo-B" target="__blank">
                  <img src="/github.svg" alt="github repo" />
                </a>
                <a className="w-14" href="https://www.linkedin.com/in/bachar-elkarni/" target="__blank">
                  <img src="/linkedin.svg" alt="linkedin profile" />
                </a>
            </div>
            <div className="flex justify-center pl-24 2xl:pl-32">
                <motion.div className="grid grid-cols-2 justify-items-center place-items-center ">
                    <div className="min-w-full">
                        <AnimatedText
                            text={introText}
                            isAnimationComplete={setTextAnimationCompleted}
                        />
                    </div>
                    <motion.img
                        src="/gears-removebg-preview.png"
                        alt="Gears image"
                        ref={imageRef}
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                            x: 500,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
