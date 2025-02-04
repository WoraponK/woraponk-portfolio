// Lib
import Link from 'next/link'
import React from 'react'

// Images
import { FaArrowUpLong } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="container mx-auto text-center pb-8 grid place-items-center">
      <Link
        href="#main"
        onClick={(e) => handleSmoothScroll(e)}
        className="flex items-center justify-center space-x-2 cursor-pointer w-fit"
      >
        <FaArrowUpLong />
        <h6>Back to top</h6>
      </Link>
    </footer>
  )
}

export default Footer
