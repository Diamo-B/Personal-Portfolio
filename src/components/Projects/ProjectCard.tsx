import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { pills } from "./hooks/useProjectsData";
import Pill from "./pillShowCase";
import { motion, useAnimation } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

type Props = {
    Image: JSX.Element;
    Title: string;
    Description: string;
    pillsData: pills;
    pillsJustify: { frontend?: string; backend?: string; others?: string };
    githubLink: string;
    next: boolean;
    setNext: Dispatch<SetStateAction<boolean>>;
    prev: boolean;
    setPrev: Dispatch<SetStateAction<boolean>>;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
};

const ProjectCard = ({
    Image,
    Title,
    Description,
    pillsData,
    pillsJustify,
    githubLink,
    next,
    setNext,
    prev,
    setPrev,
    setSelectedIndex,
}: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);
    let cardControls = useAnimation();

    const cardIncrementVariants = {
        fadeNext: {
            x: -50,
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
            },
        },
        fadePrev: {
          x: 50,
          opacity: 0,
          transition: {
              duration: 1,
              ease: "linear",
          },
      },
      translateLeft: {
        x: -50,
    },
        translateRight: {
            x: 50,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "linear",
            },
        }
    };

    useEffect(() => {
        if (next) {
            cardControls.start("fadeNext").then(() => {
                setSelectedIndex((prev: number) => prev + 1);
                cardControls.start("translateRight").then(() => {
                    cardControls.start("show").then(() => {
                        setNext(false);
                    });
                });
            });
        }
    }, [next]);

    useEffect(() => {
        if (prev) {
            cardControls.start("fadePrev").then(() => {
                setSelectedIndex((prev: number) => prev - 1);
                cardControls.start("translateLeft").then(() => {
                    cardControls.start("show").then(() => {
                        setPrev(false);
                    });
                });
            });
        }
    }, [prev]);


    return (
        <motion.div
            className="grid grid-cols-3 h-full w-full -z-30"
            ref={cardRef}
            variants={cardIncrementVariants}
            animate={cardControls}
        >
            <div className="w-full h-full py-10 flex flex-col gap-4">
                <div className="w-full h-full flex justify-center items-center bg-white rounded-xl">
                    {Image}
                </div>
                <a href={githubLink} target="__blank" className="border-2 rounded-full w-full py-1 bg-white text-slate-700 font-bold flex items-center justify-center gap-2">
                    <img src="/public/github.svg" className="w-5 h-5" alt="" />
                    Github Repository
                </a>
            </div>
            <div className="col-span-2 text-center flex flex-col gap-2 justify-center text-white">
                <h1 className="text-xl font-bold">{Title}</h1>
                <div className="text-left px-10 font-itim">
                    {Description}
                </div>
                <div
                    className={`flex ${
                        pillsJustify && pillsJustify.frontend
                    } flex-wrap gap-2 px-10 2xl:px-20`}
                >
                    {pillsData.frontEnd &&
                        pillsData.frontEnd.length > 0 &&
                        pillsData.frontEnd.map((pill) => (
                            <Pill
                                key={uuidv4()}
                                name={pill.name}
                                bgColor="bg-emerald-400"
                                textColor="text-white"
                            />
                        ))}
                </div>
                <div
                    className={`flex ${
                        pillsJustify && pillsJustify.backend
                    } flex-wrap gap-2 px-10 2xl:px-20`}
                >
                    {pillsData.backEnd &&
                        pillsData.backEnd.length > 0 &&
                        pillsData.backEnd.map((pill) => (
                            <Pill
                                key={uuidv4()}
                                name={pill.name}
                                bgColor="bg-amber-400"
                                textColor="text-white"
                            />
                        ))}
                </div>
                <div
                    className={`flex ${
                        pillsJustify && pillsJustify.others
                    } flex-wrap gap-2 px-10 2xl:px-20`}
                >
                    {pillsData.others &&
                        pillsData.others.length > 0 &&
                        pillsData.others.map((pill) => (
                            <Pill
                                key={uuidv4()}
                                name={pill.name}
                                bgColor="bg-cyan-400"
                                textColor="text-white"
                            />
                        ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
