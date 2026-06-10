"use client"

import { blogs } from '@/contents/blog'
import { staggerContainer } from '@/utils/animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blogs
      </motion.h1>

      <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      >
        {
          blogs.map((blog) => (
            <article key={blog.slug} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className='text-xl font-semibold mb-2 hover:text-primary'>{blog.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</p>

                <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                  <span className='flex items-center'>
                    <FaCalendarAlt className='mr-2'/>
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <span className='flex items-center'>
                    <FaClock className='mr-2'/>
                    {blog.readTime}
                  </span>
                </div>
              </Link> 
              
            </article>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Blogs