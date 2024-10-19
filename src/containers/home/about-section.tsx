// Lib
import React from 'react'
import Image from 'next/image'

// Shadcn
import { Button } from '@/components/ui/button'

// Images
import ProfilePNG from '@/images/portrait/profile.jpg'
import { GoArrowDown } from 'react-icons/go'
import Link from 'next/link'

const AboutSection: React.FC = () => {
  return (
    <div className="bg-foreground">
      <div className="container mx-auto">
        <div
          id="about"
          className="w-full bg-foreground grid grid-cols-[30%_70%] place-items-center max-md:flex max-md:flex-col"
        >
          <Image alt="profile" src={ProfilePNG} className="grayscale h-full object-contain" />
          <div className="p-8 space-y-6 flex flex-col">
            <h2 className="text-background">About</h2>
            <h3 className="text-primary max-md:text-2xl max-sm:text-lg">
              Hey, My name is Worapon Klabsri and I use "Tell" as my nickname across social medias, I'm a front-end
              Developer based from Thailand. I'm always curious to learn more when it comes to new technologies and
              creative coding.
            </h3>
            <Link href={'/files/resume.pdf'} target="_blank" className="space-x-2 w-fit self-end">
              <Button variant="light" size="lg">
                <GoArrowDown />
                <span>Resume</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
