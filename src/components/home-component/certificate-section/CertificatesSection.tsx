'use client'
import React, { useState } from 'react';

import CertificateCard from './CertificationCard';
import CertificateModal from './CertificateModal';

interface Certificate {
    id: number;
    thumbnail: string;
    fullImage: string;
    title: string;
}

const CertificatesSection: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const certificateImages: Certificate[] = [
        {
            id: 1,
            thumbnail: '/images/certificates/cert1.png',
            fullImage: '/images/certificates/certi1.png',
            title: 'ISO 9001:2008'
        },
        {
            id: 2,
            thumbnail: '/images/certificates/cert1.png',
            fullImage: '/images/certificates/certi1.png',
            title: 'ISO 9001:2008'
        },
        {
            id: 3,
            thumbnail: '/images/certificates/cert1.png',
            fullImage: '/images/certificates/certi1.png',
            title: 'ISO 9001:2008'
        }
    ];

    const openModal = (certificate: Certificate): void => {
        setSelectedCertificate(certificate);
    };

    const closeModal = (): void => {
        setSelectedCertificate(null);
    };

    return (
        <section className="relative -mt-14 pb-15">




            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    {/* <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="w-20 h-20 rounded-full bg-main/10 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4"
                    /> */}

                    {/* <div

                        className="inline-block mb-3 relative"
                    >
                        <Shield className="w-10 h-10 text-main" />
                    </div> */}


                    <p
                        className=" 
            text-header-sm md:text-header-md 
           
            w-full
             text-center ali 
             U-fromUnico  flex
             font-bold
             items-center justify-center  "


                    >
                        NICO certificates
                    </p>



                    <p

                        className="text-textColor max-w-2xl text-title-sm mx-auto px-2"
                    >
                        UNICO Petroleum is proudly certified with international quality management standards,
                        demonstrating our commitment to excellence in the oil and gas industry.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 align-middle justify-center gap-8 max-w-5xl mx-auto"
                >
                    {certificateImages.map((cert) => (
                        <div
                            key={cert.id}

                        >
                            <CertificateCard
                                certificate={cert}
                                onClick={() => openModal(cert)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CertificateModal
                certificate={selectedCertificate}
                isOpen={selectedCertificate !== null}
                onClose={closeModal}
            />
        </section>
    );
};

export default CertificatesSection;