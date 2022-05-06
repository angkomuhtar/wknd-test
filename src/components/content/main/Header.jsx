import React from "react";
import userLogo from "image/Bitmap.png";
import robot from "image/robot.png";
import robot2 from "image/robot2.png";
import BlueDot from "image/BlueDot.svg";

const header = () => {
  return (
    <div
      className="bg-no-repeat bg-top"
      style={{ backgroundImage: "url(/bg_1.svg)" }}
    >
      <div className="bg-white">
        <div className="flex py-[17px] container px-6">
          <img src={userLogo} alt="" className="w-[33px]" />
          <div className="ml-3 flex flex-col justify-center">
            <p className="font-normal text-xs leading-[14px]">Good Morning</p>
            <h1 className="text-gray-600 font-bold text-base leading-4">
              Fellas
            </h1>
          </div>
        </div>
      </div>

      <div className="container py-5 px-6">
        <h1 className="text-[52px] uppercase text-white font-black leading-[51px] text-center mt-[47px] md:mt-16">
          weekend from home
        </h1>
        <p className="text-[21px] text-white italic font-semibold mt-5 text-center">
          Stay active with a little workout.
        </p>
        <div className="flex flex-col justify-center items-center mt-[67px] relative">
          <img src={robot} alt="" className="h-[305px]" />
          <button className="bg-white w-[231px] capitalize font-normal text-base leading-[18px] py-5 text-center rounded-full absolute bottom-[47px] shadow-[0_20px_30px_rgba(249, 131, 171, 0.5)]">
            let's Go
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={robot2} alt="" className="w-[159px]" />
      </div>
      <div className="container px-8 flex flex-col items-center mt-16 max-w-content">
        <p className="text-right font-medium leading-6 ">
          <span className="font-bold text-[#0B24FB]">Deffinition;</span> a
          practice or exercise to test or improve one's fitness for athletic
          competition, ability, or performance to exhaust (something, such as a
          mine) by working to devise, arrange, or achieve by resolving
          difficulties. Merriam-Webster.com Dictionary.
        </p>
        <p className="w-full text-right text-white text-xl font-semibold leading-6 mt-5 italic">
          -weekend team
        </p>
      </div>
      <div className="container flex justify-start px-12 py-9">
        <img src={BlueDot} alt="" className="mt-0.5 mb-14" />
      </div>
    </div>
  );
};

export default header;
