import React from "react";

export default function SuccessRate() {
  return (
    <div className="container flex flex-col items-center gap-5 mt-16">
      <div>
        <p className="text-center text-4xl lg:text-5xl text-[#4F4D74]">
          100% Success Rate
        </p>
      </div>
      <div className="w-full max-w-[95vw] md:max-w-[70vw] lg:max-w-[74vw]">
        <img
          src="assets/images/success-rate.svg"
          alt="success rate img"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}
