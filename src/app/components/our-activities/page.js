"use client"; // Mark the component as a Client Component

import React, { useEffect, useState } from "react";

const videos = [
  "DX3sbFEWF0k", // Replace with your video IDs
  "Dny79edv0Uk",
  "suVseOqBIZs",
  "JEaWu3XJx9A"
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function OurActivities() {
  const [selectedTab, setSelectedTab] = useState("youtube");
  const [shuffledVideos, setShuffledVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray([...videos]);
    setShuffledVideos(shuffled);
  }, []);

  const renderContent = () => {
    const currentVideoId = videos[0];
    const embedUrl = `https://www.youtube.com/embed/${currentVideoId}`;
    switch (selectedTab) {
      case "youtube":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl border-4 border-white drop-shadow-2xl"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "ourChamps":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/suVseOqBIZs?si=iz4J6tBgtgyNY1DQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "achievements":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/R03RroVowqY?si=9grzy0FtVOFySG1_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "photoGallery":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-[18rem] rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/OgS1ZWZItno?si=9VKPKbENHyLn3RwC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/qYNweeDHiyU?si=FcbbLqqnudYuP7wl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
    }
  };

  return (
    <div className="root max-w-[75vw] mx-auto -mt-52">
      <div className="flex gap-5 justify-start items-center">
        <img
          src="assets/images/our-activities-logo.svg"
          alt="our activities logo"
          className="w-16 sm:w-20 md:w-24"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#4F4D74] font-extrabold">
          Our Activities
        </h2>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row text-sm sm:text-lg lg:text-xl text-[#4F4D74] font-extrabold mt-5">
        <div className="p-4">
          <ul className="flex flex-col gap-3 lg:gap-8">
            {["youtube", "ourChamps", "achievements", "photoGallery"].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer px-4 py-2 text-center ${
                  selectedTab === tab
                    ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] bg-[#E2EBF4]"
                    : ""
                }`}
              >
                {tab.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase())}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 h-full mt-5 lg:mt-0">{renderContent()}</div>
      </div>
    </div>
  );
}
