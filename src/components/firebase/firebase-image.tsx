'use client'

import { useEffect, useState } from 'react'
import Image, { ImageProps as NextImageProps } from 'next/image' // Import the Next.js Image component and its props type

import imagePlaceholder from '@/images/common/image-placeholder.svg'

interface FirebaseImageProps extends Partial<NextImageProps> {
  imagePath: string
}

import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@/lib/firebase'

const getImageUrl = async (path: string): Promise<string> => {
  if (!path) {
    throw new Error('Path is required to get the image URL.')
  }

  try {
    const imageRef = ref(storage, path)
    const url = await getDownloadURL(imageRef)
    return url
  } catch (error) {
    console.error('Error getting image URL:', error)
    throw new Error(`Failed to get image URL for path: ${path}`)
  }
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  imagePath,
  alt = 'Firebase Image',
  width = 500,
  height = 300,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await getImageUrl(imagePath)
        setImageUrl(url)
      } catch (error) {
        console.error('Failed to fetch image URL:', error)
      }
    }

    fetchImageUrl()
  }, [imagePath])

  if (!imageUrl) return <Image src={imagePlaceholder} alt={alt} width={width} height={height} {...props} />

  return <Image src={imageUrl} alt={alt} width={width} height={height} {...props} />
}

export default FirebaseImage
