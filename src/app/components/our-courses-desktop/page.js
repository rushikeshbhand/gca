import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurCoursesDesktop() {
  // State to track which slide is active
  const [activeSlide, setActiveSlide] = useState(1);

  const courses = [
    {
      title: "Teacher Training",
      icon: "assets/images/teacher-training.svg", // Replace with your icon paths
    },
    {
      title: "Abacus",
      icon: "assets/images/abacus.svg",
    },
    {
      title: "Mid Brain Activation",
      icon: "assets/images/mid-brain-activation.svg",
    },
    {
      title: "Hand Writing",
      icon: "assets/images/hand-writing.svg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container min-h-[40vw] mx-auto pb-10 hidden lg:block justify-center text-[#4F4D74]">
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 -mx-10 text-center transition-all duration-300 ease-in-out ${
              activeSlide === index ? "scale-150" : "scale-110"
            }`}
          >
            <img
              src={course.icon}
              alt={course.title}
              className="pl-9 xl:pl-20 -mb-10 w-60 h-60 flex justify-center items-end"
            />

            <p className="text-base font-bold text-center">{course.title}</p>

            {activeSlide === index && (
              <>
                <p className="text-xs text-center">
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <button className="mt-4 px-4 py-1 text-sm bg-[#16C6EC] text-white rounded-full">
                  KNOW MORE
                </button>
              </>
            )}
          </div>
        ))}
      </Slider>

      {/* <div className="flex flex-row justify-center gap-7">
        <button className="previous drop-shadow-2xl p-3 bg-white rounded-full">
          <IoIosArrowBack className="size-6"/>
        </button>
        <button className="next drop-shadow-2xl p-3 bg-white rounded-full">
          <IoIosArrowForward className="size-6"/>
        </button>
      </div> */}
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next bg-slate-900`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
