// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Navbar from '@/components/fixedComponents/NavBar';
// import HeroContent from './HeroContent';
// import { carouselImages } from '@/consts/media';
// import gsap from 'gsap';

// const HeroCarousel: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [nextImageIndex, setNextImageIndex] = useState<number>(1);
//     const [isAnimating, setIsAnimating] = useState<boolean>(false);

//     const slideContainerRef = useRef<HTMLDivElement>(null);
//     const currentSlideRef = useRef<HTMLDivElement>(null);
//     const nextSlideRef = useRef<HTMLDivElement>(null);
//     const nextSlideWrapperRef = useRef<HTMLDivElement>(null);
//     const contentContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isAnimating) {
//                 goToNext();
//             }
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAnimating]);

//     const animateRectangularTransition = (targetIndex: number) => {
//         if (isAnimating) return;
//         setIsAnimating(true);

//         setNextImageIndex(targetIndex);

//         if (nextSlideWrapperRef.current && nextSlideRef.current) {
//             nextSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//             nextSlideRef.current.style.backgroundSize = 'cover';
//             nextSlideRef.current.style.backgroundPosition = 'center';

//             nextSlideWrapperRef.current.style.display = 'block';
//             nextSlideWrapperRef.current.style.width = '0px';
//             nextSlideWrapperRef.current.style.height = '0px';
//             nextSlideWrapperRef.current.style.borderRadius = '16px';
//             nextSlideWrapperRef.current.style.overflow = 'hidden';
//             nextSlideWrapperRef.current.style.position = 'absolute';
//             nextSlideWrapperRef.current.style.left = '50%';
//             nextSlideWrapperRef.current.style.top = '50%';
//             nextSlideWrapperRef.current.style.transform = 'translate(-50%, -50%)';
//             nextSlideWrapperRef.current.style.zIndex = '2';
//             nextSlideWrapperRef.current.style.boxShadow = '0 0 50px 25px rgba(255,255,255,0.3)';
//         }

//         if (currentSlideRef.current) {
//             currentSlideRef.current.style.zIndex = '1';
//         }

//         if (contentContainerRef.current) {
//             const content = contentContainerRef.current.querySelector('.content-to-animate');
//             if (content) {
//                 gsap.to(content, {
//                     opacity: 0,
//                     y: -15,
//                     duration: 0.5,
//                     ease: 'power2.out'
//                 });
//             }
//         }

//         const viewportWidth = window.innerWidth;
//         const viewportHeight = window.innerHeight;
//         const maxDimensionWidth = viewportWidth * 1.5;
//         const maxDimensionHeight = viewportHeight * 1.5;

//         const tl = gsap.timeline({
//             onComplete: () => {
//                 setCurrentImageIndex(targetIndex);

//                 if (currentSlideRef.current) {
//                     currentSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//                     currentSlideRef.current.style.zIndex = '1';
//                 }

//                 if (nextSlideWrapperRef.current) {
//                     nextSlideWrapperRef.current.style.zIndex = '3';
//                     setTimeout(() => {
//                         if (nextSlideWrapperRef.current) {
//                             nextSlideWrapperRef.current.style.display = 'none';
//                         }
//                     }, 50);
//                 }

//                 if (contentContainerRef.current) {
//                     const content = contentContainerRef.current.querySelector('.content-to-animate');
//                     if (content) {
//                         gsap.fromTo(
//                             content,
//                             { opacity: 0, y: 15 },
//                             { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
//                         );
//                     }
//                 }

//                 setIsAnimating(false);
//             }
//         });

//         tl.to(nextSlideWrapperRef.current, {
//             width: '240px',
//             height: '160px',
//             duration: 0.7,
//             ease: 'power1.out'
//         });

//         tl.to(nextSlideWrapperRef.current, {
//             width: `${maxDimensionWidth}px`,
//             height: `${maxDimensionHeight}px`,
//             borderRadius: '8px',
//             duration: 1.2,
//             ease: 'power2.inOut',
//             onStart: () => {

//                 if (nextSlideWrapperRef.current && currentSlideRef.current) {
//                     nextSlideWrapperRef.current.style.zIndex = '2';
//                     currentSlideRef.current.style.zIndex = '1';
//                 }
//             }
//         });

//         tl.to(nextSlideWrapperRef.current, {
//             borderRadius: '0px',
//             duration: 0.4,
//             ease: 'power1.inOut',
//         }, "-=0.6");

//         tl.to(nextSlideWrapperRef.current, {
//             boxShadow: '0 0 0 0 rgba(255,255,255,0)',
//             duration: 0.3,
//             ease: 'power2.in'
//         }, "-=0.2");
//     };

//     const goToPrevious = () => {
//         if (isAnimating) return;

//         const prevIndex = currentImageIndex === 0
//             ? carouselImages.length - 1
//             : currentImageIndex - 1;

//         animateRectangularTransition(prevIndex);
//     };

//     const goToNext = () => {
//         if (isAnimating) return;

//         const nextIndex = currentImageIndex === carouselImages.length - 1
//             ? 0
//             : currentImageIndex + 1;

//         animateRectangularTransition(nextIndex);
//     };

//     const goToSlide = (index: number) => {
//         if (isAnimating || index === currentImageIndex) return;
//         animateRectangularTransition(index);
//     };

//     return (
//         <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
//             <Navbar />

//             <div className="relative w-full h-full" ref={slideContainerRef}>
//                 <div
//                     ref={currentSlideRef}
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                         backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
//                         zIndex: 1
//                     }}
//                 ></div>

//                 <div
//                     ref={nextSlideWrapperRef}
//                     style={{
//                         display: 'none',
//                         position: 'absolute',
//                         width: '0',
//                         height: '0',
//                         borderRadius: '16px',
//                         overflow: 'hidden',
//                         zIndex: 2,
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         boxShadow: '0 0 50px 25px rgba(255,255,255,0.3)'
//                     }}
//                 >
//                     <div
//                         ref={nextSlideRef}
//                         className="absolute inset-0 bg-contain bg-center w-full h-full"
//                         style={{
//                             backgroundImage: nextImageIndex !== null ?
//                                 `url(${carouselImages[nextImageIndex].src})` :
//                                 'none'
//                         }}
//                     ></div>
//                 </div>

//                 <div
//                     ref={contentContainerRef}
//                     className="absolute inset-0 flex items-center justify-center"
//                     style={{ zIndex: 10 }}
//                 >
//                     <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full">
//                         <HeroContent
//                             title={carouselImages[currentImageIndex].title}
//                             description={carouselImages[currentImageIndex].description}
//                             pageLink={carouselImages[currentImageIndex].pageLink}
//                             buttonText={carouselImages[currentImageIndex].buttonText}
//                             currentImageIndex={currentImageIndex}
//                             setCurrentImageIndex={goToSlide}
//                             totalImages={carouselImages.length}
//                             onPrevious={goToPrevious}
//                             onNext={goToNext}
//                             isAnimating={isAnimating}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCarousel;





// // تاثير الدائره البيضه

// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Navbar from '@/components/fixedComponents/NavBar';
// import HeroContent from './HeroContent';
// import { carouselImages } from '@/consts/media';
// import gsap from 'gsap';

// const HeroCarousel: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [nextImageIndex, setNextImageIndex] = useState<number>(1);
//     const [isAnimating, setIsAnimating] = useState<boolean>(false);

//     const slideContainerRef = useRef<HTMLDivElement>(null);
//     const currentSlideRef = useRef<HTMLDivElement>(null);
//     const nextSlideRef = useRef<HTMLDivElement>(null);
//     const overlayRef = useRef<HTMLDivElement>(null);
//     const contentContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isAnimating) {
//                 goToNext();
//             }
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAnimating]);

//     const animateTransition = (targetIndex: number) => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setNextImageIndex(targetIndex);

//         // Prepare next slide
//         if (nextSlideRef.current) {
//             nextSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//             nextSlideRef.current.style.backgroundSize = 'cover';
//             nextSlideRef.current.style.backgroundPosition = 'center';
//             nextSlideRef.current.style.opacity = '0';
//             nextSlideRef.current.style.zIndex = '2';
//             nextSlideRef.current.style.display = 'block';
//         }

//         // Start content fade out
//         if (contentContainerRef.current) {
//             const content = contentContainerRef.current.querySelector('.content-to-animate');
//             if (content) {
//                 gsap.to(content, {
//                     opacity: 0,
//                     y: -20,
//                     duration: 0.6,
//                     ease: 'power2.out'
//                 });
//             }
//         }

//         // Create transition timeline
//         const tl = gsap.timeline({
//             onComplete: () => {
//                 // Update state after animation
//                 setCurrentImageIndex(targetIndex);

//                 if (currentSlideRef.current) {
//                     currentSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//                 }

//                 if (nextSlideRef.current) {
//                     nextSlideRef.current.style.display = 'none';
//                 }

//                 // Fade in content
//                 if (contentContainerRef.current) {
//                     const content = contentContainerRef.current.querySelector('.content-to-animate');
//                     if (content) {
//                         gsap.fromTo(
//                             content,
//                             { opacity: 0, y: 20 },
//                             { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
//                         );
//                     }
//                 }

//                 setIsAnimating(false);
//             }
//         });

//         // Create ripple effect with overlay
//         if (overlayRef.current) {
//             // Reset overlay
//             overlayRef.current.style.display = 'block';
//             gsap.set(overlayRef.current, {
//                 scale: 0,
//                 opacity: 0,
//                 x: '50%',
//                 y: '50%',
//                 borderRadius: '50%'
//             });

//             // Add ripple effect to timeline
//             tl.to(overlayRef.current, {
//                 scale: 1.5,
//                 opacity: 0.95,
//                 duration: 0.8,
//                 ease: 'power2.out'
//             });
//         }

//         // Crossfade to next image
//         tl.to(nextSlideRef.current, {
//             opacity: 1,
//             duration: 0.8,
//             ease: 'power2.inOut'
//         }, "-=0.4");

//         // Fade out overlay
//         tl.to(overlayRef.current, {
//             opacity: 0,
//             duration: 0.6,
//             ease: 'power2.inOut',
//             onComplete: () => {
//                 if (overlayRef.current) {
//                     overlayRef.current.style.display = 'none';
//                 }
//             }
//         }, "-=0.4");
//     };

//     const goToPrevious = () => {
//         if (isAnimating) return;

//         const prevIndex = currentImageIndex === 0
//             ? carouselImages.length - 1
//             : currentImageIndex - 1;

//         animateTransition(prevIndex);
//     };

//     const goToNext = () => {
//         if (isAnimating) return;

//         const nextIndex = currentImageIndex === carouselImages.length - 1
//             ? 0
//             : currentImageIndex + 1;

//         animateTransition(nextIndex);
//     };

//     const goToSlide = (index: number) => {
//         if (isAnimating || index === currentImageIndex) return;
//         animateTransition(index);
//     };

//     return (
//         <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
//             <Navbar />

//             <div className="relative w-full h-full" ref={slideContainerRef}>
//                 {/* Current slide */}
//                 <div
//                     ref={currentSlideRef}
//                     className="absolute inset-0 bg-cover bg-center transition-all duration-300"
//                     style={{
//                         backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
//                         zIndex: 1
//                     }}
//                 ></div>

//                 {/* Next slide for crossfade */}
//                 <div
//                     ref={nextSlideRef}
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                         backgroundImage: nextImageIndex !== null ?
//                             `url(${carouselImages[nextImageIndex].src})` :
//                             'none',
//                         opacity: 0,
//                         zIndex: 2,
//                         display: 'none'
//                     }}
//                 ></div>

//                 {/* Animation overlay */}
//                 <div
//                     ref={overlayRef}
//                     className="absolute top-0 left-0 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
//                     style={{
//                         background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)",
//                         zIndex: 3,
//                         display: 'none',
//                         pointerEvents: 'none'
//                     }}
//                 ></div>

//                 {/* Content */}
//                 <div
//                     ref={contentContainerRef}
//                     className="absolute inset-0 flex items-center justify-center"
//                     style={{ zIndex: 10 }}
//                 >
//                     <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full">
//                         <HeroContent
//                             title={carouselImages[currentImageIndex].title}
//                             description={carouselImages[currentImageIndex].description}
//                             pageLink={carouselImages[currentImageIndex].pageLink}
//                             buttonText={carouselImages[currentImageIndex].buttonText}
//                             currentImageIndex={currentImageIndex}
//                             setCurrentImageIndex={goToSlide}
//                             totalImages={carouselImages.length}
//                             onPrevious={goToPrevious}
//                             onNext={goToNext}
//                             isAnimating={isAnimating}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCarousel;



// // "use client";
// import { useState, useEffect, useRef } from 'react';
// import Navbar from '@/components/fixedComponents/NavBar';
// import HeroContent from './HeroContent';
// import { carouselImages } from '@/consts/media';
// import gsap from 'gsap';

// const HeroCarousel: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [nextImageIndex, setNextImageIndex] = useState<number>(1);
//     const [isAnimating, setIsAnimating] = useState<boolean>(false);

//     const slideContainerRef = useRef<HTMLDivElement>(null);
//     const currentSlideRef = useRef<HTMLDivElement>(null);
//     const nextSlideRef = useRef<HTMLDivElement>(null);
//     const overlayRef = useRef<HTMLDivElement>(null);
//     const contentContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isAnimating) {
//                 goToNext();
//             }
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAnimating]);

//     const animateTransition = (targetIndex: number) => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setNextImageIndex(targetIndex);

//         // Prepare next slide
//         if (nextSlideRef.current) {
//             nextSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//             nextSlideRef.current.style.backgroundSize = 'cover';
//             nextSlideRef.current.style.backgroundPosition = 'center';
//             nextSlideRef.current.style.opacity = '0';
//             nextSlideRef.current.style.zIndex = '2';
//             nextSlideRef.current.style.display = 'block';
//         }

//         // Start content fade out
//         if (contentContainerRef.current) {
//             const content = contentContainerRef.current.querySelector('.content-to-animate');
//             if (content) {
//                 gsap.to(content, {
//                     opacity: 0,
//                     y: -10,
//                     duration: 0.5,
//                     ease: 'power2.out'
//                 });
//             }
//         }

//         // Create transition timeline
//         const tl = gsap.timeline({
//             onComplete: () => {
//                 // Update state after animation
//                 setCurrentImageIndex(targetIndex);

//                 if (currentSlideRef.current) {
//                     currentSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
//                 }

//                 if (nextSlideRef.current) {
//                     nextSlideRef.current.style.display = 'none';
//                 }

//                 // Reset overlay
//                 if (overlayRef.current) {
//                     overlayRef.current.style.display = 'none';
//                 }

//                 // Fade in content
//                 // if (contentContainerRef.current) {
//                 //     const content = contentContainerRef.current.querySelector('.content-to-animate');
//                 //     if (content) {
//                 //         gsap.fromTo(
//                 //             content,
//                 //             { opacity: 1, y: 0 },
//                 //             { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 }
//                 //         );
//                 //     }
//                 // }

//                 setIsAnimating(false);
//             }
//         });

//         // Simple elegant wipe effect with overlay
//         if (overlayRef.current) {
//             // Reset overlay for clean wipe animation
//             overlayRef.current.style.display = 'block';
//             overlayRef.current.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)';

//             gsap.set(overlayRef.current, {
//                 width: '0%',
//                 opacity: 0.9,
//                 left: '0%',
//                 top: '0',
//                 height: '100%',
//                 x: '0%',
//                 y: '0%',
//                 transformOrigin: 'left center',
//                 borderRadius: '0%'
//             });

//             // Add gentle wipe effect
//             tl.to(overlayRef.current, {
//                 width: '100%',
//                 duration: 1.1,
//                 ease: 'power1.inOut'
//             });

//             // Fade in next image under the wipe
//             tl.to(nextSlideRef.current, {

//             },);

//             // Fade out overlay
//             tl.to(overlayRef.current, {



//             });
//         }
//     };

//     const goToPrevious = () => {
//         if (isAnimating) return;

//         const prevIndex = currentImageIndex === 0
//             ? carouselImages.length - 1
//             : currentImageIndex - 1;

//         animateTransition(prevIndex);
//     };

//     const goToNext = () => {
//         if (isAnimating) return;

//         const nextIndex = currentImageIndex === carouselImages.length - 1
//             ? 0
//             : currentImageIndex + 1;

//         animateTransition(nextIndex);
//     };

//     const goToSlide = (index: number) => {
//         if (isAnimating || index === currentImageIndex) return;
//         animateTransition(index);
//     };

//     return (
//         <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
//             <Navbar />

//             <div className="relative w-full h-full" ref={slideContainerRef}>
//                 {/* Current slide */}
//                 <div
//                     ref={currentSlideRef}
//                     className="absolute inset-0 bg-cover bg-center transition-all duration-300"
//                     style={{
//                         backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
//                         zIndex: 1
//                     }}
//                 ></div>

//                 {/* Next slide for crossfade */}
//                 <div
//                     ref={nextSlideRef}
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                         backgroundImage: nextImageIndex !== null ?
//                             `url(${carouselImages[nextImageIndex].src})` :
//                             'none',
//                         opacity: 0,
//                         zIndex: 2,
//                         display: 'none'
//                     }}
//                 ></div>

//                 {/* Animation overlay */}
//                 <div
//                     ref={overlayRef}
//                     className="absolute top-0 left-0 w-0 h-full"
//                     style={{
//                         background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)",
//                         zIndex: 3,
//                         display: 'none',
//                         pointerEvents: 'none'
//                     }}
//                 ></div>

//                 {/* Content */}
//                 <div
//                     ref={contentContainerRef}
//                     className="absolute inset-0 flex items-center justify-center"
//                     style={{ zIndex: 10 }}
//                 >
//                     <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full">
//                         <HeroContent
//                             title={carouselImages[currentImageIndex].title}
//                             description={carouselImages[currentImageIndex].description}
//                             pageLink={carouselImages[currentImageIndex].pageLink}
//                             buttonText={carouselImages[currentImageIndex].buttonText}
//                             currentImageIndex={currentImageIndex}
//                             setCurrentImageIndex={goToSlide}
//                             totalImages={carouselImages.length}
//                             onPrevious={goToPrevious}
//                             onNext={goToNext}
//                             isAnimating={isAnimating}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCarousel;






// // "use client";
// import { useState, useEffect, useRef } from 'react';
// import Navbar from '@/components/fixedComponents/NavBar';
// import HeroContent from './HeroContent';
// import { carouselImages } from '@/consts/media';
// import gsap from 'gsap';

// const HeroCarousel: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [isAnimating, setIsAnimating] = useState<boolean>(false);

//     const slideContainerRef = useRef<HTMLDivElement>(null);
//     const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
//     const contentContainerRef = useRef<HTMLDivElement>(null);

//     // Create refs for all possible slides
//     const createSlideRefs = (index: number, el: HTMLDivElement | null) => {
//         slidesRef.current[index] = el;
//     };

//     useEffect(() => {
//         // Initialize the first slide
//         if (slidesRef.current[currentImageIndex]) {
//             gsap.set(slidesRef.current[currentImageIndex], {
//                 opacity: 1,
//                 display: 'block',
//                 zIndex: 1
//             });
//         }

//         // Auto-play carousel
//         const interval = setInterval(() => {
//             if (!isAnimating) {
//                 goToNext();
//             }
//         }, 6000);

//         return () => clearInterval(interval);
//     }, [isAnimating]);

//     const animateTransition = (targetIndex: number) => {
//         if (isAnimating || targetIndex === currentImageIndex) return;
//         setIsAnimating(true);

//         // Get current and next slides
//         const currentSlide = slidesRef.current[currentImageIndex];
//         const nextSlide = slidesRef.current[targetIndex];

//         if (!currentSlide || !nextSlide) return;

//         // Create a timeline for smoother sequenced animations
//         const tl = gsap.timeline({
//             onComplete: () => {
//                 setCurrentImageIndex(targetIndex);
//                 setIsAnimating(false);
//             }
//         });

//         // Animate content out
//         if (contentContainerRef.current) {
//             const content = contentContainerRef.current.querySelector('.content-to-animate');
//             if (content) {
//                 tl.to(content, {
//                     opacity: 0,
//                     y: -10,
//                     duration: 0.4,
//                     ease: 'power2.out'
//                 }, 0);
//             }
//         }

//         // Prepare next slide
//         gsap.set(nextSlide, {
//             opacity: 0,
//             display: 'block',
//             zIndex: 2
//         });

//         // انتقال سلس للصورة التالية مع تلاشي الصورة الحالية
//         tl.to(currentSlide, {
//             opacity: 0,
//             duration: 1,
//             ease: 'power2.inOut'
//         }, 0.2);

//         tl.to(nextSlide, {
//             opacity: 1,
//             duration: 1,
//             ease: 'power2.inOut'
//         }, 0.2);

//         // Reset current slide after animation
//         tl.set(currentSlide, {
//             display: 'none',
//             zIndex: 0
//         });

//         // Animate content back in
//         tl.add(() => {
//             if (contentContainerRef.current) {
//                 const newContent = contentContainerRef.current.querySelector('.content-to-animate');
//                 if (newContent) {
//                     gsap.fromTo(
//                         newContent,
//                         { opacity: 0, y: 10 },
//                         { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
//                     );
//                 }
//             }
//         }, "-=0.3");
//     };

//     const goToPrevious = () => {
//         if (isAnimating) return;

//         const prevIndex = currentImageIndex === 0
//             ? carouselImages.length - 1
//             : currentImageIndex - 1;

//         animateTransition(prevIndex);
//     };

//     const goToNext = () => {
//         if (isAnimating) return;

//         const nextIndex = currentImageIndex === carouselImages.length - 1
//             ? 0
//             : currentImageIndex + 1;

//         animateTransition(nextIndex);
//     };

//     const goToSlide = (index: number) => {
//         if (isAnimating || index === currentImageIndex) return;
//         animateTransition(index);
//     };

//     return (
//         <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
//             <Navbar />

//             <div className="relative w-full h-full" ref={slideContainerRef}>
//                 {/* خلفية داكنة ثابتة لتجنب الوميض الأبيض */}
//                 <div className="absolute inset-0 bg-black"></div>

//                 {/* Create all slides upfront but only show current one */}
//                 {carouselImages.map((image, index) => (
//                     <div
//                         key={index}
//                         ref={(el) => createSlideRefs(index, el)}
//                         className="absolute inset-0 bg-cover bg-center"
//                         style={{
//                             backgroundImage: `url(${image.src})`,
//                             opacity: index === currentImageIndex ? 1 : 0,
//                             zIndex: index === currentImageIndex ? 1 : 0,
//                             display: index === currentImageIndex ? 'block' : 'none'
//                         }}
//                     ></div>
//                 ))}

//                 {/* Content */}
//                 <div
//                     ref={contentContainerRef}
//                     className="absolute inset-0 flex items-center justify-center"
//                     style={{ zIndex: 10 }}
//                 >
//                     <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full">
//                         <HeroContent
//                             title={carouselImages[currentImageIndex].title}
//                             description={carouselImages[currentImageIndex].description}
//                             pageLink={carouselImages[currentImageIndex].pageLink}
//                             buttonText={carouselImages[currentImageIndex].buttonText}
//                             currentImageIndex={currentImageIndex}
//                             setCurrentImageIndex={goToSlide}
//                             totalImages={carouselImages.length}
//                             onPrevious={goToPrevious}
//                             onNext={goToNext}
//                             isAnimating={isAnimating}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCarousel;