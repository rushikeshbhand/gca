import Image from "next/image";
import Hero from "./components/hero/page";
import Achievements from "./components/achievements/page";
import About from "./components/about/page";
import SuccessRate from "./components/success-rate/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <About />
      <SuccessRate />
    </div>
  );
}
