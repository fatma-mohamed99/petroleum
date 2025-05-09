"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import NavLinks from '../navComponents/NavLinks';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-textColor 
        ${scrolled ? 'bg-fixedComponentBg  shadow-main/50 shadow-lg text-white' : 'bg-white/70 text-textColor '}
        
        `}>

            <div className="container mx-auto px-5 py-3">
                <div className="flex justify-between items-center">
                    <div className=" relative rounded-full w-32 h-14 ">

                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className=" absolute object-contain "
                        />
                    </div>

                    {/* ####################### */}
                    <div className="hidden lg:flex font-semibold items-start 
                    xl:text-title-lg text-title-md space-x-6   
">
                        <NavLinks />
                    </div>

                    {/* ########################## */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`${scrolled ? "text-white" : "text-textColor"}  z-20 cursor-pointer`}
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