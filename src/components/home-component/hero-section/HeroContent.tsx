import React from 'react'
import Link from 'next/link';
interface HeroContentProps {
    title: string;
}
export default function HeroContent({ title }: HeroContentProps) {
    return (

        <div className="absolute inset-0 flex flex-col items-center justify-center   ">
            <div className="flex gap-2 max-w-5xl text-center  font-medium bg-main/30 rounded-2xl p-6">
                <h1 className=" md:text-header-md text-header-sm   text-white   ">{title}</h1>
                <Link href="#" className="      text-header-md font-medium  text-black underline  transition-colors">
                    READ MORE
                </Link>

            </div>
        </div>

    )
}
