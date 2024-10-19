// Lib
import React from 'react'

// Firebase
import FirebaseImage from '../firebase/firebase-image'

// Include in project
import { TAward } from '@/lib/type'

const AwardCard: React.FC<TAward> = ({ image, title }) => {
  return (
    <div className="bg-foreground aspect-video max-md:aspect-auto max-md:h-[600px] max-sm:h-[500px] max-xs:h-[350px]">
      <div className="h-full w-full absolute place-content-end z-10">
        <h6 className="px-3 py-1 line-clamp-1 break-all bg-gradient-to-t text-background from-black to-transparent">
          {title}
        </h6>
      </div>
      <FirebaseImage imagePath={image} alt={`award-${title}`} className="h-full w-full object-cover grayscale" />
    </div>
  )
}

export default AwardCard
