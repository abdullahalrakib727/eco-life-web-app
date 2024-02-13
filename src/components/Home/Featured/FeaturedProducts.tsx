import { FC } from "react";
import Header from "../../shared/Header/Header";
import { Products } from "../../../dev-data/featuredProductData";
import Button from "../../Button/Button";

const FeaturedProducts: FC = (): JSX.Element => {
  const AllProducts = Products;

  return (
    <section className="relative mt-16">
      <Header title="Featured Products" />
      {/* overlay */}
      <div className="absolute left-0 -z-20 xs:translate-x-5  translate-y-32 base:translate-x-8 md:translate-y-28 md:translate-x-5 lg:translate-y-24 lg:translate-x-3 xl:translate-y-16">
        <img
          className="max-w-[100px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[232px] xl:max-h-[273px]"
          src="/left.png"
          alt=""
        />
      </div>
      <div className="absolute right-0 -z-20 xs:-translate-x-5 translate-y-20 base:-translate-x-8  md:translate-y-5 md:-translate-x-5 lg:-translate-y-5 lg:-translate-x-3 xl:-translate-y-20">
        <img
          className="max-w-[100px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[232px] xl:max-h-[273px]"
          src="/right.png"
          alt=""
        />
      </div>
      {/* main content */}
      <div className="mt-28 grid grid-cols-1  md:grid-cols-3 gap-16 p-16">
        {AllProducts.map((product) => (
          <div
            className="max-w-[413px] max-h-[612px] overflow-hidden"
            key={product.id}
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
              <div className="flex gap-2 lg:gap-4 items-center">
                <p className=" text-lg lg:text-2xl font-extrabold">
                  {product.discountedPrice} Rs.
                </p>
                <p className="text-base lg:text-lg font-bold">
                  {product.price} Rs.
                </p>
              </div>
              <a href="#" className="text-lg font-normal underline">
                {" "}
                {product.reviewsNumber} reviews
              </a>
            </div>
            <div className="text-center mt-5">
              <Button value="Buy Now" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
