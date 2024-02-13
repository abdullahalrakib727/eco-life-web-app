import { FC } from "react";
import Header from "../../shared/Header/Header";
import { Products } from "../../../dev-data/featuredProductData";

const FeaturedProducts: FC = (): JSX.Element => {
  const AllProducts = Products;

  return (
    <section className="relative mt-16">
      <Header title="Featured Products" />
      {/* overlay */}
      <div className="absolute left-0 -z-20  translate-y-32 base:translate-x-8 md:translate-y-28 md:translate-x-5 lg:translate-y-24 lg:translate-x-3 xl:translate-y-16">
        <img
          className="max-w-[100px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[232px] xl:max-h-[273px]"
          src="/left.png"
          alt=""
        />
      </div>
      <div className="absolute right-0 -z-20 translate-y-20 base:-translate-x-8  md:translate-y-5 md:-translate-x-5 lg:-translate-y-5 lg:-translate-x-3 xl:-translate-y-20">
        <img
          className="max-w-[100px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[232px] xl:max-h-[273px]"
          src="/right.png"
          alt=""
        />
      </div>
      {/* main content */}
      <div className="mt-28 grid grid-cols-1  md:grid-cols-3 gap-16 p-16">
        {AllProducts.map((product, index) => (
          <div
            className="max-w-[413px] max-h-[612px] overflow-hidden"
            key={index}
          >
            <img
              src={product.image}
              alt="product-image"
              className="w-[380px] xl:h-[451px] object-contain hover:scale-105 duration-300 transition-all"
            />
            <h1 className="mt-5 text-[#36B281] text-2xl font-semibold">
              {product.name}
            </h1>
            {/* text description */}
            <div className="flex justify-between mt-3 items-center">
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-extrabold">
                  {product.discountedPrice} Rs.
                </p>
                <p className="text-lg font-bold">{product.price} Rs.</p>
              </div>
              <a href="#" className="text-lg font-normal border-b border-black">
                {" "}
                {product.reviewsNumber} reviews
              </a>
            </div>
            <div className="text-center mt-5">
              <button className="inline-block text-center w-[164px] h-[42px] bg-[#2BAE7A] text-white px-7 py-2 mx-auto shadow-lg transition-all hover:scale-105 duration-300 border-b-4  rounded-md hover:bg-green-700 ">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20 flex items-center">
        <div className="border-b-[1px] border-[#A6C1D1] w-[calc(50%-82px)]"></div>
        <button className="inline-block text-center w-[164px] h-[42px] bg-[#6C8B76] text-white px-7 py-2 mx-auto shadow-lg transition-all hover:scale-105 duration-300 border-b-4 border-gray-400 rounded-md hover:bg-green-700">
          Explore More
        </button>
        <div className="border-b-[1px] border-[#A6C1D1] w-[calc(50%-82px)]"></div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
