import React from "react";

const TestiCard = ({ by, desc }) => {
  return (
    <div className="p-5 bg-white h-full self-stretch">
      <h3 className="font-black text-3xl mb-5 leading-9">{by}</h3>
      <p className="font-normal text-xs leading-[14px]">{desc}</p>
    </div>
  );
};

export default TestiCard;
