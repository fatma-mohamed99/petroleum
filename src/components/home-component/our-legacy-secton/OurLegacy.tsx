'use client'

import React from 'react';
import { motion } from 'framer-motion';
import UnicoBackgroundSVG from './UnicoBackgroundSVG';

const OurLegacy: React.FC = () => {
    return (
        <section className="relative w-full min-h-[40rem]  py-16">
            <div className="absolute inset-0 w-full h-full opacity-20 mx-auto bg-black/40 ">
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
                    <h2
                        className="text-header-md md:text-header-lg font-bold mb-2 text-textColor"
                    >
                        Our Legacy
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="max-w-4xl mx-auto  backdrop-contrast-75 bg-main/10 rounded-lg p-8 shadow-lg"
                >
                    <p
                        className="text-desc-lg leading-relaxed text-center font-medium"
                        style={{ color: 'var(--color-textColor)' }}
                    >
                        Over the years,

                        <span
                            className="  
              U-fromUnico mx-2  inline-flex text-center items-center justify-center my-auto "
                        >
                            <span className='mt-1 text-header-sm'> NICO</span>
                        </span>


                        petroleum   developed a reputation across the region as a reliable provider of EPCC services in the Oil and Gas industry. Its commitment to the highest standards of quality, safety, and service level has been evident in the variety of projects it has completed on time and within budget and continues to be at the heart of the company's vision for the future
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default OurLegacy;