import React from "react";

export default function SuccessRate() {
  return (
    <div className="container flex flex-col items-center gap-5 px-4">
      <div>
        <p className="text-center text-2xl md:text-[40px] lg:text-[50px] font-extrabold text-[#4F4D74]">
          100% Success Rate
        </p>
      </div>
      <div className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[74vw]">
        <img
          src="assets/images/success-rate.svg"
          alt="success rate img"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}
