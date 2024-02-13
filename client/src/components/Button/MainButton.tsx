import  { FC } from "react";

interface MainButtonProps {
  value: string;
}

const MainButton: FC<MainButtonProps> = ({ value }): JSX.Element => {
  return (
    <button className="uppercase mt-8 lg:mt-12 bg-primary-color px-4 py-2 text-white lg:px-10 lg:py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-linear">
      {value}
    </button>
  );
};

export default MainButton;
