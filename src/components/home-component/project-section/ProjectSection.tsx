"use client";

import SectionContainer from "@/components/styles-wrappers/SectionContainer";
import CardWithAnimatedBorder from "@/components/ui/card/card";
import { projects } from "@/consts/projects";
import { DecimalsArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function ProjectSection() {
  const shortProjectsArray = projects.slice(0, 4);
  const [showAll, setShowAll] = useState(false);
  const [animating, setAnimating] = useState(true);
  const arrowRef = useRef(null);
  const cardsRef = useRef([]);
  const additionalCardsRef = useRef([]);
  const sectionRef = useRef(null);

  const handleShow = () => {
    if (animating) return;

    setAnimating(true);

    if (!showAll) {
      setShowAll(true);
    } else {
      animateOut().then(() => {
        setShowAll(false);
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            animating:true,
          });
        }, 100);
      });
    }
  };

  const animateOut = () => {
    return new Promise((resolve) => {
      const additionalCards = additionalCardsRef.current.filter(card => card);

      const columns = [];
      const cardsPerColumn = Math.ceil(additionalCards.length / 4);

      for (let i = 0; i < 4; i++) {
        columns.push(additionalCards.slice(i * cardsPerColumn, (i + 1) * cardsPerColumn));
      }

      const totalCards = additionalCards.length;
      let completedAnimations = 0;

      columns.forEach((column, colIndex) => {
        column.forEach((card, cardIndex) => {
          gsap.to(card, {
            y: cardIndex % 2 === 0 ? -40 : 40,
            opacity: 0,
            duration: 0.3,
            delay: (3 - colIndex) * 0.3 + (column.length - 1 - cardIndex) * 0.11,
            ease: "power2.in",
            onComplete: () => {
              completedAnimations++;
              if (completedAnimations === totalCards) {
                resolve();
                setAnimating(false);
              }
            }
          });
        });
      });

      if (totalCards === 0) {
        resolve();
        setAnimating(false);
      }
    });
  };

  useGSAP(() => {
    const arrow = arrowRef.current;
    if (arrow) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(arrow, {
        x: 3,
        duration: 0.3,
        ease: "power1.inOut",
      }).to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  });

  useGSAP(() => {
    const cards = cardsRef.current.filter(card => card);

    gsap.set(cards, { clearProps: "all" });

    gsap.set(cards, {
      opacity: 0,
      y: (i) => i % 2 === 0 ? -50 : 50
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: (i) => i * 0.3,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        setAnimating(false);
      }
    });
  }, []);


  const animateMainCards = () => {
    const cards = cardsRef.current.filter(card => card);

    gsap.set(cards, { opacity: 0, y: (i) => i % 2 === 0 ? -50 : 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: (i) => i * 0.3,
      ease: "power1.out",
      stagger: 0.2,
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showAll && cardsRef.current.length > 0) {
        animateMainCards();
      }
    }, 60000); // 

    return () => clearInterval(interval);
  }, [showAll]);


  useEffect(() => {
    if (showAll) {
      const additionalCards = additionalCardsRef.current.filter(card => card);

      const columns = [];
      const cardsPerColumn = Math.ceil(additionalCards.length / 4);

      for (let i = 0; i < 4; i++) {
        columns.push(additionalCards.slice(i * cardsPerColumn, (i + 1) * cardsPerColumn));
      }

      gsap.set(additionalCards, { clearProps: "all" });

      gsap.set(additionalCards, {
        opacity: 0,
        y: (i) => i % 2 === 0 ? -50 : 50
      });

      columns.forEach((column, colIndex) => {
        column.forEach((card, cardIndex) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: colIndex * 1.2 + cardIndex * 0.5,
            ease: "power1.out",
            onComplete: () => {
              if (colIndex === columns.length - 1 && cardIndex === column.length - 1) {
                setAnimating(false);
              }
            }
          });
        });
      });
    }
  }, [showAll]);

  const showingProjects = showAll ? projects : shortProjectsArray;

  const assignCardRef = (element, index, isAdditional) => {
    if (isAdditional) {
      additionalCardsRef.current[index - shortProjectsArray.length] = element;
    } else {
      cardsRef.current[index] = element;
    }
  };

  return (
    <div className="w-full pt-20" ref={sectionRef}>
      <SectionContainer
        containerClass="max-w-[75%] 3xl:max-w-[70%] "
        sectionClass="min-w-full"
        title={"Unico projects"}
        description={`With 20+ years in Oil & Gas, 
        UNICO has delivered 25+ projects across the Levant region, specializing in storage tanks, pipelines,
        and pumping stations with international standards`}
      >
        <div className="relative -z-50">
          <div className="absolute inset-0 right-0 bg-main/10 -mr-[590px] -mt-[330px]">
            <Image
              src="/bgfinal.png"
              alt="Legacy Background"
              width={1000}
              height={2000}
              priority
              className="object-cover ml-[860px] 3xl:ml-[1100px] opacity-20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-9 gap-y-14 w-full mt-12 my-10">
          {showingProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => assignCardRef(el, index, index >= shortProjectsArray.length)}
            >
              <CardWithAnimatedBorder
                imageUrl={project.image.src}
                title={project.title}
                description={project.shortDesc}
                altText={project.title}
                className="w-full h-[30rem]"
                targetPath={`/projects/${project.id}`}
              />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-2 md:text-lg lg:text-xl">
          <button
            className="flex outline-0 gap-1 text-secondary cursor-pointer border-b-2 border-transparent hover:border-secondary transition-all duration-300"
            onClick={handleShow}
            disabled={animating}
          >
            {showAll ? "Show less" : "Show more"}
            <span ref={arrowRef}>
              <DecimalsArrowRight />
            </span>
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}

export default ProjectSection;