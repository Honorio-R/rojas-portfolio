"use client"

import { projects } from '@/contents/projects'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animation'
import { FaGlobe, FaApple, FaAndroid, FaDownload } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const featured = projects.slice(0, 3)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24">
        <div className="container max-w-7xl mx-auto">
          {/* section header */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-[#1e6ff5] tracking-widest uppercase">// projects</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-[#1c2a3d]" />
            <Link
              href="/projects"
              className="font-mono text-xs text-[#7a8899] hover:text-[#4d93ff] transition-colors uppercase tracking-wider"
            >
              view all →
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featured.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                className="bg-white dark:bg-[#111720] border border-gray-200 dark:border-[#1c2a3d] rounded-lg overflow-hidden hover:border-[#1e6ff5] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-around group"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[0.68rem] bg-blue-50 dark:bg-[#0f2a5c] text-[#1e6ff5] dark:text-[#4d93ff] px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-base mb-1.5">{project.title}</h3>
                  <p className="text-sm text-[#7a8899] leading-relaxed mb-4">{project.description}</p>
                  <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-[#1c2a3d]">
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
                </div>
              </motion.article>
            ))}
          </motion.div>
          </div>
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
      </section>
    </>
  )
}


export default Projects