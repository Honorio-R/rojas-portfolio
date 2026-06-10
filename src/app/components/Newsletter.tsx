"use client"

import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animation'

const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0f2a5c] via-[#111720] to-[#080c12] border border-[#1c2a3d] rounded-lg p-8 md:p-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-xs text-[#1e6ff5] tracking-widest uppercase">// newsletter</span>
              <h2 className="text-2xl font-bold mt-3 mb-3 text-[#e8edf5]">Stay in the loop</h2>
              <p className="text-[#7a8899] leading-relaxed text-sm max-w-xs">
                Latest updates on projects and posts. No spam, just quality content.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-[#080c12]/80 border border-[#1c2a3d] rounded text-[#e8edf5] placeholder-[#7a8899] font-mono text-sm focus:outline-none focus:border-[#1e6ff5] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1e6ff5] text-white rounded font-semibold text-sm hover:bg-[#4d93ff] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter