import React from "react";
import { Link } from "react-scroll";

// import image
import Image from "../assets/img/zal.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            src={Image}
            className="object-cover h-full w-[566px] md:auto lg:mx-0 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Roman Karbivskyi
              </h2>
              <p className="mb-4 text-accent">Freelance Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-2">
                I am constantly improving physically and mentally. I try to
                carry out projects as professionally and qualitatively as
                possible.
              </p>
              <p className="mb-8">
                If you need to create a new website, or you have an interesting
                job offer, you are welcome
              </p>
            </div>
            <Link
              smooth={true}
              duration={500}
              to='contact'
              className="btn btn-md bg-accent hover:bg-accent-hover transition-all cursor-pointer hover:scale-110 duration-500"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
