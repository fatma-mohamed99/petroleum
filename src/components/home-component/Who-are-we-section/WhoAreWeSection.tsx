"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function WhoAreWeSection() {
  const containerRef = useRef(null);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div
          className="row  
         min-w-full my-[1em] flex justify-center items-center gap-[2em]"
          key={i}
        >
          <div
            className="card card-left
          relative w-[400px] h-[300px]
          overflow-hidden
          will-change-transform
          rounded-lg shadow-md
          "
          >
            <Image
              src={`/images/hero-img/slider${1}.webp`}
              alt={`slideImage ${i}`}
              fill
              objectFit="cover"
              className="object-center"
            />
          </div>
          <div
            className="card card-right
            relative w-[400px] h-[300px]
          overflow-hidden
          will-change-transform
          rounded-lg shadow-md
          "
          >
            <Image
              src={`/images/hero-img/slider${1}.webp`}
              alt={`slideImage ${2 * i}`}
              fill
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const leftXValues = [-800, -900, -400];
      const rightXValues = [800, 900, 400];
      const leftRotationValues = [-30, -20, -35];
      const rightRotationValues = [30, 20, 35];
      const yValues = [100, -150, -400];

      gsap.utils.toArray(".row").forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");
        
        gsap.to(cardLeft, {
          x: leftXValues[index],
          y: yValues[index],
          rotation: leftRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
          },
        });
        
        gsap.to(cardRight, {
          x: rightXValues[index],
          y: yValues[index],
          rotation: rightRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
          },
        });
      });

      gsap.fromTo(".copy .line", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".main-content",
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
     
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="main
      relative
      w-full
      h-[200vh]
      flex justify-center items-center
      flex-col
      py-20
    "
    >
      <div
        className="main-content w-1/4 mx-auto absolute
        top-1/2 left-1/2 translate-x-[-50%] 
        translate-y-[-80%] bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
      >
        <div className="text-center">
          <p className="text-3xl font-bold mb-6 text-indigo-900 border-b border-indigo-300 pb-2">Who Are We</p>
        </div>
        <div className="copy max-w-2xl">
          <div className="line mb-5">
            <p className="text-slate-800 leading-relaxed font-medium">
              Over the years, <span className="text-indigo-700 font-semibold">Unico petroleum</span> developed a reputation across the
              region as a reliable provider of services in the Oil and Gas
              industry.
            </p>
          </div>

          <div className="line">
            <p className="text-slate-800 leading-relaxed font-medium">
              Its commitment to the <span className="text-indigo-600 italic">highest standards of quality, safety, and
              service level</span> has been evident in the variety of projects it has
              completed on time and within budget and continues to be at the
              heart of the company vision for the future.
            </p>
          </div>
        </div>
      </div>
      {generateRows()}
    </div>
  );
}

export default WhoAreWeSection;