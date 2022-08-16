import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Splash from "./components/Splash/Splash";

function App() {
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
          <Nav />
          {/* <Hero /> */}
          <About />
          <Projects />
          {/* <Skills /> */}
          {/* <Contact /> */}
        </div>
      )}
    </>
  );
}

export default App;
