import Header from "../Header/Header";

import man from "../../assets/Man.png";
import { whyChoose } from "../../dev-data/whyChoose";
import React from "react";

type pros = React.ReactNode;

const WhyChooseEcoLife = () => {
  const all = whyChoose();

  return (
    <section>
      <div className="mt-10 md:mt-56 relative">
        <Header title="Why choose EcoLife?" />
        <img
          src={man}
          alt="man-image"
          className="hidden md:flex absolute md:-bottom-20 lg:"
        />
      </div>
      <div className="mt-20 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1280px] mx-auto">
        {/* card */}
        {all.map(
          (data, index): pros => (
            <div key={index} className="flex flex-col h-full justify-center items-center">
            <div className="rounded-full mb-5 border border-[#D6F7E7FF] h-[110px] w-[110px] flex justify-center items-center overflow-hidden">
              <img src={data.image} alt="image" className= "rounded-full object-contain h-[70px] w-[68px]" />
            </div>
            <h1 className="text-[#2BAE7A] text-2xl font-semibold text-center mb-2 h-16 leading-tight">
              {data.heading}
            </h1>
            <p className="text-xl font-light text-center text-[#8F9779] h-16 leading-snug">
              {data.description}
            </p>
          </div>
          
          )
        )}
      </div>
    </section>
  );
};

export default WhyChooseEcoLife;
