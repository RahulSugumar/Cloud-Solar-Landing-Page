import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F0F9F7] via-[#FFFFFF] to-[#F0F9F7]">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#1E293B] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn Your Roof Into
            <span className="text-[var(--primary)]"> Passive Income</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join thousands earning steady income by hosting solar panels. No installation costs. No maintenance. Just clean energy and monthly returns.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--cta)] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Calculate Your Income</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--cta)] to-[var(--primary)]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-semibold flex items-center gap-2"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="w-full max-w-[500px] mx-auto aspect-square bg-gradient-to-br from-[var(--secondary)] to-[var(--cta)] rounded-3xl flex items-center justify-center shadow-2xl">
              <Zap className="w-48 h-48 text-white opacity-90" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20  rounded-3xl blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
