
import { motion } from 'framer-motion';






interface Certificate {
    id: number;
    thumbnail: string;
    fullImage: string;
    title: string;
}
interface CertificateCardProps {
    certificate: Certificate;
    onClick: () => void;
}
const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
            onClick={onClick}
        >
            <div className="md:mx-0 mx-5 bg-white rounded-lg overflow-hidden cursor-pointer relative shadow-lg transform transition-all duration-500 ">
                {/* <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-main via-main/10 to-main opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

                <div className="relative bg-white rounded-lg overflow-hidden p-4 z-10">
                    <div className="h-64 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
                        <motion.div
                            className="w-full h-full relative flex items-center justify-center"

                        >
                            <img
                                src={certificate.thumbnail}
                                alt={`${certificate.title} Certificate`}
                                className="object-contain max-h-full max-w-full z-10 relative"
                            />

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-main/20 to-transparent"
                                initial={{ x: -250, opacity: 0 }}
                                whileHover={{ x: 250, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </motion.div>
                    </div>

                    <div className="mt-4 relative">
                        <div className="h-0.5 w-0 bg-main absolute -top-2 left-0 group-hover:w-full transition-all duration-700 ease-out" />

                        <h3 className="font-bold text-gray-800 text-xl  transition-colors duration-300">{certificate.title}</h3>
                        <p className="text-sm text-gray-500 mt-2">Tap to view certificate</p>
                    </div>
                </div>
            </div>


        </motion.div>
    );
};
export default CertificateCard