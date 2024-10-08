import React from "react";

export default function GetInTouch() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-5 my-7 text-[#4F4D74]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl">Get in Touch</h2>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Contact Number Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4]">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <img
                src="../assets/images/phone.svg"
                alt="phone icon"
                className="rounded-md w-14 h-14 p-3 bg-[#74D997]"
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Contact Number</h3>
          <p className="text-gray-500 mt-2">+91 0000 000 000</p>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4]">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <img
                src="../assets/images/mail.svg"
                alt="mail icon"
                className="rounded-md w-14 h-14 p-3 bg-[#17C7EE]"
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Mail</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
            mymail@gmail.com
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4]">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <img
                src="../assets/images/mape.svg"
                alt="mape icon"
                className="rounded-md w-14 h-14 p-3 bg-[#EDD93C]"
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Address</h3>
          <p className="text-gray-500 mt-2">24, Durgesh address for me dummy</p>
        </div>
      </div>
    </section>
  );
}
