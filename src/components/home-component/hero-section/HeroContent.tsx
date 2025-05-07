import React from 'react'
import Link from 'next/link';
interface HeroContentProps {
    title: string;
}
export default function HeroContent({ title }: HeroContentProps) {
    return (

        <div className="absolute inset-0 flex flex-col items-center justify-center   ">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <p
                    className=" text-lg md:text-2xl mb-6 w-full
             text-center U-fromUnico mx-2 flex items-center justify-center"
                >
                    NICO Media
                </p>

            </div>
            <div className="flex gap-2 max-w-5xl text-center  font-medium bg-main/30 rounded-2xl p-6">
                <h1 className=" md:text-header-md text-header-sm   text-white   ">{title}</h1>
                <Link href="#" className="      text-header-md font-medium  text-black underline  transition-colors">
                    READ MORE
                </Link>

            </div>
        </div>

    )
}
