import React from "react";

export default function OurCoursesMobile() {
  return (
    <div className="my-20 text-[#4F4D74]">
      {/* common code  */}
      <div className="text-center mx-auto max-w-[80vw]">
        <h2 className="text-4xl lg:text-5xl">Our Courses</h2>
        <p>
          We offer precisely what you seek for your child - training programs,
          mathematical skills, <br/> memory retention, and holistic personal
          development
        </p>
      </div>

      {/* mobile view  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:hidden">
        <div className="flex flex-col items-center">
          <div>
            <img src="assets\images\teacher-training.svg" alt="Teacher Training"/>
          </div>
          <div className="-mt-8 text-xl lg:text-3xl">Teacher Training</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img src="assets\images\abacus.svg" alt="Abacus" />
          </div>
          <div className="-mt-8 text-xl">Abacus</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img src="assets\images\mid-brain-activation.svg" alt="Mid Brain Activation" />
          </div>
          <div className="-mt-8 text-xl">Mid Brain Activation</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img src="assets\images\hand-writing.svg" alt="Hand Writing" />
          </div>
          <div className="-mt-8 text-xl">Hand Writing</div>
        </div>
      </div>
    </div>
  );
}
