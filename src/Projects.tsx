import AnimatedText from "./components/AnimatedWrittenText";

const Projects = () => {

    const intro = "Througout the last 2 years, I made some projects, either school or personal projects. you'll find below a description of each one of them"

    return(
        <div className="h-screen flex flex-col items-center py-10 gap-7" id="projects">
            <h1 className="font-itim text-5xl">My Projects</h1>
            <AnimatedText text={intro} sizeSuffix="lg" cursorHeight="h-5"/>
            <div className="h-full w-3/4 bg-red-500 grid grid-cols-1 justify-center">
            </div>
        </div>
    );
}

export default Projects;