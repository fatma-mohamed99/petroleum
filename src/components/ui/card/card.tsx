"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from 'next/link';

type Props = {
    imageUrl: string;
    altText: string;
    title?: string;
    description?: string;
    ctaText?: string;
    targetPath?: string;
    className?: string
};

const CardWithAnimatedBorder = ({
    imageUrl,
    altText,
    title = "",
    description = "",
    ctaText = "Explore More",
    targetPath,
    className
}: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Initial state - partially visible borders
        gsap.set(card.querySelector(".top-left"), { width: "40%" });
        gsap.set(card.querySelector(".top-right"), { width: "40%" });
        gsap.set(card.querySelector(".bottom-left"), { width: "40%" });
        gsap.set(card.querySelector(".bottom-right"), { width: "40%" });

        gsap.set(card.querySelector(".left-top"), { height: "30%" });
        gsap.set(card.querySelector(".left-bottom"), { height: "30%" });
        gsap.set(card.querySelector(".right-top"), { height: "30%" });
        gsap.set(card.querySelector(".right-bottom"), { height: "30%" });

        // Set initial state for content
        gsap.set(card.querySelector(".hover-content"), { y: 30, opacity: 0 });
        gsap.set(card.querySelector(".overlay"), { opacity: 0 });

        // Create hover animation timeline
        const tl = gsap.timeline({ paused: true });

        // Animate horizontal lines to connect
        tl.to(card.querySelector(".top-left"), { width: "55%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".top-right"), { width: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".bottom-right"), { width: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".bottom-left"), { width: "55%", duration: 0.3, ease: "power2.out" }, 0);

        // Animate vertical lines to connect
        tl.to(card.querySelector(".left-top"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".left-bottom"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".right-top"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".right-bottom"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);

        // Hide the default title
        tl.to(card.querySelector(".default-title"), { opacity: 0, duration: 0.2 }, 0);

        // Animate overlay and hover content
        tl.to(card.querySelector(".overlay"), { opacity: 0.5, duration: 0.3 }, 0);
        tl.to(card.querySelector(".hover-content"), { y: 0, opacity: 1, duration: 0.4 }, 0.1);

        // Add event listeners
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());

        // Cleanup
        return () => {
            card.removeEventListener("mouseenter", () => tl.play());
            card.removeEventListener("mouseleave", () => tl.reverse());
        };
    }, []);


    return (
        <div ref={cardRef} className={`animated-card relative w-[20rem] h-[27rem] overflow-hidden cursor-pointer text-shadow-xs text-shadow-secondary/70 ${className}`}>
            {/* Image */}
            <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover z-0"
            />

            {/* Dark overlay that appears on hover */}
            <div className="overlay absolute inset-0 bg-black z-10 "></div>

            {/* Default title - visible when not hovering */}
            <div className="default-title absolute bottom-0 left-0 p-3 bg-main/60 text-white z-20">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            {/* Content that appears on hover */}
            <div className="hover-content absolute bottom-0 left-0 right-0 p-4 bg-main/60 text-white z-20">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                {description && <p className="mb-4 text-sm">{description}</p>}
                <div className="flex items-center">
                    <Link href={targetPath || "#"} className="text-sm font-medium">{ctaText}</Link>
                    <div className="ml-2 w-6 h-6 rounded-full border border-white flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Border elements */}
            <div className="absolute inset-0 border-box z-30 pointer-events-none">
                {/* Top border segments */}
                <div className="top-left absolute top-0 left-0 h-[3px] bg-secondary origin-left"></div>
                <div className="top-right absolute top-0 right-0 h-[3px] bg-secondary origin-right"></div>

                {/* Bottom border segments */}
                <div className="bottom-left absolute bottom-0 left-0 h-[3px] bg-secondary origin-left"></div>
                <div className="bottom-right absolute bottom-0 right-0 h-[3px] bg-secondary origin-right"></div>

                {/* Left border segments */}
                <div className="left-top absolute top-0 left-0 w-[3px] bg-secondary origin-top"></div>
                <div className="left-bottom absolute bottom-0 left-0 w-[3px] bg-secondary origin-bottom"></div>

                {/* Right border segments */}
                <div className="right-top absolute top-0 right-0 w-[3px] bg-secondary origin-top"></div>
                <div className="right-bottom absolute bottom-0 right-0 w-[3px] bg-secondary origin-bottom"></div>
            </div>
        </div>
    );
};

export default CardWithAnimatedBorder;