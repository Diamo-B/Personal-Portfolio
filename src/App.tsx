import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./components/Navbar";
import {useRef} from "react"; 
function App() {
    const contactDivRef = useRef<HTMLDivElement>(null);
    return (
        <div className="h-screen relative">
{/*             <Navbar contactDivRef={contactDivRef}/>
            <Home contactDivRef={contactDivRef}/> */}
             <Skills />
 {/*           <Projects />
            <Footer /> */}
        </div>
    );
}

export default App;
