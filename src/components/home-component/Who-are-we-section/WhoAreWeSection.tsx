"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionContainer from "@/components/styles-wrappers/SectionContainer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhoAreWeSection = () => {
  const containerRef = useRef(null);
  const textBoxRef = useRef(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useGSAP(() => {
    // Set initial position for all images (above their final position, off-screen)
    gsap.set(imagesRef.current, {
      opacity: 0,
      y: -200,
      scale: 1
    });

    // Create animation timeline triggered by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation starts when the top of the section is 70% from the top of the viewport
        end: "top 40%",   // Animation ends when the top of the section is 30% from the top of the viewport
        scrub: 0,         // Smooth scrubbing effect tied to scroll position
        toggleActions: "play none none reverse" // Play on enter, reverse on leave
      }
    });

    // Add each image to the timeline with a staggered effect
    tl.to(imagesRef.current, {
      opacity: 1,
      y: 0,            // Move to final position
      scale: 1.1,        // Scale to final size
      ease: "power3.out", // Easing function
    });

    // Animate text box separately
    gsap.fromTo(
      textBoxRef.current,
      {

        scale: 0.9,
        y: 50
      },
      {

        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <SectionContainer
      title={"Who Are We"}
      description={""}
      sectionClass="w-full bg-main/65 text-center "
    >
      <div className="mx-auto w-full relative md:min-h-[600px] " ref={containerRef}>
        {/* Top Left Image */}
        <div
          ref={addToRefs}
          className="absolute z-1 top-0 left-0 w-32 h-32 md:w-70 md:h-70 border-secondary/70 border-2"
        >
          <Image
            src="/images/hero-img/slider1.jpg"
            alt="Oil rig"
            fill
            className="object-cover shadow-md"
            priority
          />
        </div>

        {/* Top Right Image */}
        <div
          ref={addToRefs}
          className="absolute z-1 top-0 right-0 w-32 h-32 md:w-70 md:h-70 border-secondary/70 border-2"
        >
          <Image
            src="/images/hero-img/slider1.jpg"
            alt="Oil workers"
            fill
            className="object-cover shadow-md"
            priority
          />
        </div>

        {/* Bottom Left Image */}
        <div
          ref={addToRefs}
          className="absolute z-1 bottom-0 left-0 w-32 h-32 md:w-70 md:h-70 border-secondary/70 border-2"
        >
          <Image
            src="/images/hero-img/slider1.jpg"
            alt="Petroleum tank"
            fill
            className="object-cover shadow-md"
            priority
          />
        </div>

        {/* Bottom Right Image */}
        <div
          ref={addToRefs}
          className="absolute z-1 bottom-0 right-0 w-32 h-32 md:w-70 md:h-70 border-secondary/70 border-2"
        >
          <Image
            src="/images/hero-img/slider1.jpg"
            alt="Refinery"
            fill
            className="object-cover shadow-md"
            priority
          />
        </div>

        {/* Text Box */}
        <div
          ref={textBoxRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     min-w-[600px] text-white bg-main/90 backdrop-blur-sm p-6  
                      z-10 will-change-transform  border-secondary/70 border-2"
        >
          <div className="text-lg md:text-xl">
            <p className="leading-relaxed font-medium text-justify">
              For over two decades,
              <span className="text-secondary font-semibold mx-1">
                Unico Petroleum
              </span>
              has established itself as the premier provider of specialized
              services across the Oil and Gas industry throughout the region,
              earning the trust of major industry players.

              Our unwavering dedication to
              exceptional quality standards, rigorous safety protocols, and
              unparalleled service excellence
              is demonstrated through our impressive portfolio of projects
              delivered precisely on schedule and within budgetary
              constraints. This commitment remains the cornerstone of our
              corporate vision as we continue to innovate and lead the
              industry forward.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhoAreWeSection;
