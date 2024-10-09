import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function OurCoursesDesktop() {
  // State to track the currently active (centered) slide
  const [activeSlide, setActiveSlide] = useState(1);

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

  const slideLeft = () => {
    setActiveSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setActiveSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto pb-10 hidden lg:block justify-center text-[#4F4D74]">
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 p-2 bg-white rounded-full shadow-md z-10"
          onClick={slideLeft}
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Slider */}
        <div className="flex justify-center items-center overflow-hidden w-full">
          <div className="flex transition-transform duration-500 ease-in-out">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex flex-col p-4 text-center transform transition-transform duration-500 ease-in-out ${
                  activeSlide === index ? "scale-125" : "scale-100"
                }`}
                style={{ width: "300px" }} // Adjust as needed
              >
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-60 h-60 mx-auto mb-4"
                />
                <p className="text-lg font-bold">{course.title}</p>
                {activeSlide === index && (
                  <>
                    <p className="text-xs text-center mt-2">
                      A brief description about {course.title}.
                    </p>
                    <button className="mt-4 px-4 py-2 text-sm bg-[#16C6EC] text-white rounded-full">
                      KNOW MORE
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 p-2 bg-white rounded-full shadow-md z-10"
          onClick={slideRight}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}
