import { useState } from "react";
import { CertificationCard } from "./CertificationCard";
import { CertificateModal } from "./CertificateModal";
import { certificationsData } from "../../data/certificationsData";

import Image from "../../../assets/1.png";

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <img
            src={Image}
            alt="Decorative"
            className="mx-auto mb-10 w-32 h-32"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <CertificationCard
                key={index}
                cert={cert}
                onClick={setSelectedCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
