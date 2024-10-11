// Lib
import React from 'react'
import Link from 'next/link'

// Shadcn
import { Button } from '@/components/ui/button'

// Include in project
import social from '@/assets/social'
import { handleSmoothScroll } from '@/lib/others'

const titleText = ['THIS', 'IS', "WK'S", 'STORY']

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-12 text-center">
      <h1 className="flex flex-col font-black text-8xl max-md:text-7xl max-sm:text-5xl">
        {titleText.map((ele, index) => (
          <span key={index} className={`${index % 2 ? 'text-background' : ''}`}>
            {ele}
          </span>
        ))}
      </h1>
      <h3 className="px-32 max-md:px-0">
        Welcome to my portfolio! Here, you&apos;ll find a showcase of my UX/UI design and frontend development
        expertise, all focused on creating exceptional user experiences. Feel free to explore my work!
      </h3>
      <Link href={'#about'} onClick={(e) => handleSmoothScroll(e, '#about')}>
        <Button size="lg" variant="dark">
          About me
        </Button>
      </Link>

      {/* Social */}
      <div className="flex gap-6 flex-wrap text-4xl">
        {social?.map((ele, index) => (
          <Link key={index} href={ele.href} className="transition-colors hover:text-background" target="_blank">
            {ele.logo}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default WelcomeSection
