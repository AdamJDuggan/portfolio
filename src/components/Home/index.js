import React from "react";
// Components
import Header from "../Header";
import Project from "../Project";
import About from "../About";
import Contact from "../Contact";

// Data
import projects from "../../projects";

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="work"
        className="flex flex-col items-center bg-gray-800 text-gray-400"
      >
        <ul className="container pb-24 md:pt-24 space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </ul>
      </section>
      <About />
      <Contact />
    </main>
  );
}
