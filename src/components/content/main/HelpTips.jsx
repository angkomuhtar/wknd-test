import Title from "components/Title";
import React, { useEffect, useState } from "react";
import HTCards from "components/HTCards";
import path3 from "image/Path3.svg";

const HelpTips = () => {
  const [data, setData] = useState([]);
  const getHelpTips = () => {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => {
        return res.json();
      })
      .then((tips) => {
        setData(tips);
      });
  };
  useEffect(() => {
    getHelpTips();
  }, []);

  return (
    <div className="container relative mb-28">
      <img
        src={path3}
        alt=""
        className="w-40 absolute hidden md:block top-0 right-0"
      />
      <Title value="Help & Tips" />
      <div className="grid md:grid-cols-3 mt-7 px-6 md:px-10 gap-1">
        {data &&
          data.map(({ id, title, slug, image }) => (
            <HTCards key={id} title={title} image={image} />
          ))}
      </div>
    </div>
  );
};

export default HelpTips;
