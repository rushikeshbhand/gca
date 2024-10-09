'use client'
import Image from "next/image";
import Hero from "./components/hero/page";
import Achievements from "./components/achievements/page";
import About from "./components/about/page";
import SuccessRate from "./components/success-rate/page";
import OurCoursesMobile from "./components/our-courses-mobile/page";
import OurCoursesDesktop from "./components/our-courses-desktop/page";
import InfiniteSlider from "./components/infinite-slider/page";
import JoinUsNow from "./components/join-us-now/page";
import OurActivities from "./components/our-activities/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      <SuccessRate />
      <OurCoursesMobile />
      <OurCoursesDesktop />
      <InfiniteSlider />
      <JoinUsNow />
      <OurActivities />
    </div>
  );
}
