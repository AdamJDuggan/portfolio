import React from "react";
// Components
import ExternalLink from "../ExternalLink";
import Footer from "../Footer";
// Assets
import Bird from "../../assets/bird.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-800 text-white grid place-items-center "
    >
      <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 px-4 py-24">
        <div class="contact-img-container border-2 md:mr-6">
          <img src={Bird} alt="Bird" />
        </div>
        <ul className="grid space-y-4 sm:text-[20px] uppercase font-tusker text-center md:text-left">
          <ExternalLink
            link="https://github.com/AdamJDuggan"
            label="Github"
            className="jump"
          />
          <ExternalLink
            link="https://www.linkedin.com/in/adam-duggan-web-developer/"
            label="LinkedIn"
            className="jump"
          />
          <ExternalLink
            link="mailto:adamduggan@tutanota.com"
            label="adamduggan@tutanota.com"
            className="jump"
          />
        </ul>
      </div>
      <Footer />
    </section>
  );
}
