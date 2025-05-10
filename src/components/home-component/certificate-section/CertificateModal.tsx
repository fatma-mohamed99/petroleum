import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';



interface Certificate {
    id: number;
    thumbnail: string;
    fullImage: string;
    title: string;
}



interface CertificateModalProps {
    certificate: Certificate | null;
    isOpen: boolean;
    onClose: () => void;
}






const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
    if (!certificate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/15 backdrop-blur-xs z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main/30 to-transparent"></div>
                    <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main/30 to-transparent"></div> */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
                    />

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-main to-transparent"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                        className="relative w-fit max-w-4xl "
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 p-1 bg-gradient-to-br from-main/15 via-main/10 to-main/10 animate-pulse" />

                        <div className=" o shadow-2xl relative z-10">
                            <div className="bg-gradient-to-r  to-main/10 p-1 ml-1 flex items-center justify-between">
                                <h3 className="font-bold text-title-md text-white drop-shadow-sm">{certificate.title}</h3>

                                <div
                                    className="bg-black/20 text-white hover:bg-white/30  cursor-pointer p-1 mr-1 transition-colors"
                                    onClick={onClose}
                                >
                                    <X className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="bg-white/40 p-2  flex items-center justify-center relative">


                                <div className="relative z-10 p-6  shadow-lg border bg-white border-main/20">
                                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-main" />
                                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-main" />
                                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-main" />
                                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-main" />

                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        src={certificate.fullImage}
                                        alt={`${certificate.title} Certificate`}
                                        className="max-w-full max-h-[67vh]  object-contain drop-shadow-md"
                                    />
                                </div>

                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};



export default CertificateModal