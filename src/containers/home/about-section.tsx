// Lib
import React from 'react'
import Image from 'next/image'

// Shadcn
import { Button } from '@/components/ui/button'

// Images
import ProfilePNG from '@/images/portrait/profile.jpg'
import { GoArrowDown } from 'react-icons/go'

const AboutSection: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full bg-foreground grid grid-cols-[30%_70%] place-items-center max-md:flex max-md:flex-col"
    >
      <Image alt="profile" src={ProfilePNG} className="grayscale" />
      <div className="p-8 space-y-6 flex flex-col">
        <h2 className="text-background">About</h2>
        <h3 className="text-primary max-md:text-2xl max-sm:text-lg">
          Hey, My name is Worapon Klabsri and I use "Tell" as my nickname across social medias, I&apos;m a front-end
          Developer based from Thailand. I&apos;m always curious to learn more when it comes to new technologies and
          creative coding.
        </h3>
        <Button variant="light" className="space-x-2 w-fit self-end" size="lg">
          <GoArrowDown />
          <span>Resume</span>
        </Button>
      </div>
    </div>
  )
}

export default AboutSection
