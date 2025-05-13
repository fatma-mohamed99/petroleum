import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    onNext
}: HeroContentProps) {
    return (
        <div className="w-full h-full flex flex-col  justify-between">
            {/* Main content area */}
            <div className="flex-1 flex items-center">
                <div className="w-full max-w-xl text-white z-10 p-4 md:p-6 lg:p-8">
                    <h1 className="text-3xl mt-[24px] md:text-4xl lg:text-5xl font-bold mb-2">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-base md:text-lg lg:text-xl">
                            {description}
                        </p>
                    )}

                    <div className="mt-6 md:mt-8 lg:mt-10 ">
                        <Link
                            href={pageLink}
                            className="inline-block px-6 py-3 bg-white hover:bg-gray-200 text-black font-medium transition-colors"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-4 mb-8 md:p-6 lg:p-8">
                {/* Pagination  */}
                <div className="flex space-x-2 order-2 md:order-1">
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`cursor-pointer border-2 border-secondary shadow-2xl shadow-secondary text-header-lg w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center transition-colors ${currentImageIndex === index
                                ? 'bg-white text-secondary'
                                : 'bg-main/50 text-white hover:bg-main/60'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Navigation arrows */}
                <div className=" hidden sm:flex space-x-2 order-1 md:order-2">
                    <button
                        onClick={onPrevious}
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 text-white cursor-pointer transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={30} />
                    </button>
                    <button
                        onClick={onNext}
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 text-white cursor-pointer transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
}