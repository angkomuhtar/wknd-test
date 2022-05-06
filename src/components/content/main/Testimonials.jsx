import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import TestiCard from "components/TestiCard";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import "swiper/css";
// import "swiper/css/navigation";
import Title from "components/Title";

const Testimonials = () => {
  const { innerWidth: screenWidth } = window;
  const buttonPrev = useRef(null);
  const buttonNext = useRef(null);
  const [data, setData] = useState();

  const getTesti = () => {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => {
        return res.json();
      })
      .then((testi) => {
        setData(testi);
      });
  };

  useEffect(() => {
    getTesti();
  }, []);
  return (
    <div className="mb-16 container">
      <Title value="Testimonials" />
      <div className="relative flex justify-center">
        <div
          ref={buttonPrev}
          className="bg-white h-8 w-8 p-[10px] rounded-full cursor-pointer hidden md:block self-center mr-6"
        >
          <HiArrowLeft size={12} />
        </div>
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: buttonPrev.current,
            nextEl: buttonPrev.current,
          }}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          slidesPerView={screenWidth > 690 ? 2.4 : 1.4}
          className="max-w-content mx-0"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = buttonPrev.current;
            swiper.params.navigation.nextEl = buttonNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {data &&
            data.map(({ by, testimony, id }) => (
              <SwiperSlide key={id}>
                <TestiCard by={by} desc={testimony} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          ref={buttonNext}
          className="bg-white h-8 w-8 p-[10px] rounded-full cursor-pointer hidden md:block self-center ml-6"
        >
          <HiArrowRight size={12} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
