"use client"
import ReusablePage from '@/components/reusable-page/ReusablePage';
import { expertiseData } from '@/types/reusable';

export default function Expertise() {
    return (
        <ReusablePage
            pageTitle="Our Expertise"
            pageData={expertiseData}
            defaultTab="basic-detailed-design"
        />
    );
}