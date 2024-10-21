import React from "react";

export default function Reviews() {
  return (
    <div className="flex flex-row relative top-28 m-auto ps-5 py-8 max-h-[12rem] sm:max-h-[15rem] rounded-2xl border-8 border-white items-start gap-4 mt-8 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[60vw] bg-[#FF7A73] text-white">
      {/* <div className="w-40 h-40 bg-[#FFCD1A] rounded-full border-8 border-emerald-50"></div> */}
      <div className="w-[12rem] h-[7rem] flex items-center justify-center">
        <img src="/assets/images/review-background-circle.svg" alt="yellow background" className=""/>
      </div>
      <div className="flex justify-start">
        <div className="overflow-auto pb-6">
          <div className="flex flex-row gap-5">
            <p className="text-xs md:text-lg whitespace-nowrap">Arnavi Patil</p>
            <img src="/assets/images/stars.svg" alt="stars" className="w-28" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted by <br/>
            the readable content of a page
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="py-2 px-6 rounded-full text-white"></button>
        <button className="py-2 px-6 rounded-full text-white"></button>
      </div>
    </div>
  );
}
