"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface SectionContainerProps {
  title: string;
  description: string;
  progressColors?: string;
  titleSize?: string;
  descriptionSize?: string;
  sectionClass?: string;
  containerClass?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  description,
  sectionClass = "",
  containerClass = "",
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const progress = progressRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const children = contentRef.current?.children || [];

    if (!section || !progress || !title || !desc) return;

    gsap.fromTo(
      progress,
      { width: "0%" },
      {
        width: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", 
          end: "bottom bottom",  
          scrub:0,          
          onLeaveBack: () => {  
            gsap.to(progress, {
              width: "0%",
              ease: "power1.inOut"
            });
          }
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse", 
      },
    });

    tl.from(title, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        desc,
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        children,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden text-textColor pt-15 pb-25 mx-auto ${sectionClass}`}
    >
      <div className={`container mx-auto px-6 max-w-6xl ${containerClass} pt-10`}>
        {/* Enhanced Progress Bar */}
        <div className="w-full h-1 z-50 bg-gray-200 overflow-hidden mb-8 rounded-full">
          <div
            ref={progressRef}
            className="h-full bg-secondary transition-all duration-300 rounded-full"
            style={{ width: "0%" }}
          />
        </div>

        {/* Title & Description */}
        <div className={`${description === "" ? "mb-0" : "mb-12"}`}>
          <div className="overflow-hidden text-4xl md:text-5xl">
            <h2 ref={titleRef} className="font-bold mb-6 text-main ml-4">
              {title}
            </h2>
          </div>
          <div className="overflow-hidden">
            <p
              ref={descRef}
              className="text-lg md:text-xl leading-relaxed text-opacity-80 ml-4"
            >
              {description}
            </p>
          </div>
        </div>

        <div ref={contentRef} className="flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;