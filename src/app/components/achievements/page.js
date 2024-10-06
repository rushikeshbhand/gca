import React from "react";
export default function Achievements() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-[#4F4D74] text-sm whitespace-nowrap justify-start lg:gap-2 my-14 mx-8" style={{fontWeight: ""}}>
      <div className="flex justify-center items-center gap-3">
        <img
          className="w-[4rem] sm:w-[6rem] lg:w-[7rem] h-auto"
          src="assets/images/just-dial.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <p className="text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">5 Stars on Just dial with 
        <br/> 200+ User reviews</p>
      </div>
      <div className="flex justify-center items-center gap-3 lg:ms-16">
        <img
         className="w-[2.5rem] lg:w-[3rem] h-auto"
          src="assets/images/abp.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <p className="text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">Abhinav Thakur on ABP
        <br/> Maza Interview</p>
      </div>
      <div className="flex justify-center items-center gap-3"> 
        <img
         className="w-[2.5rem] lg:w-[3rem] h-auto"
          src="assets/images/mced.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <p className="text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">MCED Certified 
        <br/> Company</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img
         className="w-[3rem] lg:w-[4rem] h-auto"
          src="assets/images/you-tube.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <p className="text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">10k+ YouTube Views</p>
      </div>
    </div>
  );
}
