import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center">
      {/* <h1 className="text-3xl text-center font-bold absolute">We Spark Your Thinking</h1>
      <p className="text-lg text-center absolute top-44 flex gap-9">
      <h2> <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img> India Book of Record Holder Company</h2>
      <h2>Qualified Instructor</h2>
      </p> */}
      <img src="assets/images/hero-text.svg" className="absolute z-50 mt-12 top-24 sm:mb-0 lg:text-8xl max-w-[86vw] sm:max-w-max lg:min-w-[40rem]" alt="Girl in a jacket" width="500" height="600"></img>
      <div
        className="hero-section relative bg-center bg-contain bg-no-repeat mt-28 md:mt-10 
                   h-[20rem] w-full 
                   sm:h-[40rem] sm:w-[40rem]
                   lg:min-h-[50rem] lg:min-w-[50rem]"
        style={{
          backgroundImage: "url(assets/images/hero-section-background.svg)",
        }}
      ></div>
    </div>
  );
}
