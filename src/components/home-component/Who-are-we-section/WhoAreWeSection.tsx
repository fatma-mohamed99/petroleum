"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionContainer from "@/components/styles-wrappers/SectionContainer";

function WhoAreWeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Array<{x: number, y: number, rotation: number, scale: number}>>([]);
  
  const generateGridPositions = (count: number, columns = 3, spacingX = 500, spacingY = 800) => {
    const positions = [];
    
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / columns);
      const col = i % columns;

      const x = (col - (columns - 1) / 2) * spacingX;
      const y = (row - 0.5) * spacingY;

      positions.push({
        x,
        y,
        rotation: Math.random() * 10 - 5, 
        scale: 0.9 + Math.random() * 0.2,  
      });
    }
    
    return positions;
  };

  useEffect(() => {
    setPositions(generateGridPositions(6));
  }, []);

  const generateCards = () => {
    if (positions.length === 0) return null;
    
    return positions.map((pos, i) => (
      <div
        key={i}
        className={`card card-${i} absolute w-[200px] h-[300px] md:w-[250px] md:h-[350px] overflow-hidden will-change-transform shadow-lg border-secondary border-2 rounded-lg transition-all duration-300 hover:z-10 hover:scale-105`}
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg) scale(${pos.scale})`,
          zIndex: 1,
        }}
      >
        <Image
          src={`/images/hero-img/slider${(i % 6) + 1}.jpg`}
          alt={`Slide image ${i + 1}`}
          fill
          sizes="(max-width: 768px) 200px, 250px"
          style={{ objectFit: "cover" }}
          className="object-center brightness-90 hover:brightness-100 transition-all duration-300"
          priority={i < 3} 
        />
      </div>
    ));
  };

  useGSAP(
    () => {
      if (positions.length === 0) return;

      gsap.registerPlugin(ScrollTrigger);

  
      gsap.fromTo(
        ".copy .line",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainContentRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      
    },
    { scope: containerRef, dependencies: [positions] }
  );

  return (
    <SectionContainer
      title={"Who Are We"}
      description={""}
      containerClass="main"
      sectionClass="bg-main/5 w-full overflow-hidden"
    >
      <div
        ref={containerRef}
        className="relative w-full flex justify-center flex-col min-h-[800px] md:min-h-[1000px] py-12"
      >
        {/* Background cards */}
        {generateCards()}

        {/* Content overlay */}
        <div
          ref={mainContentRef}
          className="main-content w-full md:w-2/3 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-white/80 p-6 md:p-10 rounded-xl z-10 shadow-xl"
        >
          <div className="copy max-w-5xl text-lg md:text-xl text-justify">
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
      </div>
    </SectionContainer>
  );
}

export default WhoAreWeSection;