// Import the CSS module
import styles from "./infinite-slider.module.css";
import Image from "next/image";

export default function InfiniteSlider() {
  return (
    <div className="relative h-24 my-24 md:mt-6 md:mb-24 max-w-[98vw] mx-auto">
      {/* Shadow effect container */}
      <div className="relative h-full w-full transform -rotate-3 overflow-x-hidden overflow-y-auto">
        <div
          className={`${styles["slider-text"]} flex items-center gap-4 space-x-8 md:space-x-16 whitespace-nowrap w-[200%] bg-[#6072FA] py-2 md:py-3 px-4 md:px-5 border border-y-8 border-[#f7f7f8]`}
        >
          <div className="flex flex-row gap-11">
            {/* First Set of Slide Items */}
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />
              <div className="text-xs md:text-base">Child Development</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />
              <div className="text-xs md:text-base">Career Opportunities</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Women Empowerment</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Qualified Instructor</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Boosts Brainpower</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Expert Guidance</div>
            </div>

            {/* Duplicated Slide Items */}
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Child Development</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Career Opportunities</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Women Empowerment</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />{" "}
              <div className="text-xs md:text-base">Qualified Instructor</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />
              <div className="text-xs md:text-base">Boosts Brainpower</div>
            </div>
            <div className="text-white flex items-center gap-1 md:gap-2">
              <Image
                src="assets/images/slider-star-img.svg"
                alt="star"
                width={500}
                height={500}
              />
              <div className="text-xs md:text-base">Expert Guidance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
