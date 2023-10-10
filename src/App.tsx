import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./components/Navbar";
function App() {
    return (
        <div className="h-screen">
            {/* <Navbar /> */}
            <Navbar/>
            <Home />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
