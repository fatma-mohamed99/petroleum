"use client";
import React from 'react';
import CardWithAnimatedBorder from './../../ui/card/card';
import SectionContainer from '@/components/styles-wrappers/SectionContainer';

export default function UnicoLegacySection() {
    return (
        <SectionContainer
            title='Our Services'
            description="Building lasting partnerships through dependable service and unwavering commitment to client satisfaction"
        >
            <div className="grid grid-cols-12 gap-4 w-full">
                {/* Left tall card */}
                <div className="col-span-4 row-span-4">
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='Web Development'
                        title="Web Development"
                        description="Custom-built websites that are responsive, fast, and tailored to your business needs"
                        className="h-full"
                    />
                </div>

                {/* Top wide card */}
                <div className="col-span-8 row-span-2">
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='Digital Marketing'
                        title="Digital Marketing"
                        description="Comprehensive marketing strategies to boost your online presence and drive growth"
                        className="h-full"
                    />
                </div>

                {/* Middle left card */}
                <div className="col-span-5 row-span-2">
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='UI/UX Design'
                        title="UI/UX Design"
                        description="Intuitive user experiences and attractive interfaces that engage your audience"
                        className="h-full"
                    />
                </div>

                {/* Right tall card */}
                <div className="col-span-3 row-span-4">
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='Consulting Services'
                        title="Consulting Services"
                        description="Expert guidance to help you navigate digital transformation and technology decisions"
                        className="h-full"
                    />
                </div>

                {/* Bottom wide card */}
                <div className="col-span-8 row-span-2">
                    <CardWithAnimatedBorder
                        imageUrl="/images/hero-img/slider4.jpg"
                        altText='E-commerce Solutions'
                        title="E-commerce Solutions"
                        description="Complete online store setups with payment processing, inventory management, and more"
                        className="h-full"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}