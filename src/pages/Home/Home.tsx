import Banner from "../../components/Banner/Banner.tsx";
import FeaturedProducts from "./Featured/FeaturedProducts.tsx";
import WhyChooseEcoLife from "./WhyChoose/WhyChooseEcoLife.tsx";

const Home = () => {
  return (
    <section>
      <Banner />
      <WhyChooseEcoLife />
    <div className="mt-16">
      <FeaturedProducts/>
    </div>
    </section>
  );
};

export default Home;
