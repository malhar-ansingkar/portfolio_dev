import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import Experience from "./components/experience/experience";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Loading from "./components/loading/Loading";

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    setTimeout(() => setInit(true), 3000);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init ? (
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#ffffff",
                },
              },
              fpsLimit: 120,
              particles: {
                number: {
                  value: 190,
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                },
                color: {
                  value: "#000000",
                },
                shape: {
                  type: "triangle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                links: {
                  enable: true,
                  distance: 130,
                  color: "#000000",
                  opacity: 0.7,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
                detectRetina: true,
              },
            }}
          />
        </div>
      ) : (
        <div className="loading-container">
          <Loading />
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}

export default App;
