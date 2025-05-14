"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionContainer from "@/components/styles-wrappers/SectionContainer";

function WhoAreWeSection() {
  const containerRef = useRef(null);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 2; i++) {
      rows.push(
        <div
          className="row  
         min-w-full  flex justify-center items-center  "
          key={i}
        >
          <div
            className="card card-left
          relative w-[300px] h-[300px]
          overflow-hidden
          will-change-transform
           shadow-md
           border-secondary  border-2
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
            relative w-[300px] h-[250px]
          overflow-hidden
          will-change-transform
           shadow-md
                      border-secondary  border-2

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

      const leftXValues = [-500, -600];
      const rightXValues = [500, 600 ];
      const leftRotationValues = [-30, -30 ];
      const rightRotationValues = [30, 30];
      const yValues = [100, -50];

      gsap.utils.toArray(".row").forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        gsap.to(cardLeft, {
          x: leftXValues[index],
          y: yValues[index],
          rotation: leftRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "5% bottom",
            end: "120% bottom",
            scrub: true,
          },
        });

        gsap.to(cardRight, {
          x: rightXValues[index],
          y: yValues[index],
          rotation: rightRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "5% bottom",
            end: "120% bottom",
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        ".copy .line",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".main-content",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer title={"Who Are We"} description={""}>
      <div
        ref={containerRef}
        className="main
      relative
      w-full
       flex justify-center items-center
      flex-col
      
    "
      >
        <div
          className="main-content w-2/4 mx-auto absolute
        top-1/2 left-1/2 translate-x-[-50%] 
        translate-y-[-50%] bg-main/30 backdrop-blur-sm  "
        >
  
          <div className="copy max-w-5xl">
            <div className="line mb-5">
              <p className="text-textColor leading-relaxed font-medium">
                Over the years,
                <span
                  className="text-textColor/80 font-semibold
              "
                >
                  Unico petroleum
                </span>
                developed a reputation across the region as a reliable provider
                of services in the Oil and Gas industry.
              </p>
            </div>

            <div className="line">
              <p className="text-textColor leading-relaxed font-medium">
                Its commitment to the
                <span className="text-main mx-0.5 ">
                  highest standards of quality, safety, and service level
                </span>
                has been evident in the variety of projects it has completed on
                time and within budget and continues to be at the heart of the
                company vision for the future.
              </p>
            </div>
          </div>
        </div>
        {generateRows()}
      </div>
    </SectionContainer>
  );
}

export default WhoAreWeSection;
