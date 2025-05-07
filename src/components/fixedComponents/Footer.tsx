"use client";
import Link from "next/link";
import { media } from "@/consts/media";
import { openPdfInNewTab, downloadPdf } from "../../utils/footerUtils";
import { FileDown, FileText, View } from "lucide-react";

function Footer() {
  const brochurePath = "/assets/brochure/brochureFromPetroleum.pdf";

  return (
    <>
      <div className=" footerBg text-white pt-10 pb-3 w-full  bg-fixedComponentBg ">
        <div className="w-full sm:w-3/5 md:w-4/5 mx-auto">
          <div className="px-5">
            <p
              className=" text-lg md:text-2xl mb-6 w-full
             text-center U-fromUnico mx-2 flex items-center justify-center"
            >
              NICO Media
            </p>
            <div
              className="flex justify-around items-center
           w-10/12 md:w-9/12   mx-auto "
            >
              {media.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="p-3 rounded-full
                bg-black/20
               text-white hover:opacity-80
                transition  hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>

          <hr className="w-full h-0.5 text-main bg-main mx-auto my-2 " />
          <div className="w-full py-2">
            <p
              className="  sm:text-lg md:text-2xl 
           mb-6  text-nowrap flex gap-1 justify-center w-full"
            >
              <FileText />
              View Or Download Our Brochure
            </p>

            <div className="flex gap-5 justify-center">
              <button
                onClick={() => openPdfInNewTab(brochurePath)}
                className="bg-main hover:bg-main/80 cursor-pointer hover:shadow-2xl
                 text-white px-4 py-2 rounded-md text-sm transition duration-300
                 flex gap-3
                 items-center
                 "
              >
                <View size={20} /> View
              </button>
              <button
                onClick={() => downloadPdf(brochurePath, "brochure")}
                className="border-main border-3 text-white
                cursor-pointer hover:shadow-xl shadow-main/10
                  px-4 py-2 rounded-md text-sm transition duration-300
                  
                                   flex gap-3
                 items-center
"
              >
                <FileDown size={20} />
                Download
              </button>
            </div>
          </div>
          <hr className="w-full h-0.5  text-main bg-main mx-auto my-2 " />
          <p className="flex  justify-center items-center">
            <span className="scale-125 pt-0.5 mx-1 tracking-widest">© </span>
            {new Date().getFullYear().toString()}{" "}
            <span className="mx-2.5"> UNICO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
