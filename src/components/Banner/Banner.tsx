import { FC } from "react";
import bannerImg from "../../assets/banner.png";
import leafImg from "../../assets/leaf.png";
import Lottie from "react-lottie-player";

import "./Banner.css";

import butterFlyAnimation from "./butterfly.json";

const Banner: FC = (): JSX.Element => {
  return (
    <section className="mt-20 px-2">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center ">
        {/* texts */}
        <div className="relative">
          <h1 className="font-playFairDisplay font-primary font-black text-4xl md:text-6xl">
            Welcome to EcoLife
          </h1>

          <img
            className="absolute xs:right-10 md:right-0 lg:right-12 xl:-right-10 -top-12 -translate-y-2"
            src={leafImg}
            alt="leaf-image"
          />

          <p className="font-primary text-2xl md:text-3xl lg:text-4xl mt-8">
            Your Journey to a
          </p>
          <p className="font-secondary text-2xl md:text-3xl lg:text-4xl mt-2">
            Sustainable Lifestyle
          </p>
          <p className="font-primary text-2xl md:text-3xl lg:text-4xl mt-2">
            Starts Here.
          </p>
          <p className="font-primary mt-10 mb-6 lg:mb-2">
            Browse our curated selection of eco-friendly
            <br />
            products and make every purchase count
          </p>
          <button className="uppercase mt-8 lg:mt-12 bg-[#2BAE7A] px-4 py-2 text-white lg:px-10 lg:py-4 rounded-lg hover:bg-[#D2B48C] transition duration-300 ease-linear">
            Shop Now
          </button>

          <div className="absolute translate-y-4 md:bottom-8 md:left-24 lg:left-36 lg:bottom-14 xl:left-36 xl:bottom-14 2xl:bottom-14 2xl:left-36 butter-fly">
            <div className="rotate-[-45deg]">
              <Lottie
                loop
                animationData={butterFlyAnimation}
                play
                style={{ width: 80, height: 80 }}
              />
            </div>
          </div>
        </div>

        {/* image */}
        <div className="hidden md:flex">
          <img src={bannerImg} alt="banner-image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
