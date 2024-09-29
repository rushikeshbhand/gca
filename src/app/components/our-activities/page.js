"use client";

import React, { useState } from "react";

export default function OurActivities() {
  // State to track which tab is selected
  const [selectedTab, setSelectedTab] = useState("youtube");

  // Function to render the content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "youtube":
        return (
          <div className="flex justify-center items-top h-full">
            {/* Embed a YouTube video */}
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/ERCMXc8x7mc?si=NGIcwHTC1xUd1PNi"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
      case "ourChamps":
        return (
          <div className="flex justify-center items-center h-ful">
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/OgS1ZWZItno?si=9VKPKbENHyLn3RwC"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
      case "achievements":
        return (
          <div className="flex justify-center items-center h-ful">
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/c2jdVw5-mpE?si=D4sWeX1jOTN6BuWz"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
      case "photoGallery":
        return (
          <div className="flex justify-center items-center h-ful">
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/OgS1ZWZItno?si=9VKPKbENHyLn3RwC"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
      case "essentials":
        return (
          <div className="flex justify-center items-center h-ful">
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/c2jdVw5-mpE?si=D4sWeX1jOTN6BuWz"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center h-full">
            <iframe
              width="750"
              height="360"
              src="https://www.youtube.com/embed/qYNweeDHiyU?si=FcbbLqqnudYuP7wl"
              title="YouTube video player"
              className="rounded-xl border-8 border-[white] drop-shadow-2xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        );
    }
  };

  return (
    <div className="root max-w-[77vw] mx-auto my-20">
      <div className="flex gap-11 justify-start items-center">
        <img
          src="assets\images\our-activities-logo.svg"
          alt="our activities logo"
          className="w-[6rem]"
        />
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#4F4D74] font-extrabold">
          Our Activities
        </h2>
      </div>

      <div className="flex flex-col  items-center lg:items-start lg:flex-row text-lg whitespace-nowrap mt-5 md:text-xl lg:text-xl text-[#4F4D74] font-extrabold">
        {/* Left side tabs */}
        <div className=" p-4">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => setSelectedTab("youtube")}
              className={`cursor-pointer ${
                selectedTab === "youtube"
                  ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] py-1 px-11 bg-[#E2EBF4] text-center lg:max-w-[15vw]"
                  : "max-w-[15vw] px-11 text-center"
              }`}
            >
              YouTube
            </li>
            <li
              onClick={() => setSelectedTab("ourChamps")}
              className={`cursor-pointer ${
                selectedTab === "ourChamps"
                  ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] px-11 py-1 bg-[#E2EBF4] text-center lg:max-w-[15vw]"
                  : "lg:max-w-[15vw] px-11 text-center"
              }`}
            >
              Our Champs
            </li>
            <li
              onClick={() => setSelectedTab("achievements")}
              className={`cursor-pointer ${
                selectedTab === "achievements"
                  ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] px-11 py-1 bg-[#E2EBF4] text-center lg:max-w-[15vw]"
                  : "lg:max-w-[15vw] px-11 text-center"
              }`}
            >
              Achievements
            </li>
            <li
              onClick={() => setSelectedTab("photoGallery")}
              className={`cursor-pointer ${
                selectedTab === "photoGallery"
                  ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] px-11 py-1 bg-[#E2EBF4] text-center lg:max-w-[15vw]"
                  : "lg:max-w-[15vw] px-11 text-center"
              }`}
            >
              Photo Gallery
            </li>
            <li
              onClick={() => setSelectedTab("essentials")}
              className={`cursor-pointer ${
                selectedTab === "essentials"
                  ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] px-11 py-1 bg-[#E2EBF4] text-center lg:max-w-[15vw]"
                  : "lg:max-w-[15vw] px-11 text-center"
              }`}
            >
              Essentials
            </li>
          </ul>
        </div>

        {/* Right side content */}
        <div className="w-3/4 p-4">
          <div className="min-w-full">
            {/* Render content based on selected tab */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
