import Banner from "../../components/Banner/Banner.tsx";
import Header from "../../components/Header/Header.tsx";
import man from '../../assets/Man.png'

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="mt-56 relative">
        <img src={man} alt="man-image" className="absolute -bottom-32" />
        <Header title="Why choose EcoLife?" />
      </section>
    </div>
  );
};

export default Home;
