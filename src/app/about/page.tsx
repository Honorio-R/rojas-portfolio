"use client"

import React from 'react'
import Image from 'next/image'
import { FaCode, FaLaptopCode, FaTools } from 'react-icons/fa'
import { skills, experiences, education } from '@/contents/about'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animation'

const SectionHeader = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs text-[#1e6ff5] tracking-widest uppercase">{label}</span>
    <div className="flex-1 h-px bg-gray-200 dark:bg-[#1c2a3d]" />
  </div>
)

const About = () => {
  return (
    <motion.div
      className="container max-w-7xl mx-auto py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* ── bio ── */}
      <motion.section className="mb-20" variants={fadeInUp}>
        <SectionHeader label="// about me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6 justify-center md:justify-start">
            <div className="flex flex-col w-50 h-60 rounded-xl overflow-hidden ring-2 ring-[#1e6ff5]/30 ring-offset-4 ring-offset-[#f0f4f8] dark:ring-offset-[#080c12]">
              <Image src="/projects/profile.png" alt="Profile" width={176} height={176} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-row gap-4">
              <a
                className="border border-gray-300 dark:border-[#1c2a3d] text-[#7a8899] px-6 py-2.5 rounded text-sm tracking-wide hover:border-[#1e6ff5] hover:text-[#4d93ff] transition-colors"
                href='/projects'>View Projects</a>
              <a
                className="bg-[#1e6ff5] text-white px-6 py-2.5 rounded font-semibold text-sm tracking-wide hover:bg-[#4d93ff] transition-colors"
                href='/documents/Honorio_Rojas_CV.pdf'>
                Download Resume
              </a>
            </div>
          </div>

          <div className='mt-4 flex gap-3 mb-6 items-center'>
            <p className='text-lg text-secondary'>
              Junior Full-Stack Developer with hands-on experience building responsive web and mobile applications for Android and iOS. Proficient in C# .NET for backend development, SQL Server for data storage and management, and Ionic-Angular for frontend development. Experienced in developing end-to-end features, improving both frontend and backend performance, and creating user-friendly interfaces based on client requirements. Comfortable working in both individual and collaborative environments, with direct involvement in client discussions for requirements gathering and system improvements.
            </p>
          </div>
        </div>
      </motion.section>

      {/* skills section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, i) => (
            <div key={skill.title} className='card animate-slideUp' style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              <div className='h-6 w-6 text-primary mb-4'>{skill.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{skill.title}</h3>
              <ul className='text-secondary space-y-2'>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* experience section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experiences</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          {experiences.map((exp, i) => (
            <div key={exp.title} className='card animate-fade' style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              <h3 className='text-xl font-semibold mb-2'>{exp.title}</h3>
              <p className='text-primary mb-2'>{exp.company} – {exp.location} • {exp.period}</p>
              <ul className='text-secondary space-y-2 list-disc list-inside'>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* education section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          {education.map((edu, i) => (
            <div key={edu.degree} className='card animate-fade' style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              <h3 className='text-xl font-semibold mb-2'>{edu.degree}</h3>
              <p className='text-primary mb-2'>{edu.school} • {edu.period}</p>
              <ul className='text-secondary space-y-2 list-disc list-inside'>
                {edu.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default About