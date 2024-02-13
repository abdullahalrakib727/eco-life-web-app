import { FC } from "react";
import Banner from "../../components/Home/Banner/Banner.tsx";
import FeaturedProducts from "../../components/Home/Featured/FeaturedProducts.tsx";
import WhyChooseEcoLife from "../../components/Home/WhyChoose/WhyChooseEcoLife.tsx";

const Home: FC = (): JSX.Element => {
  return (
    <main>
      <Banner />

      <WhyChooseEcoLife />

      <FeaturedProducts />

      <div className="h-screen">
        para
      </div>
    </main>
  );
};

export default Home;
