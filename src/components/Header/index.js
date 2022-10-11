import React from "react";

export default function Header() {
  return (
    <header className="header bg-primary text-gray-800 flex flex-col items-center text-[18px]">
      <div className="flex flex-col container  z-50 h-full p-3 md:p-5 min-h-[90vh]">
        <nav className="flex space-x-3 sm:space-x-5 md:space-x-5 text-[22px] sm:text-1xl md:text-[28px] md:justify-end mb-24 md:mb-12">
          <a className="jump" href="#work">
            Work
          </a>
          <a className="jump" href="#about">
            About
          </a>
          <a className="jump" href="#contact">
            Contact
          </a>
        </nav>
        <div className="">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[150px] mb-6 md:mb-8">
            FULL
            <br />
            STACK
            <br />
            DEVELOPER
          </h1>

          <p className="sm:text-[20px] md:text-2xl">
            I am a Web Developer based in Brighton, UK. This is a portfolio of
            things I have built.
          </p>
        </div>
        <a
          href="#work"
          className="mt-auto text-right sm:text-[20px] md:text-2xl"
        >
          Latest work &#9662;
        </a>
      </div>
    </header>
  );
}
