import { useEffect, useState, useCallback } from "react";

export function useProjectCarousel(totalProjects: number, autoRotateInterval = 5000) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const handleNextProject = useCallback(() => {
    setActiveProjectIndex(prev => (prev === totalProjects - 1 ? 0 : prev + 1));
  }, [totalProjects]);

  const handlePrevProject = useCallback(() => {
    setActiveProjectIndex(prev => (prev === 0 ? totalProjects - 1 : prev - 1));
  }, [totalProjects]);

  const handleActiveProject = useCallback((index: number) => {
    setActiveProjectIndex(index);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextProject();
    }, autoRotateInterval);

    return () => clearInterval(intervalId);
  }, [handleNextProject, autoRotateInterval]);

  return {
    activeProjectIndex,
    isSmallScreen,
    handleNextProject,
    handlePrevProject,
    handleActiveProject
  };
}
