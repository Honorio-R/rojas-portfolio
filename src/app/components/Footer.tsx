import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-[#1c2a3d] bg-[#f0f4f8] dark:bg-[#080c12] transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-mono text-sm font-bold text-[#4d93ff]">dev.portfolio</span>
            <p className="font-mono text-xs text-[#7a8899] mt-1">
              © {new Date().getFullYear()} Honorio R. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/Honorio-R" className="text-[#7a8899] hover:text-[#4d93ff] transition-colors duration-200">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/honorio-r/" className="text-[#7a8899] hover:text-[#4d93ff] transition-colors duration-200">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer