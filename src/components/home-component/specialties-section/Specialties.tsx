"use client"
import React, { useState, useEffect } from "react";
import SpecialtyCard from "./SpecialtyCard";
import { specialties } from "@/consts/specialties";

function Specialties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const totalCards = specialties.length;



  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);





  const getVisibleSpecialties = () => {
    const visible = [];

    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalCards;
      visible.push(specialties[index]);
    }

    return visible;
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, currentIndex]);

  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  return (
    <div className="py-10">
      <p className="text-header-lg  w-full text-center font-medium flex items-center justify-center">
        Our Specialties
      </p>

      <p className="text-desc-lg leading-relaxed text-center mb-15 mt-5 max-w-2xl mx-auto  font-normal text-textColor">
        We offer a wide range of engineering specialties tailored to meet the needs of the oil and gas industry with precision and innovation.
      </p>
      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-2">
          <div className="flex justify-center items-stretch transition-transform duration-500 ease-in-out">
            <div className="flex justify-center gap-4 w-full">
              {getVisibleSpecialties().map((specialty, idx) => (
                <div
                  key={`${specialty.title}-${idx}`}
                  className="md:w-[40%] xl:w-1/3 sm:w-2/3 w-[95%] flex-shrink-0 flex flex-col"
                >
                  <SpecialtyCard
                    cardData={specialty}
                    isMiddle={idx === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-3 flex-wrap">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-main" : "bg-gray-300"
                }`}
              aria-label={`View ${specialty.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialties;