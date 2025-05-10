"use client"
import ReusablePage from '@/components/reusable-page/ReusablePage';
import { PrincipleData } from '@/types/reusable';

export default function Principle() {
    return (
        <ReusablePage
            pageTitle="Our Principle"
            pageData={PrincipleData}
            defaultTab="crude-oil-gathering-stations"
        />
    );
}