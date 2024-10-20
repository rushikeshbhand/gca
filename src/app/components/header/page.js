"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const getLinkStyle = (navItem) =>
    activeNav === navItem
      ? "bg-[#E2EBF4] text-[#4F4D74] rounded-3xl px-4 py-2"
      : "px-4 py-2 ";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex gap-12 sm:gap-40 text-[#4F4D74] items-center w-full p-4 lg:px-20 justify-between lg:justify-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/assets/images/gca-logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 md:w-24"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-row items-center gap-4">
        <ul className="flex gap-3 list-none items-center text-lg">
          <li>
            <Link href="/" className={getLinkStyle("Home")} onClick={() => handleNavClick("Home")}>
              Home
            </Link>
          </li>
          <Image src="/assets/images/list-style.png" alt="separator" width={6} height={6} />
          <li>
            <Link
              href="/components/contact-us"
              className={getLinkStyle("Our Courses")}
              onClick={() => handleNavClick("Our Courses")}
            >
              Our Courses
            </Link>
          </li>
          <Image src="/assets/images/list-style.png" alt="separator" width={6} height={6} />
          <li>
            <Link
              href="/components/exam-portal"
              className={getLinkStyle("Exam Portal")}
              onClick={() => handleNavClick("Exam Portal")}
            >
              Exam Portal
            </Link>
          </li>
          <Image src="/assets/images/list-style.png" alt="separator" width={6} height={6} />
          <li>
            <Link
              href="/components/join-our-team"
              className={getLinkStyle("Join Our Team")}
              onClick={() => handleNavClick("Join Our Team")}
            >
              Join Our Team
            </Link>
          </li>
        </ul>

        <button className="bg-[#6173FD] text-white px-7 py-2 rounded-3xl ms-8 ring ring-[#E2EBF4]">
          BOOK FREE DEMO
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="flex lg:hidden items-center gap-4">
        <button className="bg-[#6173FD] text-white text-sm px-7 py-2 rounded-3xl">
          BOOK FREE DEMO
        </button>
        <button onClick={toggleMenu} className="text-4xl text-[#6173FD]">
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-10 left-0 w-full bg-white lg:hidden mt-8 z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/components/contact-us" className="hover:text-blue-600">
                Our Courses
              </Link>
            </li>
            <li>
              <Link href="/components/exam-portal" className="hover:text-blue-600">
                Exam Portal
              </Link>
            </li>
            <li>
              <Link href="/components/join-our-team" className="hover:text-blue-600">
                Join Our Team
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
