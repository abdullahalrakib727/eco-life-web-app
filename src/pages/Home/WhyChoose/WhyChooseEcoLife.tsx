import man from "../../../assets/Man.png";
import React, { FC } from "react";
import Header from "../../../components/shared/Header/Header";
import { data } from "../../../dev-data/whyChoose";

type pros = React.ReactNode;

const WhyChooseEcoLife: FC = (): JSX.Element => {
  
  const all = data;

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
      {/* card section */}
      <div className="mt-20 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1280px] mx-auto">
        {/* card */}
        {all.map(
          (data, index): pros => (
            <div
              key={index}
              className="flex flex-col max-h-[350px]  items-center"
            >
              <div className=" mb-5 flex justify-center items-center overflow-hidden">
                <img
                  src={data.image}
                  alt="image"
                  className="rounded-full h-[110px] w-[110px] shadow-md object-cover"
                  style={{ boxShadow: "0px 0px 10px 1px #D6F7E7" }}
                />
              </div>
              <h1 className="text-[#2BAE7A] text-2xl max-w-[241px] font-semibold text-center mb-2 h-[69px]">
                {data.heading}
              </h1>
              <p className="text-xl font-light max-w-[273px] text-center text-[#8F9779] max-h-[135px]">
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
