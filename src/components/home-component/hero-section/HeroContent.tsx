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
                <div className="w-full max-w-2xl text-white z-10 p-4 md:p-6 lg:p-8  text-shadow-main text-shadow-md">
                    <h1 className="text-header-sm mt-[34px] md:text-header-lg lg:text-4xl font-bold mb-2 ">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-desc-sm md:text-desc-md lg:text-text-desc-lg   font-extralight ">
                            {description}
                        </p>
                    )}

                    <div className="mt-6 md:mt-8 lg:mt-10 ">
                        <Link
                            href={pageLink}
                            className="inline-block px-6 py-3 bg-main/30 text-white border hover:bg-main/60 font-semibold text-title-md transition-colors"
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
                            className={`cursor-pointer border  shadow-md shadow-main  text-header-lg lg:text-[2.5rem] w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full  flex items-center justify-center transition-colors ${currentImageIndex === index
                                ? 'bg-white text-main '
                                : 'bg-main/30 text-white hover:bg-main/60'
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
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border  shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/30 hover:bg-main text-white cursor-pointer transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={onNext}
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 border  shadow-sm shadow-main rounded-full flex items-center justify-center bg-main/30 hover:bg-main text-white cursor-pointer transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
        </div>
    );
}