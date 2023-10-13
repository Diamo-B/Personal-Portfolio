import { AnimationPlaybackControls, animate, motion } from "framer-motion";
import Title from "./components/title";
import AnimatedText from "./components/AnimatedWrittenText";
import { useState, useRef, useEffect, RefObject } from "react";
import Contact from "./components/Contact";
import isMobile from "./helpers/checkIfMobile";

type Props = {
    contactDivRef: RefObject<HTMLDivElement>
}

const Home = ({contactDivRef}:Props) => {
    const [textAnimationCompleted, setTextAnimationCompleted] =
        useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement>(null);
    let imageControls: AnimationPlaybackControls | null = null;

    useEffect(() => {
        if (imageRef.current) {
            imageControls = animate(
                imageRef.current,
                { scale: 1, x:0, y:0, opacity: 1 },
                { duration: 2, delay:isMobile()?3:2, ease: "easeOut" }
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

    const introText = "Hello, I'm Bachar, a passionate software engineering student from Morocco, having my senior year of studies at the Moroccan School of Engineering Sciences";
    return (
        <div className="h-full lg:h-full overflow-hidden flex flex-col pt-6 2xl:pt-28" id="intro">
            <div className="w-full mb-5 lg:mb-0">
                <Title />
            </div>
            <div className={`${isMobile()?"hidden":""} absolute h-full top-0 left-0 flex flex-col justify-center items-center z-50 bg-slate-900/60 w-full lg:h-fit lg:relative lg:flex-row lg:bg-transparent order-3 lg:-order-none`}
                ref={contactDivRef}
            >
                <Contact parentRef={contactDivRef}/>
            </div>
            <div className="flex justify-center lg:pl-24 2xl:pl-32">
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center place-items-center ">
                    <div className="px-10 lg:px-0 mb-7 lg:mb-0 min-w-full">
                        <AnimatedText
                            text={introText}
                            isAnimationComplete={setTextAnimationCompleted}
                        />
                    </div>
                    <motion.img
                        src="/gears-removebg-preview.png"
                        alt="Gears image"
                        ref={imageRef}
                        className="w-[80%] lg:mb-0 mb-10 lg:w-[75%] xl:w-[65%]"
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                            x: !isMobile()?500:0,
                            y: isMobile()?100:0
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
