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

    const progressAnimation = gsap.fromTo(
      progressRef.current,
      { width: "0%" },
      {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        descRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        contentRef.current?.children || [],
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
      progressAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden text-textColor
         pt-10 pb-20 min-h-screen   mx-auto ${sectionClass}`}
    >

      <div className={`container mx-auto px-6 max-w-6xl ${containerClass} pt-10`}>
        <div
          className="
        w-full h-1 z-50"
        >
          <div
            ref={progressRef}
            className={`h-full bg-gradient-to-r bg-secondary`}
            style={{ width: "0%" }}
          />
        </div>
        <div className="mb-12">
          <div className="overflow-hidden text-4xl md:text-5xl">
            <h2 ref={titleRef} className={` font-bold mb-6 text-main `}>
              {title}
            </h2>
          </div>

          <div className="overflow-hidden">
            <p
              ref={descRef}
              className={`  text-lg md:text-xl leading-relaxed text-opacity-80`}
            >
              {description}
            </p>
          </div>
        </div>

        <div ref={contentRef} className="flex-1 flex flex-col ">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
