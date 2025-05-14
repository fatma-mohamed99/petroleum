"use client";
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/fixedComponents/NavBar';
import HeroContent from './HeroContent';
import { carouselImages } from '@/consts/media';
import gsap from 'gsap';

const HeroCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [nextImageIndex, setNextImageIndex] = useState<number>(1);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const slideContainerRef = useRef<HTMLDivElement>(null);
    const currentSlideRef = useRef<HTMLDivElement>(null);
    const nextSlideRef = useRef<HTMLDivElement>(null);
    const nextSlideWrapperRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                goToNext();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isAnimating]);

    const animateRectangularTransition = (targetIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        setNextImageIndex(targetIndex);

        if (nextSlideWrapperRef.current && nextSlideRef.current) {
            nextSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
            nextSlideRef.current.style.backgroundSize = 'cover';
            nextSlideRef.current.style.backgroundPosition = 'center';

            nextSlideWrapperRef.current.style.display = 'block';
            nextSlideWrapperRef.current.style.width = '0px';
            nextSlideWrapperRef.current.style.height = '0px';
            nextSlideWrapperRef.current.style.borderRadius = '16px';
            nextSlideWrapperRef.current.style.overflow = 'hidden';
            nextSlideWrapperRef.current.style.position = 'absolute';
            nextSlideWrapperRef.current.style.left = '50%';
            nextSlideWrapperRef.current.style.top = '50%';
            nextSlideWrapperRef.current.style.transform = 'translate(-50%, -50%)';
            nextSlideWrapperRef.current.style.zIndex = '2';
            nextSlideWrapperRef.current.style.boxShadow = '0 0 50px 25px rgba(255,255,255,0.3)';
        }

        if (currentSlideRef.current) {
            currentSlideRef.current.style.zIndex = '1';
        }

        if (contentContainerRef.current) {
            const content = contentContainerRef.current.querySelector('.content-to-animate');
            if (content) {
                gsap.to(content, {
                    opacity: 0,
                    y: -15,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        }

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const maxDimensionWidth = viewportWidth * 1.5;
        const maxDimensionHeight = viewportHeight * 1.5;

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentImageIndex(targetIndex);

                if (currentSlideRef.current) {
                    currentSlideRef.current.style.backgroundImage = `url(${carouselImages[targetIndex].src})`;
                    currentSlideRef.current.style.zIndex = '1';
                }

                if (nextSlideWrapperRef.current) {
                    nextSlideWrapperRef.current.style.zIndex = '3';
                    setTimeout(() => {
                        if (nextSlideWrapperRef.current) {
                            nextSlideWrapperRef.current.style.display = 'none';
                        }
                    }, 50);
                }

                if (contentContainerRef.current) {
                    const content = contentContainerRef.current.querySelector('.content-to-animate');
                    if (content) {
                        gsap.fromTo(
                            content,
                            { opacity: 0, y: 15 },
                            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
                        );
                    }
                }

                setIsAnimating(false);
            }
        });

        tl.to(nextSlideWrapperRef.current, {
            width: '240px',
            height: '160px',
            duration: 0.7,
            ease: 'power1.out'
        });

        tl.to(nextSlideWrapperRef.current, {
            width: `${maxDimensionWidth}px`,
            height: `${maxDimensionHeight}px`,
            borderRadius: '8px',
            duration: 1.2,
            ease: 'power2.inOut',
            onStart: () => {

                if (nextSlideWrapperRef.current && currentSlideRef.current) {
                    nextSlideWrapperRef.current.style.zIndex = '2';
                    currentSlideRef.current.style.zIndex = '1';
                }
            }
        });

        tl.to(nextSlideWrapperRef.current, {
            borderRadius: '0px',
            duration: 0.4,
            ease: 'power1.inOut',
        }, "-=0.6");

        tl.to(nextSlideWrapperRef.current, {
            boxShadow: '0 0 0 0 rgba(255,255,255,0)',
            duration: 0.3,
            ease: 'power2.in'
        }, "-=0.2");
    };

    const goToPrevious = () => {
        if (isAnimating) return;

        const prevIndex = currentImageIndex === 0
            ? carouselImages.length - 1
            : currentImageIndex - 1;

        animateRectangularTransition(prevIndex);
    };

    const goToNext = () => {
        if (isAnimating) return;

        const nextIndex = currentImageIndex === carouselImages.length - 1
            ? 0
            : currentImageIndex + 1;

        animateRectangularTransition(nextIndex);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentImageIndex) return;
        animateRectangularTransition(index);
    };

    return (
        <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
            <Navbar />

            <div className="relative w-full h-full" ref={slideContainerRef}>
                <div
                    ref={currentSlideRef}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
                        zIndex: 1
                    }}
                ></div>

                <div
                    ref={nextSlideWrapperRef}
                    style={{
                        display: 'none',
                        position: 'absolute',
                        width: '0',
                        height: '0',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        zIndex: 2,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 0 50px 25px rgba(255,255,255,0.3)'
                    }}
                >
                    <div
                        ref={nextSlideRef}
                        className="absolute inset-0 bg-contain bg-center w-full h-full"
                        style={{
                            backgroundImage: nextImageIndex !== null ?
                                `url(${carouselImages[nextImageIndex].src})` :
                                'none'
                        }}
                    ></div>
                </div>

                <div
                    ref={contentContainerRef}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 10 }}
                >
                    <div className="w-full max-w-[90%] md:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[70%] h-full">
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