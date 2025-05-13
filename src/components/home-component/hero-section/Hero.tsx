
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
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // Refs for animation elements
    const slideContainerRef = useRef<HTMLDivElement>(null);
    const currentSlideRef = useRef<HTMLDivElement>(null);
    const nextSlideRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const transitionMaskRef = useRef<HTMLDivElement>(null);
    const particlesContainerRef = useRef<HTMLDivElement>(null);

    // Auto rotation timer
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (!isAnimating) {
                goToNext();
            }
        }, 7000); // 7 seconds for more relaxed experience

        return () => clearInterval(interval);
    }, [isAnimating, isPaused]);

    // Initialize particles
    useEffect(() => {
        if (particlesContainerRef.current) {
            createParticles();
        }
    }, []);

    const createParticles = () => {
        if (!particlesContainerRef.current) return;

        // Clear existing particles
        particlesContainerRef.current.innerHTML = '';

        // Create new particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Randomize initial position and properties
            const size = Math.random() * 6 + 2; // 2-8px
            const x = Math.random() * 100; // 0-100%
            const y = Math.random() * 100; // 0-100%
            const delay = Math.random() * 10; // 0-10s
            const duration = Math.random() * 15 + 15; // 15-30s
            const opacity = Math.random() * 0.5 + 0.1; // 0.1-0.6

            // Set styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            particle.style.opacity = opacity.toString();
            particle.style.background = 'rgba(255, 255, 255, 0.8)';
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.3)';

            // Add animation
            gsap.to(particle, {
                y: `-=${Math.random() * 50 + 50}`, // Move up 50-100px
                x: `+=${Math.random() * 40 - 20}`, // Drift left or right a bit
                opacity: 0,
                duration: duration,
                delay: delay,
                ease: 'power1.inOut',
                repeat: -1, // Infinite repeat
                repeatDelay: Math.random() * 2,
                onRepeat: () => {
                    // Reset position on repeat
                    gsap.set(particle, {
                        y: 0,
                        x: 0,
                        opacity: opacity
                    });
                }
            });

            particlesContainerRef.current.appendChild(particle);
        }
    };

    const animateImageTransition = (targetIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Store the next index
        setNextImageIndex(targetIndex);

        // Setup the next slide with initial state
        gsap.set(nextSlideRef.current, {
            backgroundImage: `url(${carouselImages[targetIndex].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: 1,
            scale: 1.05 // Slightly zoomed in
        });

        // Make sure current slide is visible and on top
        gsap.set(currentSlideRef.current, {
            zIndex: 1,
            opacity: 1,
            scale: 1
        });

        // Setup transition mask (initially hidden)
        gsap.set(transitionMaskRef.current, {
            width: '100%',
            height: '100%',
            left: '-100%',
            opacity: 0,
            zIndex: 2
        });

        // Fade out current content with a gentle slide up
        if (contentContainerRef.current) {
            gsap.to(
                contentContainerRef.current.querySelector('.content-to-animate'),
                {
                    opacity: 0,
                    y: -30,
                    duration: 0.8,
                    ease: 'power2.out'
                }
            );
        }

        // Create the animation timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Update current image index
                setCurrentImageIndex(targetIndex);

                // Update current slide background
                gsap.set(currentSlideRef.current, {
                    backgroundImage: `url(${carouselImages[targetIndex].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                    opacity: 1,
                    scale: 1
                });

                // Reset transition mask
                gsap.set(transitionMaskRef.current, {
                    left: '-100%',
                    opacity: 0
                });

                // Reveal new content
                if (contentContainerRef.current) {
                    gsap.fromTo(
                        contentContainerRef.current.querySelector('.content-to-animate'),
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: 'power2.out'
                        }
                    );
                }

                // Animation is complete
                setIsAnimating(false);
            }
        });

        // Zoom out current slide slightly
        tl.to(currentSlideRef.current, {
            scale: 1.02,
            duration: 1.5,
            ease: 'power1.inOut'
        }, 0);

        // Zoom in next slide
        tl.fromTo(nextSlideRef.current,
            { scale: 1.05 },
            { scale: 1, duration: 1.8, ease: 'power1.out' },
            0.5
        );

        // Reveal transition mask with a soft wave-like motion
        tl.to(transitionMaskRef.current, {
            left: '-50%',
            opacity: 0.6,
            duration: 0.6,
            ease: 'power2.inOut'
        }, 0);

        // Then animate it to cover the whole screen with a relaxing motion
        tl.to(transitionMaskRef.current, {
            left: '0%',
            duration: 0.8,
            ease: 'power1.inOut',
            onComplete: () => {
                // During the mask peak, update z-index
                gsap.set(nextSlideRef.current, { zIndex: 1 });
                gsap.set(currentSlideRef.current, { zIndex: 0 });
            }
        });

        // Finish animation by moving the mask off-screen with a gentle fade
        tl.to(transitionMaskRef.current, {
            left: '100%',
            opacity: 0,
            duration: 1.2,
            ease: 'power2.inOut'
        });

        // Enhance overlay during transition
        tl.fromTo(overlayRef.current,
            { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            { backgroundColor: 'rgba(0, 0, 0, 0.4)', duration: 1.5, ease: 'power1.inOut' },
            0
        );
        tl.to(overlayRef.current,
            { backgroundColor: 'rgba(0, 0, 0, 0.5)', duration: 1, ease: 'power1.inOut' },
            1.5
        );
    };

    const goToPrevious = () => {
        if (isAnimating) return;

        const prevIndex = currentImageIndex === 0
            ? carouselImages.length - 1
            : currentImageIndex - 1;

        animateImageTransition(prevIndex);
    };

    const goToNext = () => {
        if (isAnimating) return;

        const nextIndex = currentImageIndex === carouselImages.length - 1
            ? 0
            : currentImageIndex + 1;

        animateImageTransition(nextIndex);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentImageIndex) return;
        animateImageTransition(index);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
            <Navbar />

            <div className="relative w-full h-full" ref={slideContainerRef}>
                {/* Current slide layer */}
                <div
                    ref={currentSlideRef}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                        backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
                        zIndex: 1
                    }}
                ></div>

                {/* Next slide layer */}
                <div
                    ref={nextSlideRef}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: nextImageIndex !== null ?
                            `url(${carouselImages[nextImageIndex].src})` :
                            'none',
                        zIndex: 0
                    }}
                ></div>

                {/* Transition mask element - creates soft wave effect */}
                <div
                    ref={transitionMaskRef}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                        zIndex: 2,
                        left: '-100%',
                        opacity: 0,
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 0 80px 40px rgba(255,255,255,0.2)'
                    }}
                ></div>

                {/* Floating particles container */}
                <div
                    ref={particlesContainerRef}
                    className="absolute inset-0 pointer-events-none"
                    style={{ zIndex: 4 }}
                ></div>

                {/* Gradient overlay with soft vignette */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0"
                    style={{
                        zIndex: 3,
                        background: 'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)'
                    }}
                ></div>

                {/* Content container */}
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
                            isPaused={isPaused}
                            togglePause={togglePause}
                        />
                    </div>
                </div>
            </div>

            {/* Custom CSS for particles and other effects */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                
                .particle {
                    position: absolute;
                    filter: blur(1px);
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;












// import { useState, useEffect, useRef } from 'react';
// import Navbar from '@/components/fixedComponents/NavBar';
// import HeroContent from './HeroContent';
// import { carouselImages } from '@/consts/media';
// import gsap from 'gsap';

// const HeroCarousel: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [nextImageIndex, setNextImageIndex] = useState<number>(1);
//     const [isAnimating, setIsAnimating] = useState<boolean>(false);

//     // Refs for animation elements
//     const slideContainerRef = useRef<HTMLDivElement>(null);
//     const currentSlideRef = useRef<HTMLDivElement>(null);
//     const nextSlideRef = useRef<HTMLDivElement>(null);
//     const overlayRef = useRef<HTMLDivElement>(null);
//     const contentContainerRef = useRef<HTMLDivElement>(null);
//     const transitionMaskRef = useRef<HTMLDivElement>(null);

//     // Auto rotation timer
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isAnimating) {
//                 goToNext();
//             }
//         }, 5000); // Slightly longer interval for smoother experience

//         return () => clearInterval(interval);
//     }, [isAnimating]);

//     const animateImageTransition = (targetIndex: number) => {
//         if (isAnimating) return;
//         setIsAnimating(true);

//         // Store the next index
//         setNextImageIndex(targetIndex);

//         // Setup the next slide with initial state
//         gsap.set(nextSlideRef.current, {
//             backgroundImage: `url(${carouselImages[targetIndex].src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             zIndex: 0,
//             opacity: 1,
//         });

//         // Make sure current slide is visible and on top
//         gsap.set(currentSlideRef.current, {
//             zIndex: 1,
//             opacity: 1,
//             scale: 1
//         });

//         // Setup transition mask (initially hidden)
//         gsap.set(transitionMaskRef.current, {
//             width: '100%',
//             height: '100%',
//             left: '-100%',
//             scale: 1.1,
//             opacity: 0,
//             zIndex: 2
//         });

//         // Fade out current content
//         if (contentContainerRef.current) {
//             gsap.to(
//                 contentContainerRef.current.querySelector('.content-to-animate'),
//                 {
//                     opacity: 0,
//                     y: -15,
//                     duration: 0.5,
//                     ease: 'power2.out'
//                 }
//             );
//         }

//         // Create the animation timeline
//         const tl = gsap.timeline({
//             onComplete: () => {
//                 // Update current image index
//                 setCurrentImageIndex(targetIndex);

//                 // Update current slide background
//                 gsap.set(currentSlideRef.current, {
//                     backgroundImage: `url(${carouselImages[targetIndex].src})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     zIndex: 1,
//                     opacity: 1,
//                     scale: 1
//                 });

//                 // Reset transition mask
//                 gsap.set(transitionMaskRef.current, {
//                     left: '-100%',
//                     opacity: 0
//                 });

//                 // Reveal new content
//                 if (contentContainerRef.current) {
//                     gsap.fromTo(
//                         contentContainerRef.current.querySelector('.content-to-animate'),
//                         { opacity: 0, y: 15 },
//                         {
//                             opacity: 1,
//                             y: 0,
//                             duration: 0.7,
//                             ease: 'power2.out'
//                         }
//                     );
//                 }

//                 // Animation is complete
//                 setIsAnimating(false);
//             }
//         });

//         // Reveal transition mask first with a wave-like motion
//         tl.to(transitionMaskRef.current, {
//             // left: '-10%',
//             opacity: 0.5,
//             duration: 0.1,
//             ease: 'power2.inOut'
//         }, 0);

//         // Then animate it to cover the whole screen
//         tl.to(transitionMaskRef.current, {
//             left: '0%',
//             duration: 0.6,
//             ease: 'power1.inOut',
//             onComplete: () => {
//                 // During the mask peak, update z-index
//                 gsap.set(nextSlideRef.current, { zIndex: 1 });
//                 gsap.set(currentSlideRef.current, { zIndex: 0 });
//             }
//         });

//         // Finish animation by moving the mask off-screen
//         tl.to(transitionMaskRef.current, {
//             left: '100%',
//             opacity: 0.5,
//             scale: 1,
//             duration: 0.9,
//             ease: 'power2.inOut'
//         });
//     };

//     const goToPrevious = () => {
//         if (isAnimating) return;

//         const prevIndex = currentImageIndex === 0
//             ? carouselImages.length - 1
//             : currentImageIndex - 1;

//         animateImageTransition(prevIndex);
//     };

//     const goToNext = () => {
//         if (isAnimating) return;

//         const nextIndex = currentImageIndex === carouselImages.length - 1
//             ? 0
//             : currentImageIndex + 1;

//         animateImageTransition(nextIndex);
//     };

//     const goToSlide = (index: number) => {
//         if (isAnimating || index === currentImageIndex) return;
//         animateImageTransition(index);
//     };

//     return (
//         <div className="relative h-screen max-h-[70rem] w-full overflow-hidden">
//             <Navbar />

//             <div className="relative w-full h-full" ref={slideContainerRef}>
//                 {/* Current slide layer */}
//                 <div
//                     ref={currentSlideRef}
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                         backgroundImage: `url(${carouselImages[currentImageIndex].src})`,
//                         zIndex: 1
//                     }}
//                 ></div>

//                 {/* Next slide layer */}
//                 <div
//                     ref={nextSlideRef}
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{
//                         backgroundImage: nextImageIndex !== null ?
//                             `url(${carouselImages[nextImageIndex].src})` :
//                             'none',
//                         zIndex: 0
//                     }}
//                 ></div>

//                 {/* Transition mask element - this creates the creative sliding effect */}
//                 <div
//                     ref={transitionMaskRef}
//                     className="absolute inset-0 bg-gradient-to-rb from-secondary/20 via-main/20 to-transparent"
//                     style={{
//                         zIndex: 2,
//                         left: '-100%',
//                         opacity: 0,
//                         backdropFilter: 'blur(8px)',
//                         boxShadow: '0 0 40px 20px rgba(255,255,255,0.15)'
//                     }}

//                 >  unico</div>

//                 {/* Gradient overlay */}
//                 <div
//                     ref={overlayRef}
//                     className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
//                     style={{ zIndex: 3 }}
//                 ></div>

//                 {/* Content container */}
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




