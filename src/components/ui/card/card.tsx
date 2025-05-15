"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

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

        gsap.set(card.querySelector(".top-left"), { width: "40%" });
        gsap.set(card.querySelector(".top-right"), { width: "40%" });
        gsap.set(card.querySelector(".bottom-left"), { width: "40%" });
        gsap.set(card.querySelector(".bottom-right"), { width: "40%" });

        gsap.set(card.querySelector(".left-top"), { height: "30%" });
        gsap.set(card.querySelector(".left-bottom"), { height: "30%" });
        gsap.set(card.querySelector(".right-top"), { height: "30%" });
        gsap.set(card.querySelector(".right-bottom"), { height: "30%" });

        gsap.set(card.querySelector(".hover-content"), { y: 30, opacity: 0 });
        gsap.set(card.querySelector(".overlay"), { opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(card.querySelector(".top-left"), { width: "55%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".top-right"), { width: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".bottom-right"), { width: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".bottom-left"), { width: "55%", duration: 0.3, ease: "power2.out" }, 0);

        tl.to(card.querySelector(".left-top"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".left-bottom"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".right-top"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);
        tl.to(card.querySelector(".right-bottom"), { height: "50%", duration: 0.3, ease: "power2.out" }, 0);

        tl.to(card.querySelector(".default-title"), { opacity: 0, duration: 0.2 }, 0);

        tl.to(card.querySelector(".overlay"), { opacity: 0.5, duration: 0.3 }, 0);
        tl.to(card.querySelector(".hover-content"), { y: 0, opacity: 1, duration: 0.4 }, 0.1);

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());

        return () => {
            card.removeEventListener("mouseenter", () => tl.play());
            card.removeEventListener("mouseleave", () => tl.reverse());
        };
    }, []);


    return (
        <div ref={cardRef} className={`animated-card relative w-[20rem] h-[27rem] overflow-hidden cursor-pointer text-shadow-xs text-shadow-secondary/70 ${className}`}>
            <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover z-0"
            />

            <div className="overlay absolute inset-0 bg-main/45 z-10 "></div>

            <div className="default-title absolute bottom-0 left-0 p-3 bg-main/60 text-white z-20">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <div className="hover-content absolute bottom-0 left-0 right-0 p-4 bg-main/60 text-white z-20">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                {description && <p className="mb-4 text-sm">{description}</p>}
                <div className="flex outline-0 w-fit gap-1 text-secondary cursor-pointer border-b-2 border-transparent hover:border-secondary transition-all duration-300">

                    <Link href={targetPath || "#"} className="text-sm font-medium">{ctaText}</Link>

                    <span className="my-auto animate-pulse hover:animate-none duration-600 transition-all">
                        <ArrowRight size={20} />
                    </span>

                </div>
            </div>

            <div className="absolute inset-0 border-box z-30 pointer-events-none">
                <div className="top-left absolute top-0 left-0 h-[3px] bg-secondary origin-left"></div>
                <div className="top-right absolute top-0 right-0 h-[3px] bg-secondary origin-right"></div>

                <div className="bottom-left absolute bottom-0 left-0 h-[3px] bg-secondary origin-left"></div>
                <div className="bottom-right absolute bottom-0 right-0 h-[3px] bg-secondary origin-right"></div>

                <div className="left-top absolute top-0 left-0 w-[3px] bg-secondary origin-top"></div>
                <div className="left-bottom absolute bottom-0 left-0 w-[3px] bg-secondary origin-bottom"></div>

                <div className="right-top absolute top-0 right-0 w-[3px] bg-secondary origin-top"></div>
                <div className="right-bottom absolute bottom-0 right-0 w-[3px] bg-secondary origin-bottom"></div>
            </div>
        </div>
    );
};

export default CardWithAnimatedBorder;