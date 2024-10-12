// Lib
import React from 'react'

// Firebase
import FirebaseImage from '@/components/firebase/firebase-image'

// Include in project
import { TCertificate } from '@/lib/type'

const CertificateCard: React.FC<TCertificate> = ({ image, title }) => {
  return (
    <div>
      <FirebaseImage
        imagePath={image}
        alt={`certificate-${title}`}
        className="w-full aspect-video object-fill grayscale border-4 border-foreground"
      />
      <div className="h-max p-2 flex justify-center items-center text-center">
        <h6 className="text-foreground font-bold line-clamp-2">{title}</h6>
      </div>
    </div>
  )
}

export default CertificateCard
