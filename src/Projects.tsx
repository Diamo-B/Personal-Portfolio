import AnimatedText from "./components/AnimatedWrittenText";
import {
    UilArrowCircleLeft,
    UilArrowCircleRight,
} from "@iconscout/react-unicons";
import ProjectCard from "./components/Projects/ProjectCard";
import useProjectsData, {
    projectData,
} from "./components/Projects/hooks/useProjectsData";
import { useState } from "react";
import ReturnToTop from "./components/ReturnToTop";
import { v4 as uuidv4 } from "uuid";
import isMobile from "./helpers/checkIfMobile";
import Pill from "./components/Projects/pillShowCase";

const Projects = () => {
    const intro =
        "Throughout the last 2 years, I made some projects, either school or personal projects. you'll find below a description of the most relevant ones";
    const { projectsData } = useProjectsData();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [next, setNext] = useState<boolean>(false);
    const [prev, setPrev] = useState<boolean>(false);
    return (
        <div
            className={`${
                !isMobile() ? "h-screen" : ""
            } px-7 lg:px-0 flex flex-col items-center py-10 gap-7 relative`}
            id="projects"
        >
            <h1 className="font-Roboto-mono lg:font-itim text-3xl lg:text-5xl">
                My Projects
            </h1>
            <AnimatedText
                text={intro}
                size="text-sm lg:text-lg"
                cursorHeight="h-5"
            />

            {/* 
                //explain: this is only desktop card
            */}
            <div className="h-full w-3/4 bg-slate-100 hidden lg:flex justify-evenly items-center rounded-2xl">
                <button
                    className="group"
                    disabled={selectedIndex == 0}
                    onClick={() => {
                        if (selectedIndex > 0) {
                            setPrev(true);
                        }
                    }}
                >
                    <UilArrowCircleLeft className="w-14 h-14 text-slate-700 group-disabled:text-slate-300" />
                </button>

                {/* //explain: Card component */}
                <div className="w-3/4 h-3/4 2xl:h-2/4 pl-10 rounded-xl bg-slate-700 border-2 border-slate-400">
                    <ProjectCard
                        {...projectsData[selectedIndex]}
                        next={next}
                        setNext={setNext}
                        prev={prev}
                        setPrev={setPrev}
                        setSelectedIndex={setSelectedIndex}
                    />
                </div>

                <button
                    className="group"
                    disabled={selectedIndex == projectsData.length - 1}
                    onClick={() => {
                        if (selectedIndex < projectsData.length - 1) {
                            setNext(true);
                        }
                    }}
                >
                    <UilArrowCircleRight className="w-14 h-14 text-slate-700 group-disabled:text-slate-300" />
                </button>
            </div>

            {/* 
                //explain: this is only mobile card. made it since the desktop card is too messed-up to be adapted responsively 
            */}
            {isMobile() && (
                <div className="w-full h-full flex flex-col gap-5">
                    {projectsData.map((project: projectData) => (
                        <div className="border-2 border-slate-900 py-5 rounded-xl flex flex-col gap-3">
                            <div className="w-11/12 mx-auto h-44 rounded-xl border-2 border-slate-900 flex items-center justify-center">
                                {project.Image}
                            </div>
                            <h1 className="font-Roboto-mono font-bold text-center">
                                {project.Title}
                            </h1>
                            <p className="px-5">{project.Description}</p>
                            <div className="px-5 flex flex-col gap-2">
                                <div className={`flex flex-wrap gap-2`}>
                                    {project.pillsData.frontEnd &&
                                        project.pillsData.frontEnd.length > 0 &&
                                        project.pillsData.frontEnd.map(
                                            (pill) => (
                                                <Pill
                                                    key={uuidv4()}
                                                    name={pill.name}
                                                    bgColor="bg-emerald-400"
                                                    textColor="text-white"
                                                />
                                            )
                                        )}
                                </div>
                                <div
                                    className={`flex justify-end flex-wrap gap-2 `}
                                >
                                    {project.pillsData.backEnd &&
                                        project.pillsData.backEnd.length > 0 &&
                                        project.pillsData.backEnd.map(
                                            (pill) => (
                                                <Pill
                                                    key={uuidv4()}
                                                    name={pill.name}
                                                    bgColor="bg-amber-400"
                                                    textColor="text-white"
                                                />
                                            )
                                        )}
                                </div>
                                <div
                                    className={`flex flex-wrap gap-3 ${
                                        project.Title.includes("Mentor")
                                            ? "justify-end"
                                            : ""
                                    }`}
                                >
                                    {project.pillsData.others &&
                                        project.pillsData.others.length > 0 &&
                                        project.pillsData.others.map((pill) => (
                                            <Pill
                                                key={uuidv4()}
                                                name={pill.name}
                                                bgColor="bg-cyan-400"
                                                textColor="text-white"
                                            />
                                        ))}
                                </div>
                                <a
                                    href={project.githubLink}
                                    target="__blank"
                                    className="border-2 border-slate-900 rounded-full w-full py-1 bg-white text-slate-700 font-bold flex items-center justify-center gap-2"
                                >
                                    <img
                                        src="/github.svg"
                                        className="w-5 h-5"
                                        alt=""
                                    />
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div
                className={`${
                    !isMobile()
                        ? "absolute bottom-5 right-5"
                        : "w-full flex justify-end"
                }`}
            >
                <ReturnToTop idToGoTo="intro" outline={true} />
            </div>
        </div>
    );
};

export default Projects;
