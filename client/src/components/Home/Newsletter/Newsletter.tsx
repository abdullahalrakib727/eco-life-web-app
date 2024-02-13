import { FC } from "react";
import MainButton from "../../Button/MainButton";
import { MdEmail } from "react-icons/md";

const Newsletter: FC = (): JSX.Element => {
  return (
    <section className="mt-16 my-20 relative">
      <div className="absolute -z-30 -left-11">
        <img src="/left.png" alt="" className="max-w-60" />
      </div>

      <div className="max-w-[1086px] max-h-[579px] mx-auto bg-[#D6F7E7] h-screen rounded-2xl px-20 py-16">
        <div className="max-w-[930px] max-h-[430px] bg-white flex">
          {/* image */}
          <div className="w-1/2">
            <img src="/news.png" alt="" />
          </div>
          {/* form */}
          <div className="w-1/2">
            <form className="flex flex-col items-center px-10">
              <h1 className="mt-7 text-2xl font-bold">
                "Stay Green & Informed!"
              </h1>
              <p className="mt-4 text-center text-base font-normal">
                Join Our Newsletter for Eco-Tips, Exclusive Offers, and
                Sustainability Stories Delivered to Your Inbox. No spam we
                promise :p
              </p>
              <label htmlFor="Email" className="relative">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="border border-secondary-color mt-9 w-[379px] h-[52px] pl-10  py-2 rounded-lg"
                />
                <div className="absolute top-1/2 translate-y-3 left-4 text-secondary-color">
                  <MdEmail />
                </div>
              </label>
              <MainButton value="SUBSCRIBE" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
