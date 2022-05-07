import React from "react";
import { HiArrowRight } from "react-icons/hi";

const HTCards = ({ title, image }) => {
  return (
    <div className="relative">
      <img src={image} alt="" />
      <div className="flex w-full justify-between items-center absolute px-6 py-4 bg-black bg-opacity-50 bottom-0 border-0">
        <p className="text-base leading-[18.75px] text-white font-bold">
          {title}
        </p>
        <div className="bg-white h-8 w-8 p-[10px] rounded-full cursor-pointer self-center ml-6 hover:translate-x-1 duration-500">
          <HiArrowRight size={12} />
        </div>
      </div>
    </div>
  );
};

export default HTCards;
