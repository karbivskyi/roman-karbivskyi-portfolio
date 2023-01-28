import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { ChevronUpIcon } from "@heroicons/react/outline";
const BackToTopBtn = () => {
  const [show, setShow] = useState(false);
  const body = document.body,
    html = document.documentElement;

const DocumentHeight = Math.max( html.scrollHeight, html.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
const HalfDocumentHeight = DocumentHeight / 2;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return (window.scrollY > HalfDocumentHeight )
        ? setShow(true)
        : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-12 bottom-4 lg:bottom-24 cursor-pointer flex justify-center items-center transition-all hover:scale-125 duration-300"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopBtn;
