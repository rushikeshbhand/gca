import React from "react";
import Image from "next/image";

export default function OurCoursesMobile() {
  return (
    <div id="our-courses" className="my-20 text-[#4F4D74]">
      {/* common code  */}
      <div className="text-center lg:max-h-[30px] mx-auto max-w-[80vw]">
        <h2 className="mb-3 text-4xl lg:text-5xl">Our Courses</h2>
        <p>
          We offer precisely what you seek for your child - training programs,
          mathematical skills, <br /> memory retention, and holistic personal
          development
        </p>
      </div>

      {/* mobile view  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:hidden">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src="assets\images\teacher-training.svg"
              alt="Teacher Training"
              width={260}
              height={260}
            />
          </div>
          <div className="-mt-8 text-xl lg:text-3xl">Teacher Training</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <Image
              src="assets\images\abacus.svg"
              alt="Abacus"
              width={260}
              height={260}
            />
          </div>
          <div className="-mt-8 text-xl">Abacus</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <Image
              src="assets\images\mid-brain-activation.svg"
              alt="Mid Brain Activation"
              width={260}
              height={260}
            />
          </div>
          <div className="-mt-8 text-xl">Mid Brain Activation</div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <Image
              src="assets\images\hand-writing.svg"
              alt="Hand Writing"
              width={260}
              height={260}
            />
          </div>
          <div className="-mt-8 text-xl">Hand Writing</div>
        </div>
      </div>
    </div>
  );
}
