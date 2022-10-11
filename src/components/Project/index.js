// React
import React from "react";
import { Link } from "react-router-dom";
// 3rd party
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// Routes
import routes from "../../routes";

export default function Project({ project, index }) {
  const even = true;

  return (
    <Link
      key={project.id}
      id={project.id}
      to={routes.PROJECT + `/?project=` + project.id}
      className={classnames(
        "relative md:border-t-2 border-gray-400 flex flex-col cursor-pointer hover:opacity-80",
        even ? "md:flex-row" : "md:flex-row-reverse justify-between"
      )}
    >
      <img
        src={project.image.src}
        alt={project.image.alt}
        className="max-h-[200px] sm:max-h-[300px] md:max-w-[600px]"
      />
      <div
        className={classnames(
          "mt-4 space-y-2 md:space-y-5 mx-3",
          even ? "md:ml-6" : "md:mr-4"
        )}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase">
          {project.name}
        </h2>
        <p>{project.description}</p>
        {project.inDevelopment && (
          <p className="inline-block bg-red-200 text-red-800 p-2 rounded opacity-60">
            In development
          </p>
        )}
        <div className="flex flex-wrap uppercase">
          {project.keywords?.map((keyword) => (
            <span className="border-[1px] text-xs md:text-base border-gray-400 rounded-[10%] py-2 px-4 mr-2 mb-2">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
