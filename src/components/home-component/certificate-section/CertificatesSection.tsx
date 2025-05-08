'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award, Shield } from 'lucide-react';

// TypeScript interfaces
interface Certificate {
    id: number;
    thumbnail: string;
    fullImage: string;
    title: string;
}

// These would be your actual certificate images
const certificateImages: Certificate[] = [
    {
        id: 1,
        thumbnail: '/images/hero-img/slider1.webp', // Use your actual first certificate thumbnail
        fullImage: '/images/hero-img/slider1.webp',      // Use your actual first certificate full image
        title: 'ISO 9001:2008'
    },
    {
        id: 2,
        thumbnail: '/images/hero-img/slider1.webp', // Use your actual second certificate thumbnail
        fullImage: '/images/hero-img/slider1.webp',      // Use your actual second certificate full image
        title: 'BS EN ISO 9001:2008'
    }
    // Add more certificates as needed
];

const CertificatesSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const openModal = (image: Certificate, index: number): void => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = (): void => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const nextImage = (e: React.MouseEvent): void => {
        e.stopPropagation();
        const newIndex = (currentImageIndex + 1) % certificateImages.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(certificateImages[newIndex]);
    };

    const prevImage = (e: React.MouseEvent): void => {
        e.stopPropagation();
        const newIndex = (currentImageIndex - 1 + certificateImages.length) % certificateImages.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(certificateImages[newIndex]);
    };

    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#c89e58] opacity-10"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#c89e58] opacity-10"></div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-2"
                    >
                        <Shield className="inline-block text-[#c89e58] w-8 h-8 mr-2" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl font-bold text-gray-800 mb-4"
                    >
                        Our Certifications
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-[#c89e58] mx-auto mb-6"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        UNICO Petroleum is proudly certified with international quality management standards,
                        demonstrating our commitment to excellence in the oil and gas industry.
                    </motion.p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {certificateImages.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            onClick={() => openModal(cert, index)}
                        >
                            <div className="relative p-4 h-64 flex items-center justify-center overflow-hidden">
                                {/* Use the actual certificate image here */}
                                <img
                                    src={cert.thumbnail}
                                    alt={`${cert.title} Certificate`}
                                    className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-[#c89e58] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <Award className="w-6 h-6 text-[#c89e58]" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-100">
                                <h3 className="font-medium text-gray-800">{cert.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">Click to view full certificate</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for full certificate view */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Certificate viewer header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <h3 className="font-bold text-lg">{selectedImage.title}</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Certificate image */}
                            <div className="p-4 bg-gray-50 flex items-center justify-center overflow-auto max-h-[70vh]">
                                <img
                                    src={selectedImage.fullImage}
                                    alt={`${selectedImage.title} Certificate`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Navigation buttons */}
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <button
                                    onClick={prevImage}
                                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                <button
                                    onClick={nextImage}
                                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificatesSection;