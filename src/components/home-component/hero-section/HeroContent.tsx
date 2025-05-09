import React from 'react'
import Link from 'next/link';
interface HeroContentProps {
    title: string;
}
export default function HeroContent({ title }: HeroContentProps) {
    return (

        <div className="absolute inset-0 flex flex-col items-start justify-end p-5  ">
            <div className=" max-w-fit text-center  font-medium text-white ">
                {/* <p
                    className="bg-black/40 rounded-2xl p-2 md:text-header-md text-header-sm mb-6 w-full
             text-center U-fromUnico mx-2 flex  items-center justify-center font-medium  "
                >
                    NICO petroleum
                </p> */}
                <h1 className=" lg:text-header-md text-start text-header-sm  bg-black/40 rounded-lg px-6 py-2 text-white   items-center justify-center   mb-6">{title}

                    <Link href="#" className=" inline text-nowrap     px-2  text-2xl font-medium  hover:text-white rounded-lg  text-gray-300 underline transition-colors my-auto">
                        Read more
                    </Link>

                </h1>

                {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="#" className="     rounded-lg px-4 py-2 text-2xl font-medium bg-main hover:bg-main/50 text-white  transition-colors">
                        Read more
                    </Link>

                </div> */}
            </div>
        </div>

    )
}
