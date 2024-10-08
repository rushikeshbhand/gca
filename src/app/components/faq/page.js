'use client'

import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same FAQ is clicked
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="max-w-[92vw] lg:max-w-[55vw] mx-auto mt-10 mb-36">
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#6072FA] text-white border-[5px] border-[#E3ECF4]"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-medium ml-10">{item.question}</h3>

              {/* Container for the Rectangle and Vector images */}
              <span className="relative w-8 h-auto mr-3">
                <img
                  src="../assets/images/star.svg"
                  alt="Rectangle"
                  className="w-24 h-auto bg-white rounded-full p-2"
                />
              </span>
            </div>

            <div
              className={`faq-answer transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
              }`}
            >
              <p className="p-4 mr-10 ml-10">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'Many desktop publishing packages?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Many desktop publishing packages?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Many desktop publishing packages?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Many desktop publishing packages?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Many desktop publishing packages?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

export default Faq;
