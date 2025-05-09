'use client'

import React from 'react';
import { motion } from 'framer-motion';
import UnicoBackgroundSVG from './UnicoBackgroundSVG';

const OurLegacy: React.FC = () => {
    return (
        <section className="relative w-full min-h-[35rem] py-16">
            <div className="absolute inset-0 w-full h-full opacity-20 mx-auto  ">
                <UnicoBackgroundSVG />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p
                        className=" 
            text-header-sm md:text-header-md 
           
            w-full
             text-center ali 
             U-fromUnico  flex
             font-bold
             items-center justify-center -mt-5 "


                    >
                        NICO Legacy
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="sm:max-w-3xl max-w-[95%] mx-auto   bg-main/10 backdrop-blur-[1.9px] rounded-lg p-8 shadow-lg"
                >
                    <p
                        className="text-title-lg leading-relaxed text-center font-normal text-textColor"

                    >
                        Over the years,

                        {/* <span
                            className="  
              U-fromUnico mx-2  inline-flex text-center items-center justify-center my-auto "
                        >
                            <span className='mt-1 md:text-header-sm text-title-md'> NICO</span>
                        </span> */}


                        <span className='text-main font-bold'>Unico</span>       petroleum   developed a reputation across the region as a reliable provider of <b className='mx-1'>EPCC</b>services in the Oil and Gas industry. Its commitment to the highest standards of quality, safety, and service level has been evident in the variety of projects it has completed on time and within budget and continues to be at the heart of the company's vision for the future
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default OurLegacy;