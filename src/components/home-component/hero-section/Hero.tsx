"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/fixedComponents/NavBar';
import HeroContent from './HeroContent';
import { carouselImages } from '@/consts/media';

// interface CarouselImage {
//     id: number;
//     src: string;
//     alt: string;
//     title: string;
// }

const HeroCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };


    return (
        <div className="relative h-screen max-h-[50rem] ">
            <Navbar />

            {/* ################################### */}
            <div className="relative h-full">
                {carouselImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                priority={index === 0}
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-l from-main/15 to-secondary/15"></div> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* #################################### */}
            <HeroContent title={carouselImages[currentImageIndex].title} />

            {/* #################################### */}
            <button
                onClick={goToPrevious}
                className="hidden md:block  absolute left-4  top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-main cursor-pointer transition-colors"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={goToNext}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-main cursor-pointer transition-colors"
            >
                <ChevronRight size={24} />
            </button>


        </div>
    );
};

export default HeroCarousel;