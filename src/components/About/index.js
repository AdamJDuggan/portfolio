// React
import React from "react";
// Components
import ExternalLink from "../ExternalLink";
// Assets
import Me from "../../assets/me.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-primary text-gray-800 grid place-items-center overflow-x-hidden"
    >
      <h3 className="text-2xl py-1 px-2 border-b-[0.5px] border-gray-700 mb-6 w-full">
        ABOUT
      </h3>
      <div className="container px-4 py-4 md:py-24 md:text-[20px]">
        <div className="grid gap-8 md:grid-cols-3 mb-24 items-center">
          <div className="md:col-span-2 space-y-4 text-[18px] md:text-2xl">
            <p>
              I have had the privalige of working for the NHS, a small tech
              start-up and an established web development agency. I really enjoy
              working in the javascript ecosystem and have commercial experience
              with the major framewoks (Angular, Node.js, React, Vue).
            </p>
            <p>
              I love building utilities (helper functions, custom middlware,
              Sass mixins and hooks) which I can reuse across projects.
            </p>
            <p>
              My approach is 'relationships first'; I beleive that great
              relationships and communication with colleagues and clients are
              the foundation of sucessfull projects.
            </p>
          </div>
          <div className="relative w-80  md:ml-12">
            <div className="me-img-overlay" />
            <img src={Me} alt="Me" />
            <div />
          </div>
        </div>
        <div className="pb-24">
          <h3 className="pt-1 text-2xl mb-4">
            WEB APPS I HAVE HELPED TO BUILD...
          </h3>
          <div className="flex space-x-9">
            <div className="w-auto grid gap-2">
              <div className="font-bold">Project</div>
              <ExternalLink
                className="underline"
                link="https://brandstencil.com/"
                label="Brandstencil"
              />
              <ExternalLink
                className="underline"
                link="https://www.kindeo.com/"
                label="Kindeo"
              />
              <ExternalLink
                className="underline"
                link="https://www.practiceunbound.org.uk/"
                label="Practice Unbound"
              />
              <ExternalLink
                className="underline"
                link="https://www.gruup.io/"
                label="Gruup"
              />
            </div>
            <div className="grid gap-2">
              <div className="font-bold">Role</div>

              <span>Laravel Developer</span>
              <span>Javascript Developer</span>
              <span>Node.js Developer</span>
              <span>React Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
