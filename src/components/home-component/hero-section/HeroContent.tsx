import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

    isAnimating
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

        // Make sure individual elements are visible
        if (titleRef.current) {
            gsap.set(titleRef.current, {
                opacity: 1,
                y: 0
            });
        }

        if (descriptionRef.current) {
            gsap.set(descriptionRef.current, {
                opacity: 1,
                y: 0
            });
        }

        if (buttonRef.current) {
            gsap.set(buttonRef.current, {
                opacity: 1,
                scale: 1,
                y: 0
            });
        }

        // Simple sequence for new content
        const tl = gsap.timeline();

        // Animate content elements with staggered timing
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0
        );

        if (description && descriptionRef.current) {
            tl.fromTo(
                descriptionRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                0.2
            );
        }

        tl.fromTo(
            buttonRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0.3
        );

    }, [currentImageIndex, description]);

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex-1 flex items-center">
                <div
                    ref={contentWrapperRef}
                    className="w-full max-w-2xl text-white z-10 p-4 md:p-6 lg:p-8"
                >
                    <div ref={animatedContentRef} className="content-to-animate text-shadow-md text-shadow-main">
                        <h1
                            ref={titleRef}
                            className="text-header-sm mt-8 md:text-header-lg lg:text-4xl font-bold mb-2"
                        >
                            {title}
                        </h1>
                        {description && (
                            <p
                                ref={descriptionRef}
                                className="text-desc-sm md:text-desc-md lg:text-text-desc-lg font-light"
                            >
                                {description}
                            </p>
                        )}
                        <div
                            ref={buttonRef}
                            className="mt-6 md:mt-8 lg:mt-10"
                        >
                            <Link
                                href={pageLink}
                                className="inline-block px-6 py-3 bg-main/40 text-white border hover:bg-main/70 font-semibold text-title-md transition-all duration-300 backdrop-blur-sm"
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
                    className="flex space-x-2 order-2 md:order-1 opacity-100"
                >
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => !isAnimating && setCurrentImageIndex(index)}
                            className={`cursor-pointer border shadow-md shadow-main text-header-lg lg:text-[2.5rem] w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 
                                ${isAnimating ? 'pointer-events-none opacity-70' : ''} 
                                ${currentImageIndex === index
                                    ? 'bg-white text-main scale-110'
                                    : 'bg-main/30 text-white hover:bg-main/60'
                                }`}
                            disabled={isAnimating}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                {/* Navigation arrows */}
                <div
                    ref={navigationRef}
                    className="hidden sm:flex space-x-2 order-1 md:order-2 opacity-100"
                >
                    <button
                        onClick={onPrevious}
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Previous slide"
                        disabled={isAnimating}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={onNext}
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 backdrop-blur-sm
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Next slide"
                        disabled={isAnimating}
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>

                {/* Pause indicator */}

            </div>
        </div>
    );
}