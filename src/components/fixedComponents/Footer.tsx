"use client";
import Link from "next/link";
import { openPdfInNewTab, downloadPdf } from "../../utils/footerUtils";
import { FileDown, FileText, View, Mail, MapPin, Phone, X } from "lucide-react";
import { aboutUsLinks } from "@/consts/aboutUs";
import { Button } from "../ui/Button";
import { useState } from "react";

function Footer() {
  const brochurePath = "/assets/brochure/brochureFromPetroleum.pdf";
  const currentYear = new Date().getFullYear().toString();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className="footerBg text-white pt-8 pb-4 w-full bg-fixedComponentBg relative">
      <div className="absolute left-17.5 -top-1 h-6 w-6 rounded-full
        bg-main  animate-ping " />

      <div className="w-11/12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">About Us</h3>
            <div className="flex flex-col gap-2">
              {aboutUsLinks.map((link) => (
                <Link
                  href={link.target}
                  key={link.title}
                  className="px-4 py-2 w-fit cursor-pointer text-sm hover:bg-main/70 text-white transition duration-300"
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
                  className="hover:border-white  border-transparent      border-b-2  cursor-pointer transition-colors duration-300"
                >
                  info@unico-petroleum.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Certification</h3>
            <div className="flex flex-col gap-3">
              <img
                src="/images/certificates/cert1.png"
                alt="Certification 1"
                className="w-40 h-16 brightness-[30%] hover:brightness-100 contrast-125 cursor-pointer transition-all duration-500"
                onClick={() => openImageModal("/images/certificates/cert1.png")}
              />
              <img
                src="/images/certificates/cert1.png"
                alt="Certification 2"
                className="w-40 h-16 brightness-[30%] hover:brightness-100 contrast-125 cursor-pointer transition-all duration-500"
                onClick={() => openImageModal("/images/certificates/cert1.png")}
              />
              <img
                src="/images/certificates/cert1.png"
                alt="Certification 3"
                className="w-40 h-16 brightness-[30%] hover:brightness-100 contrast-125 cursor-pointer transition-all duration-500"
                onClick={() => openImageModal("/images/certificates/cert1.png")}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-0.5">
              <FileText size={24} />
              Brochure
            </h3>
            <p className="text-sm mb-3 text-gray-300 leading-relaxed">
              You can Download Or View our comprehensive company brochure to learn more about our products, services, and industry expertise.
            </p>

            <div className="flex  gap-3 items-center">
              <Button
                onClick={() => openPdfInNewTab(brochurePath)}
                className="flex gap-2 pr-2 items-center"
                bgColor="#131E48"
                size="sm"
              >
                <View size={18} /> <a>VIEW</a>
              </Button>
              <Button
                className="flex gap-2 pr-2 items-center"
                bgColor="#131E48"
                size="sm"
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

      {modalOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <div className="relative bg-fixedComponentBg p-4 rounded-lg max-w-4xl w-96 h-72 ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 font-bold text-main  hover:bg-main hover:text-white rounded-full cursor-pointer transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex justify-center items-center  min-h-60 ">
              <img
                src={selectedImage}
                alt="Certificate"
                className=" max-w-full object-cover w-72 h-56"
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;