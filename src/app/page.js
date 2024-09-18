import Image from "next/image";
import Hero from "./components/hero/page"
import Achievements from "./components/achievements/page"
export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements/>
    </div>
  );
}
