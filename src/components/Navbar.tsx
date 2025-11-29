import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-8 h-8 text-[var(--primary)]" />
          <span className="text-xl font-bold text-[var(--text)]">Solar Income Grid</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Benefits', 'How It Works', 'Technology', 'Simulator'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[var(--text)] relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var-(primary)] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg font-medium"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
