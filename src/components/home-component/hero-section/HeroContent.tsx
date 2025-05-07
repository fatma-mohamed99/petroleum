import React from 'react'
import Link from 'next/link';
interface HeroContentProps {
    title: string;
}
export default function HeroContent({ title }: HeroContentProps) {
    return (

        <div className="absolute inset-0 flex flex-col items-center justify-center   ">
            <div className="max-w-5xl text-center  font-medium bg-main/30 rounded-2xl p-6">
                <h1 className=" md:text-header-md text-header-sm   text-white   mb-6">{title}</h1>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="#" className=" hover:tracking-wider border-2 border-main  rounded-2xl px-8 py-3 text-2xl font-medium bg-main text-white  transition-colors">
                        READ MORE
                    </Link>

                </div>
            </div>
        </div>

    )
}
