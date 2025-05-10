"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/fixedComponents/NavBar';
import HeroContent from './HeroContent';
import { carouselImages } from '@/consts/media';

const HeroCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
        <div className="relative h-screen max-h-[40rem] w-full">
            <Navbar />

            <div className="relative w-full h-full">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                        </div>
                    </div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-[90%] md:max-w-[85%]  xl:max-w-[75%] 2xl:max-w-[56%] h-full">
                        <HeroContent
                            title={carouselImages[currentImageIndex].title}
                            description={carouselImages[currentImageIndex].description}
                            pageLink={carouselImages[currentImageIndex].pageLink}
                            buttonText={carouselImages[currentImageIndex].buttonText}
                            currentImageIndex={currentImageIndex}
                            setCurrentImageIndex={setCurrentImageIndex}
                            totalImages={carouselImages.length}
                            onPrevious={goToPrevious}
                            onNext={goToNext}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;