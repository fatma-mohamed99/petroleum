"use client";
import Link from "next/link";
import { openPdfInNewTab, downloadPdf } from "../../utils/footerUtils";
import { FileDown, FileText, View, Mail, MapPin, Phone } from "lucide-react";
import { aboutUsLinks } from "@/consts/aboutUs";
import { Button } from "../ui/Button";

function Footer() {
  const brochurePath = "/assets/brochure/brochureFromPetroleum.pdf";
  const currentYear = new Date().getFullYear().toString();


  return (
    <footer className="footerBg text-white pt-8 pb-4 w-full bg-fixedComponentBg">
      <div className="w-11/12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">


          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">About Us</h3>
            <div className="flex flex-col gap-2">
              {aboutUsLinks.map((link) => (
                <Link
                  href={link.target}
                  key={link.title}
                  className="px-4 py-2 w-fit cursor-pointer  text-sm hover:bg-main/70 text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <p>Beirut - Lebanon</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <p>+961 79 11 98 81</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a
                  href="mailto:info@unico-petroleum.com"
                  className="hover:text-main cursor-pointer  transition-colors duration-300"
                >
                  info@unico-petroleum.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Certification</h3>
            <div className="flex flex-col gap-3 ">
              <img src="/images/certificates/cert1.png" alt="Certification 1" className="w-32 h-12 " />
              <img src="/images/certificates/cert1.png" alt="Certification 2" className="w-32 h-12 " />
              <img src="/images/certificates/cert1.png" alt="Certification 3" className="w-32 h-12 " />
            </div>
          </div>


          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-x-2">
              <FileText size={24} />
              Brochure
            </h3>
            <div className="flex flex-col gap-3 items-center">
              <Button
                onClick={() => openPdfInNewTab(brochurePath)}
                className="flex gap-2 pr-2"
              >
                <View size={18} /> <p>VIEW</p>
              </Button>
              <Button
                              className="flex gap-2 pr-2"


                onClick={() => downloadPdf(brochurePath, "brochure")}
              >
                <FileDown size={18} /> Download
              </Button>
            </div>
          </div>

        </div>

        <hr className="w-full h-0.5 bg-secondary my-6" />

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