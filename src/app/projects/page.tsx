"use client"

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaApple, FaAndroid, FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animation'
import { useState } from "react";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      <motion.div className="container max-w-7xl mx-auto py-20" variants={staggerContainer} initial="initial" animate="animate">
        <motion.h1 className="text-4xl font-bold mb-4 text-center" variants={fadeInUp}>Projects I've Worked On</motion.h1>
        <motion.p className="text-lg text-secondary mb-24 text-center" variants={fadeInUp}>
          Here are some of the projects I've worked on. Each project reflects experience in different areas of development.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {
            projects.map((project) => (
              <motion.article key={project.title} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 flex flex-col justify-around group' variants={fadeInUp}>
                <div
                  className="relative aspect-video mb-4 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {
                    project.technologies.map((tech) => (
                      <span key={tech} className='px-3 py-1 bg-primary/10 rounded-full text-sm'>
                        {tech}
                      </span>
                    ))
                  }
                </div>

                <div className='flex gap-4 mt-2'>
                  {project.webURL && (
                    <Link
                      href={project.webURL}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-[#7a8899] hover:text-[#4d93ff] transition-colors font-mono"
                    >
                      <FaGlobe className="w-3.5 h-3.5" /> Web
                    </Link>
                  )}
                  {project.iosURL && (
                    <Link
                      href={project.iosURL}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-[#7a8899] hover:text-[#4d93ff] transition-colors font-mono"
                    >
                      <FaApple className="w-3 h-3" /> IOS
                      </Link>
                  )}
                  {project.androidURL && (
                    <Link
                      href={project.androidURL}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-[#7a8899] hover:text-[#4d93ff] transition-colors font-mono"
                    >
                      <FaAndroid className="w-3 h-3" /> Android
                    </Link>
                  )}
                  {project.apkURL && (
                    <Link
                      href={project.apkURL}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-[#7a8899] hover:text-[#4d93ff] transition-colors font-mono"
                    >
                      <FaDownload className="w-3 h-3" /> APK
                    </Link>
                  )}
                </div>
              </motion.article>
            ))
          }
        </div>
      </motion.div>
    
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Project Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
export default Project;