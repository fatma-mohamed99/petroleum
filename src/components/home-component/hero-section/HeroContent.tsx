import React from 'react'
import Link from 'next/link';
interface HeroContentProps {
    title: string;
}
export default function HeroContent({ title }: HeroContentProps) {
    return (

        <div className="absolute inset-0 flex flex-col items-center justify-center p-5  ">
            <div className=" max-w-xl  lg:max-w-5xl text-center  font-medium text-white ">
                <p
                    className="bg-black/40 rounded-2xl p-2 md:text-header-md text-header-sm mb-6 w-full
             text-center U-fromUnico mx-2 flex  items-center justify-center font-medium  "
                >
                    NICO petroleum
                </p>
                <h1 className=" md:text-header-md text-header-sm bg-black/40 rounded-2xl p-6  text-white   mb-6">{title}</h1>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="#" className=" hover:tracking-wider border-4 border-main  rounded-2xl px-8 py-3 text-2xl font-medium bg-black/30 hover:bg-black/50 text-white  transition-colors">
                        READ MORE
                    </Link>

                </div>
            </div>
        </div>

    )
}
