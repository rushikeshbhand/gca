import React from "react";
import { GrInstagram } from "react-icons/gr";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BiLogoYoutube } from "react-icons/bi";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="top-footer bg-[#6173FD] max-w-[100vw] mt-10 min-w-[100vw] text-white">
        <div className="max-w-[50vw] ms-3 md:ms-36 pt-11">
          <div className="flex flex-row justify-between items-center py-6">
            <div className="bg-white p-2 rounded-md">
              <img
                src="assets/images/gca-logo.svg"
                alt="footer-logo"
                className="w-16"
              />
            </div>

            <div className="social-media md:flex flex-row hidden ">
              <a href="https://www.facebook.com/geniuschampsacademy">
                {/* <PiFacebookLogoBold className="text-3xl text-white" /> */}
                <img src="assets/images/facebook.svg" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/genius_champs_academy/">
                {/* <GrInstagram className="text-3xl text-white" /> */}
                <img src="assets/images/instagram.svg" alt="instagram" />
              </a>
              <a href="https://www.facebook.com/geniuschampsacademy">
                {/* <TiSocialLinkedinCircular className="text-3xl text-white" /> */}
                <img src="assets/images/linkedin.svg" alt="linkedin" />
              </a>
              <a href="https://youtube.com/@geniuschampsacademy">
                {/* <BiLogoYoutube className="text-3xl text-white" /> */}
                <img src="assets/images/youtube.svg" alt="youtube" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <ul className="flex flex-col md:flex-row gap-3 lg:gap-16">
              <li className="first-list-item">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Exam Portal</a>
              </li>
              <li>
                <a href="#">Join Our Team</a>
              </li>
            </ul>
          </div>

          <div className="contact-data flex md:flex-row flex-col justify-end gap-2 md:gap-14 py-8">
            <a href="">
              <p>+1234567890</p>
            </a>
            <a href="">
              <p>dummymail@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="boy relative">
          <img
            src="assets/images/footer-boy.svg"
            alt="footer-boy"
            className="md:w-48 absolute right-5 lg:right-44 -bottom-24 md:-bottom-20 lg:-bottom-16 w-48 h-[auto]"
          />
        </div>
      </div>
      <div className="bottom-footer bg-[#5161E8] text-white max-w-[90vw] min-w-[100vw] py-7">
        <div className="max-w-[50vw] ms-3 md:ms-36 flex gap-3 md:gap-0 flex-col-reverse md:flex-row md:justify-between">
          <p>2023 All Rights Reserved</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
