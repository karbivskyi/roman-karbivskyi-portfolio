import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 befpre:hidden before:lg:black">
            What other people say
          </h2>
          <p className="subtitle">
            My clients are often satisfied with the quality of my work,
            sometimes we work on a regular basis
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
