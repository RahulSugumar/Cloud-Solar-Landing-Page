import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Wrench, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Apply Online',
    description: 'Submit your roof details through our simple online form.',
  },
  {
    icon: Wrench,
    title: 'Free Installation',
    description: 'Our certified technicians install premium solar panels at zero cost to you.',
  },
  {
    icon: Zap,
    title: 'Generate Energy',
    description: 'Your panels start producing clean energy immediately, feeding into the grid.',
  },
  {
    icon: TrendingUp,
    title: 'Earn Income',
    description: 'Receive monthly payments directly to your account. Track earnings in real-time.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-[#F0F9F7]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to start earning passive income
          </p>
        </motion.div>

        {/* Animated connector line between title and steps */}
        <div className="relative w-full max-w-5xl mx-auto my-8">
          <svg
            className="w-full h-12 pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              d="M40 50
                 C180 50, 180 30, 300 30
                 C420 30, 420 50, 500 50
                 C580 50, 580 70, 700 70
                 C820 70, 820 50, 960 50"
              fill="none"
              stroke="var(--primary)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <div className="relative">
          <svg className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 hidden lg:block" style={{ zIndex: 0 }}>
            <motion.line
              x1="10%"
              y1="0"
              x2="90%"
              y2="0"
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    // className="w-16 h-16 bg-gradient-to-br from-[#0A5340] to-[#78B7E5] rounded-full flex items-center justify-center mb-6 mx-auto"
                    className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mb-6 mx-auto"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
