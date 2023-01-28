import React from "react";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary h-min">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block ">My latest work</h2>
            <p className="subtitle">In this case, I have collected my latest and greatest projects, some projects are not included in this list</p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
