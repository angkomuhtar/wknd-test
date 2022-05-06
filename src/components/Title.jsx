import React from "react";

const Title = ({ value }) => {
  return (
    <h3 className="font-black text-white text-3xl md:text-center px-6">
      {value}
    </h3>
  );
};

export default Title;
