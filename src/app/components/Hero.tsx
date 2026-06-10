"use client"

import { fadeInUp, scaleIn, staggerContainer } from '@/utils/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-7">
              <span className="font-mono text-xs text-[#1e6ff5] tracking-widest uppercase">
                // open for opportunities
              </span>
              <div className="h-px w-16 bg-[#1c2a3d]" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-5 mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-[#1e6ff5]/40 shrink-0">
                <Image
                  src="/projects/profile.png"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-fill"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
                Hi, I&apos;m {' '}
                <span className="text-[#4d93ff]">Honorio Rojas</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base text-[#7a8899] mb-8 leading-relaxed max-w-md">
              A Full-Stack Developer specializing in C# .NET, Angular, and Next.js. I create responsive web and mobile applications with a focus on performance and user experience. Currently open to new opportunities and collaborations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-9">
              <Link
                href="/projects"
                className="bg-[#1e6ff5] text-white px-6 py-2.5 rounded font-semibold text-sm tracking-wide hover:bg-[#4d93ff] transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contacts"
                className="border border-gray-300 dark:border-[#1c2a3d] text-[#7a8899] px-6 py-2.5 rounded text-sm tracking-wide hover:border-[#1e6ff5] hover:text-[#4d93ff] transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div variants={scaleIn}>
            <div className="bg-[#111720] border border-[#1c2a3d] rounded-lg p-6 font-mono text-sm leading-7 shadow-2xl shadow-black/30">
              <div className="flex gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>

              <div className="text-[#e8edf5] space-y-0.5">
                <div>
                  <span className="text-[#4d93ff]">const</span>{' '}
                  <span className="text-[#f7c67a]">information</span>{' '}
                  <span className="text-[#e8edf5]">= {'{'}</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#63d4a6]">name</span>
                  <span className="text-[#e8edf5]">: </span>
                  <span className="text-[#f7c67a]">&quot;Honorio Rojas&quot;</span>
                  <span className="text-[#e8edf5]">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#63d4a6]">role</span>
                  <span className="text-[#e8edf5]">: </span>
                  <span className="text-[#f7c67a]">&quot;Full-Stack Dev&quot;</span>
                  <span className="text-[#e8edf5]">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#63d4a6]">stack</span>
                  <span className="text-[#e8edf5]">: [</span>
                  <span className="text-[#f7c67a]">&quot;C#&quot;</span>
                  <span className="text-[#e8edf5]">, </span>
                  <span className="text-[#f7c67a]">&quot;Angular&quot;</span>
                  <span className="text-[#e8edf5]">, </span>
                  <span className="text-[#f7c67a]">&quot;Next.js&quot;</span>
                  <span className="text-[#e8edf5]">],</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#63d4a6]">availability</span>
                  <span className="text-[#e8edf5]">: </span>
                  <span className="text-[#4d93ff]">true</span>
                  <span className="text-[#e8edf5]">,</span>
                </div>
                <div><span className="text-[#e8edf5]">{'};'}</span></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero