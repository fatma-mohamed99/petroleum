"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/fixedComponents/NavBar';
import HeroContent from './HeroContent';
import { carouselImages } from '@/consts/media';
import gsap from 'gsap';

const HeroCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const slideContainerRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);

    const createSlideRefs = (index: number, el: HTMLDivElement | null) => {
        slidesRef.current[index] = el;
    };



    const animateTransition = (targetIndex: number) => {
        if (isAnimating || targetIndex === currentImageIndex) return;
        setIsAnimating(true);

        const currentSlide = slidesRef.current[currentImageIndex];
        const nextSlide = slidesRef.current[targetIndex];

        if (!currentSlide || !nextSlide) return;

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentImageIndex(targetIndex);
                setIsAnimating(false);
            }
        });

        if (overlayRef.current) {
            tl.set(overlayRef.current, { opacity: 0 });

            tl.to(overlayRef.current, {
                opacity: 0.3,
                duration: 0.4,
                ease: 'power1.inOut'
            }, 0);
        }

        gsap.set(nextSlide, {
            opacity: 0,
            display: 'block',
            zIndex: 2,
            scale: 1.05
        });

        tl.to(currentSlide, {
            opacity: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power2.inOut'
        }, 0);

        tl.to(nextSlide, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.inOut'
        }, 0);

        if (overlayRef.current) {
            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.inOut'
            }, 0.8);
        }

        tl.set(currentSlide, {
            display: 'none',
            zIndex: 0
        });
    };

    const goToPrevious = () => {
        if (isAnimating) return;

        const prevIndex = currentImageIndex === 0
            ? carouselImages.length - 1
            : currentImageIndex - 1;

        animateTransition(prevIndex);
    };

    const goToNext = useCallback(() => {
        if (isAnimating) return;

        const nextIndex = currentImageIndex === carouselImages.length - 1
            ? 0
            : currentImageIndex + 1;

        animateTransition(nextIndex);
    }, [isAnimating, currentImageIndex, carouselImages.length]);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentImageIndex) return;
        animateTransition(index);
    };

    useEffect(() => {
        if (slidesRef.current[currentImageIndex]) {
            gsap.set(slidesRef.current[currentImageIndex], {
                opacity: 1,
                display: 'block',
                zIndex: 1,
                scale: 1
            });
        }

        const interval = setInterval(() => {
            if (!isAnimating) {
                goToNext();
            }
        }, 15000);

        return () => clearInterval(interval);
    }, [isAnimating, currentImageIndex, goToNext]);

    return (
        <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
            <Navbar />

            <div className="relative w-full h-full" ref={slideContainerRef}>



                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        ref={(el) => createSlideRefs(index, el)}
                        className="absolute inset-0 bg-cover bg-center  transition-transform"
                        style={{
                            backgroundImage: `url(${image.src})`,
                            opacity: index === currentImageIndex ? 1 : 0,
                            zIndex: index === currentImageIndex ? 1 : 0,
                            display: index === currentImageIndex ? 'block' : 'none'
                        }}
                    >                <div className="absolute inset-0 bg-black/15 -z-40"></div>
                    </div>

                ))}

                <div
                    ref={contentContainerRef}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ zIndex: 20 }}
                >
                    <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full pointer-events-auto">
                        <HeroContent
                            title={carouselImages[currentImageIndex].title}
                            description={carouselImages[currentImageIndex].description}
                            pageLink={carouselImages[currentImageIndex].pageLink}
                            buttonText={carouselImages[currentImageIndex].buttonText}
                            currentImageIndex={currentImageIndex}
                            setCurrentImageIndex={goToSlide}
                            totalImages={carouselImages.length}
                            onPrevious={goToPrevious}
                            onNext={goToNext}
                            isAnimating={isAnimating}
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroCarousel;