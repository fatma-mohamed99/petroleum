"use client"
import ReusablePage from '@/components/reusable-page/ReusablePage';
import { aboutUsData } from '@/types/reusable';

export default function AboutUs() {
    return (
        <ReusablePage
            pageTitle="About Us"
            pageData={aboutUsData}
            defaultTab="overview"
        />
    );
}