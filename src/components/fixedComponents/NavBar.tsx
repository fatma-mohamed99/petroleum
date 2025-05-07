"use client";
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-main/90 shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className=" relative rounded-full w-32 h-14 bg-main/20 ">

                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className=" absolute object-contain "
                        />
                    </div>

                    {/* ####################### */}
                    <div className="hidden lg:flex font-semibold items-start xl:text-title-lg text-title-md space-x-8">
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">About Us  </Link>
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">Specialties </Link>
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">Experties </Link>
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">Principle </Link>
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">Suppliers </Link>
                        <Link href="#" className=" hover:bg-main/40 p-2 rounded-2xl transition-colors">Projects </Link>
                    </div>

                    {/* ########################## */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-main  cursor-pointer"
                        >
                            <Menu size={40} />
                        </button>
                    </div>
                </div>

                {/* ####################### */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-main/90 mt-2 py-4 px-2 font-semibold text-title-md rounded-lg">

                        <div className="flex flex-col space-y-4">
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">About Us</Link>
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">Specialties</Link>
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">Experties</Link>
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">Principle</Link>
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">Suppliers</Link>
                            <Link href="#" className=" hover:bg-secondary transition-colors px-3 py-2">Projects</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;