import AnimatedText from "./components/AnimatedWrittenText";
import {
    UilArrowCircleLeft,
    UilArrowCircleRight,
} from "@iconscout/react-unicons";
import ProjectCard from "./components/Projects/ProjectCard";
import useProjectsData from "./components/Projects/hooks/useProjectsData";
import { useState } from "react";
import ReturnToTop from "./components/ReturnToTop";

const Projects = () => {
    const intro ="Throughout the last 2 years, I made some projects, either school or personal projects. you'll find below a description of each one of them";
    const { projectsData } = useProjectsData();
    const [selectedIndex, setSelectedIndex] = useState<number>(0) 
    const [next, setNext] = useState<boolean>(false);
    const [prev, setPrev] = useState<boolean>(false);
    return (
        <div
            className="h-screen flex flex-col items-center py-10 gap-7 relative"
            id="projects"
        >
            <h1 className="font-itim text-5xl">My Projects</h1>
            <AnimatedText text={intro} sizeSuffix="lg" cursorHeight="h-5" />
            <div className="h-full w-3/4 bg-slate-100 flex justify-evenly items-center rounded-2xl">
                <button className="group" disabled={selectedIndex == 0}
                    onClick={()=>{
                        if(selectedIndex > 0){
                            setPrev(true);
                        }
                    }}
                >
                    <UilArrowCircleLeft className="w-14 h-14 text-slate-700 group-disabled:text-slate-300" />
                </button>

                {/* //explain: Card component */}
                <div className="w-3/4 h-3/4 2xl:h-2/4 pl-10 rounded-xl bg-slate-700 border-2 border-slate-400">
                    <ProjectCard {...projectsData[selectedIndex]} next={next} setNext={setNext} prev={prev} setPrev={setPrev} setSelectedIndex={setSelectedIndex} />
                </div>

                <button className="group" disabled={selectedIndex == projectsData.length-1}
                    onClick={()=>{
                        if(selectedIndex < projectsData.length-1){
                            setNext(true);
                        }
                    }}
                >
                    <UilArrowCircleRight className="w-14 h-14 text-slate-700 group-disabled:text-slate-300" />
                </button>
            </div>
            <div className="absolute bottom-5 right-5">
                <ReturnToTop idToGoTo="intro" outline={true}/>
            </div>
        </div>
    );
};

export default Projects;
