'use client'
import React, { useState } from 'react';
import CertificateCard from './CertificationCard';
import CertificateModal from './CertificateModal';
import SectionContainer from '@/components/styles-wrappers/SectionContainer';

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
    <SectionContainer 
      title="Certificates" 
      description="UNICO Petroleum is proudly certified with international quality management standard demonstrating our commitment to excellence in the oil and gas industry."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
        {certificateImages.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onClick={() => openModal(cert)}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={selectedCertificate !== null}
        onClose={closeModal}
      />
    </SectionContainer>
  );
};

export default CertificatesSection;
