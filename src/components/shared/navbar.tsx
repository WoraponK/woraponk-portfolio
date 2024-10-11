'use client'

// Lib
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// Shadcn
import { Button } from '@/components/ui/button'

// Include in project
import path from '@/assets/path'
import { handleSmoothScroll } from '@/lib/others'

const Navbar: React.FC = () => {
  const [isShow, setIsShow] = useState(true)
  const [isOnTop, setIsOnTop] = useState(false)

  let lastScroll = 0
  const threshold = 1

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsOnTop(true)
    } else if (window.scrollY - lastScroll >= threshold) {
      setIsShow(false)
    } else {
      setIsShow(true)
      setIsOnTop(false)
    }
    lastScroll = window.scrollY
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      className={`sticky transition-all duration-300 backdrop-blur-md ${isShow ? 'top-0' : 'top-[-12rem]'} ${
        isOnTop ? 'bg-transparent text-foreground' : 'bg-black/50 text-background'
      } left-0 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between py-6 relative">
        <Link href={'/'}>
          <div className="flex flex-col w-fit group">
            <h4 className="font-black">
              W<span className="max-sm:hidden">ORAPON</span>
              <span className={`${isOnTop ? 'text-background' : 'text-primary'}`}>K</span>
            </h4>
            <div
              className={`w-0 h-1 bg-background transition-all duration-200 group-hover:w-full ${
                isOnTop ? 'bg-background' : 'bg-primary'
              }`}
            />
          </div>
        </Link>
        <div className="space-x-6 flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-lg:hidden">
          {path?.map((ele, index) => (
            <Link
              href={ele.href}
              key={index}
              className="group flex flex-col"
              onClick={(e) => ele.href.startsWith('#') && handleSmoothScroll(e, ele.href)}
            >
              <span className="font-semibold">{ele.title}</span>
              <div
                className={`w-0 h-[1px] transition-all duration-200 group-hover:w-full ${
                  isOnTop ? 'bg-foreground' : 'bg-background'
                }`}
              />
            </Link>
          ))}
        </div>
        <Link href={'#contact'} onClick={(e) => handleSmoothScroll(e, '#contact')}>
          <Button variant="dark" size="sm" className={`${!isOnTop && 'bg-background text-foreground'}`}>
            Contact me
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
