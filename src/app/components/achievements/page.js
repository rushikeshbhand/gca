import React from "react";

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 my-14 mx-8">
      <div className="flex justify-center">
        <img
          className="w-[13rem] lg:w-[29rem] h-auto"
          src="assets/images/just-dial.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
      </div>
      <div className="flex justify-center">
        <img
         className="w-[11rem] lg:w-[15rem] h-auto"
          src="assets/images/abp.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
      </div>
      <div className="flex justify-center"> 
        <img
         className="w-[8rem] lg:w-[11rem] h-auto"
          src="assets/images/mced.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
      </div>
      <div className="flex justify-center">
        <img
         className="w-[8rem] lg:w-[12rem] h-auto"
          src="assets/images/you-tube.svg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
      </div>
    </div>
  );
}
