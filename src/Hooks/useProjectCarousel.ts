"use client";

import { useEffect, useState } from "react";


export function useProjectCarousel(totalProjects :number, autoRotateInterval = 5000) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

 const handleNextProject = () => {
    if (activeProjectIndex === totalProjects - 1) {
      setActiveProjectIndex(0);
    } else {
      setActiveProjectIndex((prev) => prev + 1);
    }
  };

  const handlePrevProject = () => {
    if (activeProjectIndex === 0) {
      setActiveProjectIndex(totalProjects - 1);
    } else {
      setActiveProjectIndex((prev) => prev - 1);
    }
  };

  const handleActiveProject = (indexOfActiveProject: number) => {
    setActiveProjectIndex(indexOfActiveProject);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextProject();
    }, autoRotateInterval);

    return () => clearInterval(intervalId);
  }, [activeProjectIndex, autoRotateInterval]);

  return {
    activeProjectIndex,
    isSmallScreen,
    handleNextProject,
    handlePrevProject,
    handleActiveProject
  };
}
