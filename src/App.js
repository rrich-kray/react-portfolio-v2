import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Splash from "./components/Splash/Splash";
import AboutRedux from "./components/AboutRedux/AboutRedux";
import ProjectPage from "./components/ProjectPage/ProjectPage";

function App() {
  // Clicking on tile will set isPostActive to true, and also set activePost to the content of that post
  // JavaScript checks the same location in memory for equality. Even if two objects have the same contents, they will not occupy the same locatin in memory, and therefore JavaScript will not declare them strictly equal
  const [activePost, setActivePost] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <div id="app">
          {activePost.length !== 0 ? (
            <ProjectPage
              projectData={activePost}
              setActivePost={setActivePost}
            />
          ) : (
            <>
              {/* <Nav /> */}
              <Hero />
              <Projects setActivePost={setActivePost} />
              <AboutRedux />
              {/* <About /> */}
              {/* <Skills /> */}
              {/* <Contact /> */}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
