import Header from "../Header/Header";

import man from '../../assets/Man.png'
import { whyChoose } from "../../dev-data/whyChoose";

const WhyChooseEcoLife = () => {

const all = whyChoose();
console.log(all);

  return (
    <section className="mt-56 relative">
      <img src={man} alt="man-image" className="absolute -bottom-32" />
      <Header title="Why choose EcoLife?" />
      <div className="mt-16 grid grid-cols-4 gap-10">
        {/* card */}


      </div>
    </section>
  );
};

export default WhyChooseEcoLife;
