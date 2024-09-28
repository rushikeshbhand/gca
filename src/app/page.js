import Image from "next/image";
import Hero from "./components/hero/page";
import Achievements from "./components/achievements/page";
import About from "./components/about/page";
import SuccessRate from "./components/success-rate/page";
import OurCourses from "./components/our-courses/page";
import InfiniteSlider from "./components/infinite-slider/page";
// import JoinUsNow from "./components/join-us-now/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      <SuccessRate />
      <OurCourses />
      <InfiniteSlider/>
      {/* <JoinUsNow /> */}
    </div>
  );
}
