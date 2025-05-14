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
    for (let i = 1; i <=3; i++) {
      rows.push(
        <div
          className="row  
         min-w-full  flex justify-center items-start gap-2 "
          key={i}
        >
          <div
            className="card card-left
          relative w-[250px] h-[250px]
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
          relative w-[250px] h-[250px]
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

      const leftXValues = [-500, -400,-300];
      const rightXValues = [500, 400,300];
      const leftRotationValues = [-15, -15,-15];
      const rightRotationValues = [15, 15,15];
      const yValues = [100, 0,-50];

      gsap.utils.toArray(".row").forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        gsap.to(cardLeft, {
          x: leftXValues[index],
          y: yValues[index],
          rotation: leftRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            scrub: true,
          },
        });

        gsap.to(cardRight, {
          x: rightXValues[index],
          y: yValues[index],
          rotation: rightRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
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
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer
      title={"Who Are We"}
      description={""}
      containerClass="main"
      sectionClass="bg-main/5 w-full"
    >
      <div
        ref={containerRef}
        className="
      relative
      w-full
       flex justify-center  
       flex-col
       min-h-96
      
    "
      >
        <div
          className="main-content w-3/7 mx-auto absolute
                     top-1/2 left-1/2 translate-x-[-50%]  
                     translate-y-[-50%]  backdrop-blur-sm p-8 "
        >
          <div className="copy max-w-5xl text-lg  text-justify">
            <div className="line mb-6">
              <p className="text-textColor leading-relaxed font-medium">
                For over two decades,
                <span className="text-main font-semibold mx-1">
                  Unico Petroleum
                </span>
                has established itself as the premier provider of specialized
                services across the Oil and Gas industry throughout the region,
                earning the trust of major industry players.
              </p>
            </div>

            <div className="line">
              <p className="text-textColor leading-relaxed font-medium">
                Our unwavering dedication to
                <span className="text-main mx-1 font-semibold">
                  exceptional quality standards, rigorous safety protocols, and
                  unparalleled service excellence
                </span>
                is demonstrated through our impressive portfolio of projects
                delivered precisely on schedule and within budgetary
                constraints. This commitment remains the cornerstone of our
                corporate vision as we continue to innovate and lead the
                industry forward.
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
