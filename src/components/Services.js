import React from "react";
import ReadMore from "./ReadMore";
import { services } from "../data";

const Services = () => {
  return (
    <section
      id="services"
      className="section bg-tertiary transition-all duration-1000"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What my clients is get:
          </h2>
          <p className="subtitle">
            The correct selection of the solution and its high-quality and quick
            implementation
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 h-auto">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div
                className="bg-secondary p-6 rounded-2xl h-min transition-height ease-in duration-4000"
                key={index}
              >
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-12 text-[28px]">
                  <div className="hover:rotate-180 transition-all duration-500">
                    {icon}
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <ReadMore length={100} className="transition-height duration-4000 ease-in">{description}</ReadMore>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
