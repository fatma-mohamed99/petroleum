"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import NavLinks from '../navComponents/NavLinks';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {

            } else {

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 text-textColor 
       
        
        `}>

            <div className="container mx-auto max-w-[95%] md:max-w-[85%]  xl:max-w-[75%] 2xl:max-w-[70%] px-5 py-3">
                <div className="flex justify-between items-center">
                    <div className=" relative min-w-32 min-h-14 flex-1 flex items-start ">

                        <Link href="/" className='cursor-pointer'>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* ####################### */}
                    <div className="hidden lg:flex 
">
                        <NavLinks />
                    </div>

                    {/* ########################## */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`text-textColor  z-20 cursor-pointer`}
                        >
                            <Menu size={40} />
                        </button>
                    </div>
                </div>

                {/* ####################### */}
                {isMenuOpen && (
                    <div ref={menuRef} className="lg:hidden bg-main mt-2 py-4 px-2 font-semibold text-title-md rounded-lg">

                        <div className="flex flex-col space-y-4 text-white">
                            <NavLinks />

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;