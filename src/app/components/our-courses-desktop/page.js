'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurCoursesDesktop() {
  const [activeSlide, setActiveSlide] = useState(0);

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
          slidesToShow: 1, // Adjust to show fewer slides on smaller screens
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
            className={`flex flex-col mt-9 lg:-mt-3 p-4  text-center transition-all duration-300 ease-in-out ${
              activeSlide === index ? "scale-150" : "scale-110"
            }`}
          >
            <img
              src={course.icon}
              alt={course.title}
              className=" -mb-10 w-44 mx-auto h-64 flex justify-center "
            />

            <p className="text-base -mt-14 font-bold text-center">{course.title}</p>

            {activeSlide === index && (
              <>
                <p className="text-xs text-center">
                  It is a long established fact that a reader will be distracted.
                </p>
                <button className="mt-4 px-4 py-1 text-xs bg-[#16C6EC] text-white rounded-full">
                  KNOW MORE
                </button>
              </>
            )}
          </div>
        ))}
      </Slider>

      <div className="flex flex-row justify-center gap-7 -mt-[25px] lx:-mt-[60px]">
        {/* Left Arrow */}
        <button className="previous drop-shadow-2xl p-3 bg-white rounded-full" onClick={() => document.querySelector(".slick-prev").click()}>
          <IoIosArrowBack size={24} />
        </button>

        {/* Right Arrow */}
        <button className="next drop-shadow-2xl p-3 bg-white rounded-full" onClick={() => document.querySelector(".slick-next").click()}>
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next bg-slate-900`}
      style={{ ...style, display: "block", right: "0px" }} // Adjust right position
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev bg-slate-900`}
      style={{ ...style, display: "block", left: "0px" }} // Adjust left position
      onClick={onClick}
    />
  );
}
