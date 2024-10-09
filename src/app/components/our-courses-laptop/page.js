import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function OurCoursesLaptop() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const courses = [
    {
      title: "Teacher Training",
      icon: "/assets/images/teacher-training.svg", // Update the path as per your assets
    },
    {
      title: "Abacus",
      icon: "/assets/images/abacus.svg",
    },
    {
      title: "Mid Brain Activation",
      icon: "/assets/images/mid-brain-activation.svg",
    },
    {
      title: "Hand Writing",
      icon: "/assets/images/hand-writing.svg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container overflow-hidden">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <div className='h-64 w-64 bg-red-800'>lorem</div>
        </div>
        <div key={2}>
          <h3>2</h3>
        </div>
        <div key={3}>
          <h3>3</h3>
        </div>
        <div key={4}>
          <h3>4</h3>
        </div>
      </Slider>
      <div
        style={{ textAlign: "center" }}
        className="flex flex-row justify-center -mt-16 gap-6"
      >
        <button
          className="button p-2 bg-white rounded-full drop-shadow-xl z-10"
          onClick={previous}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="button p-2 bg-white rounded-full drop-shadow-xl z-10"
          onClick={next}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}

export default OurCoursesLaptop;
