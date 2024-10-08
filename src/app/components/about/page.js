import React from "react";

export default function About() {
  return (
    <div>
      <div
        className="min-h-[96vh] bg-no-repeat flex md:pb-[5rem]"
        style={{
          backgroundImage: "url(assets/images/about-background.svg)",
        }}
      >
        <div className="container flex flex-col md:flex-row gap-4 md:gap-11 mt-10 md:mt-16 p-4">
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src="assets/images/about.png"
              alt="about image"
              className="max-h-[30em] md:max-h-[40em] object-cover"
            />
          </div>
          <div className="mt-10 md:mt-0 w-full md:w-[50%]">
            <div className="text-[#4F4D74] flex flex-col gap-8 md:gap-12">
              <div className="flex flex-row md:flex-row gap-5 items-center">
                <img
                  src="assets/images/about-start-img.svg"
                  alt="about image"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <p className="text-left md:text-left">
                  India Book <br /> of Record Company
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="flex justify-start text-2xl md:text-3xl lg:text-6xl font-extrabold text-center md:text-left">
                  Who we are?
                </h1>
                <p className="text-sm md:text-base lg:text-lg whitespace-wrap lg:max-w-[40vw]">
                  We Genius Champs Academy, a privately owned company
                  specializing in providing multiple brain development courses.
                  Our offerings cater to students, educators, and anyone seeking
                  professional development opportunities. Our mission is to
                  empower women by offering employment opportunities right at
                  their doorstep.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-7 text-sm lg:text-base">
                <div className="flex gap-4 md:gap-6">
                  <img
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                  />
                  <p>Qualified Instructor</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <img
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                  />
                  <p>Franchise Option</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <img
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                  />
                  <p>Quality Education</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <img
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                  />
                  <p>Women Empowerment</p>
                </div>
              </div>

              <div className="flex justify-start md:justify-start">
                <button className="py-2 px-12 rounded-full bg-[#16C6EC] text-white">
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
