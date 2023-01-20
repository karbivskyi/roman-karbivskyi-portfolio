import React from "react";

//import brands data
import { brands } from "../data";

export const Brands = () => {
  return (
    <section className="min-h-[146px]  bg-tertiary flex items-center ">
      <div className="container mx-auto flex xs:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <a href={brand.href} target="_blank" rel="noopener noreferrer"> 
                <img className="scale-75 sm:scale-100" src={brand.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
