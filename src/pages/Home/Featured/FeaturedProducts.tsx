import { FC } from "react";
import Header from "../../../components/shared/Header/Header";
import { Products } from "../../../dev-data/featuredProductData";

const FeaturedProducts: FC = (): JSX.Element => {
  const AllProducts = Products;

  return (
    <section>
      <Header title="Featured Products" />
      <div className="mt-14 grid grid-cols-1  md:grid-cols-3 gap-16 p-5">
        {AllProducts.map((product, index) => (
          <div className="max-w-[413px] max-h-[612px]" key={index}>
            <img
              src={product.image}
              alt="product-image"
              className="w-[380px] lg:h-[451px] object-contain"
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
              <p className="text-lg font-normal">
                {" "}
                {product.reviewsNumber} reviews
              </p>
            </div>
            <div className="text-center mt-5">
              <button className="inline-block text-center w-[164px] h-[42px] bg-[#2BAE7A] text-white px-7 py-2 mx-auto shadow-lg transition-all hover:scale-105 duration-300 border-b-4 border-black rounded-md hover:bg-green-700">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <button className="inline-block text-center w-[164px] h-[42px] bg-[#6C8B76] text-white px-7 py-2 mx-auto shadow-lg transition-all hover:scale-105 duration-300 border-b-4 border-gray-400 rounded-md hover:bg-green-700">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
