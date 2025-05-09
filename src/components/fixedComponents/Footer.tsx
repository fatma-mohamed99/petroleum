"use client";
import Link from "next/link";
import { media } from "@/consts/media";
import { openPdfInNewTab, downloadPdf } from "../../utils/footerUtils";
import { FileDown, FileText, View, Mail, MapPin, Phone } from "lucide-react";
import { aboutUsLinks } from "@/consts/aboutUs";

function Footer() {
  const brochurePath = "/assets/brochure/brochureFromPetroleum.pdf";
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="footerBg text-white pt-8 pb-4 w-full bg-fixedComponentBg">
      <div className="w-11/12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 U-fromUnico">
              NICO Media
            </h3>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-xs">
              {media.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="p-3 rounded-full bg-black/30 text-white hover:bg-main/70 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.id} page`}
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-x-2 mt-6">
              <FileText size={24} />
              <span>Our Brochure</span>
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => openPdfInNewTab(brochurePath)}
                className="bg-main hover:bg-main/80 text-white px-5 py-2.5 rounded-md text-sm transition duration-300 flex gap-2 items-center shadow-md hover:shadow-xl"
                aria-label="View brochure"
              >
                <View size={18} /> View
              </button>
              <button
                onClick={() => downloadPdf(brochurePath, "brochure")}
                className="border-2 border-main text-white px-5 py-2.5 rounded-md text-sm transition duration-300 flex gap-2 items-center shadow-md hover:shadow-xl hover:bg-black/40"
                aria-label="Download brochure"
              >
                <FileDown size={18} /> Download
              </button>
            </div>
          </div>
        </div>

        <hr className="w-full h-0.5 bg-main my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              About Us
            </h3>
            <div className="flex flex-wrap justify-center gap-1 lg:gap-6 w-full max-w-md">
              {aboutUsLinks.map((link) => (
                <Link
                  href={link.target}
                  key={link.title}
                  className="px-4 py-2 rounded-xl bg-black/30 text-sm hover:bg-main/70 text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Connect Us
            </h3>
            <div className="flex flex-col gap-3 w-full max-w-md items-center">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-main" />
                <p>Beirut - Lebanon</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-main" />
                <p>+961 79 11 98 81</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-main" />
                <a
                  href="mailto:info@unico-petroleum.com"
                  className="hover:text-main transition-colors duration-300"
                >
                  info@unico-petroleum.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-0.5 bg-main my-6" />

        {/* Copyright section */}
        <div className="text-center text-sm md:text-base">
          <p className="flex justify-center items-center">
            <span className="text-lg mr-1">©</span> {currentYear}{" "}
            <span className="mx-2 font-semibold">UNICO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;