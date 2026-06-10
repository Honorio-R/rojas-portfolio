"use client"

import { blogs } from '@/contents/blog'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/utils/animation'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
  const recent = blogs.slice(0, 3)

  return (
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
          <span className="font-mono text-xs text-[#1e6ff5] tracking-widest uppercase">// latest posts</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1c2a3d]" />
          <Link
            href="/blogs"
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
          {recent.map((blog) => (
            <motion.article
              key={blog.slug}
              variants={fadeInUp}
              className="bg-white dark:bg-[#111720] border border-gray-200 dark:border-[#1c2a3d] rounded-lg p-5 hover:border-[#1e6ff5] hover:-translate-y-1.5 transition-all duration-200 group"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="flex items-center gap-2 mb-4 text-xs text-[#7a8899] font-mono">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="w-3 h-3" />
                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-[#1c2a3d] dark:text-[#2a3a50]">·</span>
                  <span className="flex items-center gap-1.5">
                    <FaClock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-[#4d93ff] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#7a8899] leading-relaxed">{blog.excerpt}</p>
                <div className="mt-4 font-mono text-xs text-[#1e6ff5] group-hover:text-[#4d93ff] transition-colors">
                  read more →
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blogs