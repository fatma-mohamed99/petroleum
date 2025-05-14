import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { Button } from '@/components/ui/Button';

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
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonTextRef = useRef<HTMLSpanElement>(null);  // Reference for the button text
    const buttonRef = useRef<HTMLDivElement>(null);       // Reference for the button container
    const paginationRef = useRef<HTMLDivElement>(null);
    const navigationRef = useRef<HTMLDivElement>(null);

    // Animation for content when slide changes
    useEffect(() => {
        if (!contentWrapperRef.current) return;

        // Create a master timeline for coordinated animations
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" }
        });

        // Staggered entrance for title with creative effect
        tl.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 15,
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
            },
            {
                opacity: 1,
                y: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.8
            },
            0
        );

        if (description && descriptionRef.current) {
            tl.fromTo(
                descriptionRef.current,
                {
                    opacity: 0,
                    y: 10
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2, // Longer for smoother appearance
                    ease: "power1.inOut" // Smoother easing
                },
                1.0 // Start after title completes
            );
        }

        // Animation for button text similar to title
        tl.fromTo(
            buttonTextRef.current,
            {
                opacity: 0,
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
            },
            {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.8
            },
            1.0 // Start slightly after description begins
        );

        // Animation for button container after text appears
        tl.fromTo(
            buttonRef.current,
            {
                opacity: 0,
                scale: 0.95,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            },
            1.3 // Start after text animation begins
        );

        // Subtle animation for navigation controls
        if (paginationRef.current && navigationRef.current) {
            tl.fromTo(
                [paginationRef.current, navigationRef.current],
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5 },
                0.6
            );
        }

    }, [currentImageIndex, description]);

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex-1 flex items-center">
                <div
                    ref={contentWrapperRef}
                    className="w-full max-w-2xl text-white z-10 p-4 md:p-6 lg:p-8 overflow-hidden"
                >
                    <div className="content-wrapper text-white text-shadow-sm text-shadow-secondary ">
                        <h1
                            ref={titleRef}
                            className="text-header-sm mt-8 md:text-header-lg lg:text-4xl font-bold mb-2 opacity-0 bg-main/25 p-2"
                        >
                            {title}
                        </h1>
                        {description && (
                            <p
                                ref={descriptionRef}
                                className="text-desc-sm md:text-desc-md lg:text-text-desc-lg font-light opacity-0 bg-main/25 p-2"
                            >
                                {description}
                            </p>
                        )}
                        <div className="mt-6 md:mt-8 lg:mt-10 flex items-start " ref={buttonRef}>
                            <Button
                                onClick={() => {
                                    window.location.href = pageLink;
                                }}
                                size='sm'
                                className="inline-block px-6 py-3 bg-transparent   font-semibold text-title-md transition-all duration-300 "
                            >
                                {/* Button text with clip-path animation */}
                                <span ref={buttonTextRef} className="inline-block opacity-0">
                                    {buttonText}
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-4 mb-8 md:p-6 lg:p-8">
                {/* Pagination */}
                <div
                    ref={paginationRef}
                    className="flex space-x-2 order-2 md:order-1 opacity-0"
                >
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <Button
                            key={`dot-${index}`}
                            onClick={() => !isAnimating && setCurrentImageIndex(index)}
                            className={`cursor-pointer text-header-lg w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-14 flex items-center justify-center transition-all duration-300 
                                ${isAnimating ? 'pointer-events-none opacity-70' : ''} 
                                ${currentImageIndex === index
                                    ? 'bg-secondary text-main scale-110'
                                    : 'bg-main/30 text-secondary hover:bg-main/60'
                                }`}
                            // disabled={isAnimating}
                            aria-label={`Go to slide ${index + 1}`}

                        >
                            {index + 1}
                        </Button>
                    ))}
                </div>
                {/* Navigation arrows */}
                {/* <div
                    ref={navigationRef}
                    className="hidden sm:flex space-x-2 order-1 md:order-2 opacity-0"
                >
                    <button
                        onClick={onPrevious}
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Previous slide"
                        disabled={isAnimating}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={onNext}
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/40 hover:bg-main text-white cursor-pointer transition-all duration-300 
                            ${isAnimating ? 'pointer-events-none opacity-70' : ''}`}
                        aria-label="Next slide"
                        disabled={isAnimating}
                    >
                        <ChevronRight size={40} />
                    </button>
                </div> */}
            </div>
        </div>
    );
}