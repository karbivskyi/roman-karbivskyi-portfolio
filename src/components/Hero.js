import React from "react";
import ManImg from "../assets/img/man2.avif";
import { Link } from "react-scroll";
import Typist from "react-typist";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex item-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden justify-start"
    >
      <div className="container mx-auto h-screen py-8">
        <div className="flex flex-row items-around pt-8 h-full lg:justify-around">
          <div className="flex-1 flex flex-col items-center lg:items-start lg:justify-around">
          <Typist avgTypingDelay={60} cursor={{hideWhenDone: true, show: false, blink: true}} className="flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px] sm:pt-14">Hello :) I'm Roman ✌️
              <Typist.Delay ms={500} />
            </p>
            <h1 className="text-4x1 leading-[44px] md:text5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                I Build & Support <br />WordPress <Typist.Backspace count={10} delay={500} />React JS <Typist.Backspace count={9} delay={500} />October CMS <Typist.Backspace count={12} delay={500} />Modx <Typist.Backspace count={5} delay={500} />Opencart Websites<Typist.Backspace count={17} delay={800} />Websites
                <Typist.Delay ms={500} />
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-23 max-w-[480px] text-lg text-center lg:text-left">
              I like to challenge myself and complete complex projects
            </p>
            <Link
              smooth={true}
              duration={500}
              to="contact"
              className="w-fit btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer"
            >
              Work with me
            </Link>
            </Typist>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center h-full">
            <img src={ManImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
