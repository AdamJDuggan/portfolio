// React
import React from "react";
import { useLocation, Link } from "react-router-dom";
// 3rd party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";
// Components
import Footer from "../Footer";
// Routes
import routes from "../../routes";
// Data
import projects from "../../projects";

export default function ProjectPage(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const project = projects.find(
    (project) => project.id === urlParams.get("project")
  );

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="bg-gray-800 text-white">
      <nav className="p-2 bg-primary">
        <Link to={routes.HOME}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          HOME
        </Link>
      </nav>
      <img src={project.image.src} alt={project.image.alt} />

      <div className="grid">
        <div className="py-8 md:py-12 px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-8xl mb-6 md:mb-12">
            {project.name}
          </h1>
          <div className="flex flex-wrap mb-6 md:mb-12 text-1xl md:text-2xl space-x-4 uppercase ml-2">
            {project.links.map((link, index) => (
              <ExternalLink
                key={index}
                link={link.value}
                arrow
                label={link.name}
                className="mb-2 jump"
              />
              // <a key={index} className="mb-2 jump" href={link.value}>
              //   {link.name}&#8599;
              // </a>
            ))}
          </div>
          <p className="text-1xl md:text-2xl mb-12">{project.detail}</p>
          {props.children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
