import React from "react";
import { social } from "../data";
import Logo from "../assets/img/karbivskyi_roman_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12 w-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 item-center justify-start lg:w-1/3">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base hover:rotate-360 hover:transition-all hover:duration-500" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>

          <div className="mx-auto lg:w-full flex flex-col justify-center items-center">
            <img className="hover:scale-110 transition-transform duration-500" src={Logo} alt="" />
          </div>

          <p className="lg:w-1/3 lg:justify-end justify-center items-center text-center lg:text-left">&copy; {new Date().getFullYear()} Karbivskyi Roman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
