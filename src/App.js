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
import ProjectsRedux from "./components/ProjectsRedux/ProjectsRedux";
import ThreeNav from "./components/ThreeNav/ThreeNav";
import ThreeProject from "./components/ThreeProjects/ThreeProjects";
import ThreeAbout from "./components/ThreeAbout/ThreeAbout";
import Projects2 from "./components/projects2/projects2";

function App() {
  // Clicking on tile will set isPostActive to true, and also set activePost to the content of that post
  // JavaScript checks the same location in memory for equality. Even if two objects have the same contents, they will not occupy the same locatin in memory, and therefore JavaScript will not declare them strictly equal
  const [activePost, setActivePost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, changeActivePage] = useState("home");

  function renderPage() {
    switch (activePage) {
      case "home":
        return <Hero changeActivePage={changeActivePage} />;
        break;
      case "projects":
        return <Projects2 />;
        break;
      case "about":
        return <ThreeAbout />;
      default:
        return <Hero />;
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      {/* {isLoading ? (
        <Splash />
      ) : ( */}
      <div className="wrapper">
        <div id="app">
          <ThreeNav
            activePage={activePage}
            changeActivePage={changeActivePage}
          />
          {activePost.length !== 0 ? (
            <ProjectPage
              projectData={activePost}
              setActivePost={setActivePost}
            />
          ) : (
            <>
              <Hero />
              <Projects />
              <AboutRedux />
            </>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default App;
