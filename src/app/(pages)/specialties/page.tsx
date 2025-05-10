"use client"
import ReusablePage from '@/components/reusable-page/ReusablePage';
import { SpecialtiesData } from '@/types/reusable';

export default function Specialties() {
    return (
        <ReusablePage
            pageTitle="Our Specialties"
            pageData={SpecialtiesData}
            defaultTab="introduction"
        />
    );
}