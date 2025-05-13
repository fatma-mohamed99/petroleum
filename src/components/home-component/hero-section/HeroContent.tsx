// import React, { useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import gsap from 'gsap';

// interface HeroContentProps {
//     title: string;
//     description?: string;
//     pageLink: string;
//     buttonText: string;
//     currentImageIndex: number;
//     setCurrentImageIndex: (index: number) => void;
//     totalImages: number;
//     onPrevious: () => void;
//     onNext: () => void;
//     isAnimating?: boolean;
// }

// export default function HeroContent({
//     title,
//     description,
//     pageLink,
//     buttonText,
//     currentImageIndex,
//     setCurrentImageIndex,
//     totalImages,
//     onPrevious,
//     onNext,

//     isAnimating
// }: HeroContentProps) {
//     const contentWrapperRef = useRef<HTMLDivElement>(null);
//     const animatedContentRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLHeadingElement>(null);
//     const descriptionRef = useRef<HTMLParagraphElement>(null);
//     const buttonRef = useRef<HTMLDivElement>(null);
//     const paginationRef = useRef<HTMLDivElement>(null);
//     const navigationRef = useRef<HTMLDivElement>(null);

//     // Animation for content when slide changes
//     useEffect(() => {
//         if (!animatedContentRef.current) return;

//         // Reset content visibility immediately
//         gsap.set(animatedContentRef.current, {
//             opacity: 1,
//             scale: 1
//         });

//         // Make sure individual elements are visible
//         if (titleRef.current) {
//             gsap.set(titleRef.current, {
//                 opacity: 1,
//                 y: 0
//             });
//         }

//         if (descriptionRef.current) {
//             gsap.set(descriptionRef.current, {
//                 opacity: 1,
//                 y: 0
//             });
//         }

//         if (buttonRef.current) {
//             gsap.set(buttonRef.current, {
//                 opacity: 1,
//                 scale: 1,
//                 y: 0
//             });
//         }

//         // Simple sequence for new content
//         const tl = gsap.timeline();

//         // Animate content elements with staggered timing
//         tl.fromTo(
//             titleRef.current,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
//             0
//         );

//         if (description && descriptionRef.current) {
//             tl.fromTo(
//                 descriptionRef.current,
//                 { opacity: 0, y: 15 },
//                 { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
//                 0.2
//             );
//         }

//         tl.fromTo(
//             buttonRef.current,
//             { opacity: 0, y: 15 },
//             { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
//             0.3
//         );

//     }, [currentImageIndex, description]);

//     return (
//         <div className="w-full h-full flex flex-col justify-between">
//             {/* Main content area */}
//             <div className="flex-1 flex items-center">
//                 <div
//                     ref={contentWrapperRef}
//                     className="w-full max-w-2xl text-white z-10 p-4 md:p-6 lg:p-8"
//                 >
//                     {/* Wrapper for elements that should animate during transitions */}
//                     <div ref={animatedContentRef} className="content-to-animate">
//                         <h1
//                             ref={titleRef}
//                             className="text-header-sm mt-8 md:text-header-lg lg:text-4xl font-bold mb-2"
//                         >
//                             {title}
//                         </h1>
//                         {description && (
//                             <p
//                                 ref={descriptionRef}
//                                 className="text-desc-sm md:text-desc-md lg:text-text-desc-lg font-light"
//                             >
//                                 {description}
//                             </p>
//                         )}
//                         <div
//                             ref={buttonRef}
//                             className="mt-6 md:mt-8 lg:mt-10"
//                         >
//                             <Link
//                                 href={pageLink}
//                                 className="inline-block px-6 py-3 bg-main/40 text-white border hover:bg-main/70 font-semibold text-title-md transition-all duration-300 backdrop-blur-sm"
//                             >
//                                 {buttonText}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-4 mb-8 md:p-6 lg:p-8">
//                 {/* Pagination */}
//                 <div
//                     ref={paginationRef}
//                     className="flex space-x-2 order-2 md:order-1 opacity-100"
//                 >
//                     {Array.from({ length: totalImages }).map((_, index) => (
//                         <button
//                             key={`dot-${index}`}
//                             onClick={() => !isAnimating && setCurrentImageIndex(index)}
//                             className={`cursor-pointer border shadow-md shadow-main text-header-lg lg:text-[2.5rem] w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 
//                                 ${isAnimating ? 'pointer-events-none opacity-70' : ''} 
//                                 ${currentImageIndex === index
//                                     ? 'bg-white text-main scale-110'
//                                     : 'bg-main/30 text-white hover:bg-main/60'
//                                 }`}
//                             disabled={isAnimating}
//                             aria-label={`Go to slide ${index + 1}`}
//                         >
//                             {index + 1}
//                         </button>
//                     ))}
//                 </div>
//                 {/* Navigation arrows */}
//                 <div
//                     ref={navigationRef}
//                     className="hidden sm:flex space-x-2 order-1 md:order-2 opacity-100"
//                 >
//                     <button
//                         onClick={onPrevious}
//                         className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
//                             ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
//                         aria-label="Previous slide"
//                         disabled={isAnimating}
//                     >
//                         <ChevronLeft size={40} />
//                     </button>
//                     <button
//                         onClick={onNext}
//                         className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
//                             ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
//                         aria-label="Next slide"
//                         disabled={isAnimating}
//                     >
//                         <ChevronRight size={40} />
//                     </button>
//                 </div>

//                 {/* Pause indicator */}

//             </div>
//         </div>
//     );
// }



import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';

interface HeroContentProps {
    title: string;
    description?: string;
    pageLink: string;
    buttonText: string;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
    totalImages: number;
    onPrevious: () => void;
    onNext: () => void;
    isAnimating?: boolean;
    isPaused?: boolean;
    togglePause?: () => void;
}

export default function HeroContent({
    title,
    description,
    pageLink,
    buttonText,
    currentImageIndex,
    setCurrentImageIndex,
    totalImages,
    onPrevious,
    onNext,
    isAnimating,
    isPaused,
    togglePause
}: HeroContentProps) {
    const contentWrapperRef = useRef<HTMLDivElement>(null);
    const animatedContentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);
    const navigationRef = useRef<HTMLDivElement>(null);

    // Animation for content when slide changes
    useEffect(() => {
        if (!animatedContentRef.current) return;

        // Reset content visibility immediately
        gsap.set(animatedContentRef.current, {
            opacity: 1,
            scale: 1
        });

        // Create a smooth, staggered animation sequence for new content
        const tl = gsap.timeline();

        // Title animation with subtle 3D perspective
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30, rotationX: 10 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                ease: "power3.out"
            },
            0
        );

        // Description animation with a slight delay
        if (description && descriptionRef.current) {
            tl.fromTo(
                descriptionRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                },
                0.3
            );
        }

        // Button animation with subtle scale effect
        tl.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)"
            },
            0.5
        );

    }, [currentImageIndex, description]);

    // Floating animation for the main content
    useEffect(() => {
        if (contentWrapperRef.current) {
            // Gentle floating animation
            gsap.to(contentWrapperRef.current, {
                y: 10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-between">
            {/* Main content area */}
            <div className="flex-1 flex items-center">
                <div
                    ref={contentWrapperRef}
                    className="w-full max-w-2xl text-white z-10 p-4 md:p-6 lg:p-8"
                >
                    {/* Wrapper for elements that should animate during transitions */}
                    <div ref={animatedContentRef} className="content-to-animate">
                        <h1
                            ref={titleRef}
                            className="text-header-sm mt-8 md:text-header-lg lg:text-5xl font-bold mb-4 text-shadow-lg"
                            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)', letterSpacing: '0.5px' }}
                        >
                            {title}
                        </h1>
                        {description && (
                            <p
                                ref={descriptionRef}
                                className="text-desc-sm md:text-desc-md lg:text-desc-lg font-light max-w-lg"
                                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                            >
                                {description}
                            </p>
                        )}
                        <div
                            ref={buttonRef}
                            className="mt-8 md:mt-10 lg:mt-12"
                        >
                            <Link
                                href={pageLink}
                                className="inline-block px-8 py-4 bg-main/50 text-white border border-white/50 hover:bg-main/80 font-semibold text-title-md transition-all duration-500 backdrop-blur-md rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                            >
                                {buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-4 mb-8 md:p-6 lg:p-8">
                {/* Pagination */}
                <div
                    ref={paginationRef}
                    className="flex space-x-3 order-2 md:order-1 opacity-100"
                >
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => !isAnimating && setCurrentImageIndex(index)}
                            className={`cursor-pointer border shadow-lg transition-all duration-500 ease-in-out text-header-lg lg:text-[2rem] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center
                                ${isAnimating ? 'pointer-events-none opacity-70' : ''} 
                                ${currentImageIndex === index
                                    ? 'bg-white text-main scale-110 border-main'
                                    : 'bg-main/40 text-white hover:bg-main/70 border-white/30 backdrop-blur-sm'
                                }`}
                            disabled={isAnimating}
                            aria-label={`Go to slide ${index + 1}`}
                            style={{
                                boxShadow: currentImageIndex === index
                                    ? '0 0 15px rgba(255,255,255,0.5)'
                                    : '0 4px 8px rgba(0,0,0,0.2)'
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                {/* Navigation arrows and pause button */}
                <div
                    ref={navigationRef}
                    className="flex space-x-3 order-1 md:order-2 opacity-100"
                >
                    {/* Pause/Play button */}
                    {togglePause && (
                        <button
                            onClick={togglePause}
                            className={`hidden md:flex w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-white/30 rounded-full items-center justify-center bg-main/40 hover:bg-main/70 text-white cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg
                                ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                            disabled={isAnimating}
                            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                        >
                            {isPaused ? <Play size={28} /> : <Pause size={28} />}
                        </button>
                    )}

                    <button
                        onClick={onPrevious}
                        className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-white/30 shadow-lg rounded-full flex items-center justify-center bg-main/40 hover:bg-main/70 text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Previous slide"
                        disabled={isAnimating}
                        style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={onNext}
                        className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-white/30 shadow-lg rounded-full flex items-center justify-center bg-main/40 hover:bg-main/70 text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Next slide"
                        disabled={isAnimating}
                        style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {/* Global styles for animation effects */}
            <style jsx global>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                .text-shadow-lg {
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </div>
    );
}