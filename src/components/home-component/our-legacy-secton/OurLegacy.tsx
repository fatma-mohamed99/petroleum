"use client";
import React, { useEffect, useRef, useState } from 'react';
import CardWithAnimatedBorder from './../../ui/card/card';
import SectionContainer from '@/components/styles-wrappers/SectionContainer';
import Image from 'next/image';

export default function UnicoLegacySection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animatedCards, setAnimatedCards] = useState([]);
    const [animationComplete, setAnimationComplete] = useState([]);
    const totalCards = 5;
    const animationDuration = 1200;
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    // ممكن كمان ترجّع الحركات لو حبيت توقف الأنيمشن لما يختفي
                    setAnimatedCards([]);
                    setAnimationComplete([]);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    useEffect(() => {
        if (isVisible && animatedCards.length === 0) {
            setAnimatedCards([0]);

            const timer = setTimeout(() => {
                setAnimationComplete([0]);
            }, animationDuration);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        const lastCompleted = animationComplete.length ? animationComplete[animationComplete.length - 1] : -1;

        if (lastCompleted >= 0 && lastCompleted < totalCards - 1) {
            const nextCardIndex = lastCompleted + 1;

            setAnimatedCards(prev => [...prev, nextCardIndex]);

            const timer = setTimeout(() => {
                setAnimationComplete(prev => [...prev, nextCardIndex]);
            }, animationDuration);

            return () => clearTimeout(timer);
        }
    }, [animationComplete, totalCards]);

    const getAnimationClass = (index) => {
        if (!isVisible) {
            switch (index) {
                case 0: return "opacity-10 translate-y-32 transition-all duration-700 ease-in-out";
                case 1: return "opacity-10 -translate-x-32 transition-all duration-700 ease-in-out";
                case 2: return "opacity-10 scale-50 transition-all duration-700 ease-in-out";
                case 3: return "opacity-10 -translate-y-32 transition-all duration-700 ease-in-out";
                case 4: return "opacity-10 translate-x-32 transition-all duration-700 ease-in-out";
                default: return "opacity-10 transition-all duration-700 ease-in-out";
            }
        }

        if (!animatedCards.includes(index)) {
            switch (index) {
                case 0: return "opacity-0 translate-y-32 transition-all duration-1200 ease-out";
                case 1: return "opacity-0 -translate-x-32 transition-all duration-1200 ease-out";
                case 2: return "opacity-0 scale-85 transition-all duration-1200 ease-out";
                case 3: return "opacity-0 -translate-y-32 transition-all duration-1200 ease-out";
                case 4: return "opacity-0 translate-x-32 transition-all duration-1200 ease-out";
                default: return "opacity-0 transition-all duration-1200 ease-out";
            }
        } else {
            return "opacity-100 translate-x-0 translate-y-0 scale-100 transition-all duration-1200 ease-out";
        }
    };


    return (
        <SectionContainer
            containerClass='max-w-[70%]'
            sectionClass='  '
            title='Our Services'
            description="UNICO Petroleum offers  reliable EPCC services in oil and gas, covering pipelines, tank farms, metering, pressure stations, and crude oil gathering"
        >
            <div className="relative -z-50">
                <div className="absolute  inset-0 left-0 bg-main/10 -ml-[560px] -mt-[320px]">
                    <Image
                        src="/bgtank.png"
                        alt="Legacy Background"
                        width={1000}
                        height={600}
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            <div
                ref={sectionRef}
                className="grid grid-cols-6 grid-rows-4 gap-4 w-full h-[50rem] mt-8"
            >
                <div className={`relative col-span-2 row-span-3 ${getAnimationClass(0)}`}>
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider5.jpg"
                        altText='Oil & Gas Pipelines'
                        title="Oil & Gas Pipelines"
                        description="Custom-built websites that are responsive, fast, and tailored to your business needs"
                        className="h-full w-full"
                    />
                </div>

                <div className={`relative col-span-4 row-span-1 ${getAnimationClass(1)}`}>
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider2.jpg"
                        altText='Tank Farms'
                        title="Tank Farms"
                        description="Comprehensive marketing strategies to boost your online presence and drive growth"
                        className="h-full w-full"
                    />
                </div>

                <div className={`relative col-span-2 row-span-2 ${getAnimationClass(2)}`}>
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider3.jpg"
                        altText='Fiscal Oil & Gas Metering Stations'
                        title="Fiscal Oil & Gas Metering Stations"
                        description="Intuitive user experiences and attractive interfaces that engage your audience"
                        className="h-full w-full"
                    />
                </div>

                <div className={`relative col-span-2 row-span-4 ${getAnimationClass(3)}`}>
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='Gas Pressure Reduction & Metering Stations'
                        title="Gas Pressure Reduction & Metering Stations"
                        description="Expert guidance to help you navigate digital transformation and technology decisions"
                        className="h-full w-full"
                    />
                </div>

                <div className={`relative col-span-4 row-span-2 ${getAnimationClass(4)}`}>
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='Crude Oil Gathering Stations'
                        title="Crude Oil Gathering Stations"
                        description="Complete online store setups with payment processing, inventory management, and more"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}