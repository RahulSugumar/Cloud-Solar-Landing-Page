import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, LineChart, Headphones, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive coverage for all installations and equipment',
  },
  {
    icon: Clock,
    title: '25-Year Guarantee',
    description: 'Long-term income guarantee backed by premium solar technology',
  },
  {
    icon: LineChart,
    title: 'Real-Time Tracking',
    description: 'Monitor your earnings and energy production 24/7',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Expert team available whenever you need assistance',
  },
  {
    icon: Leaf,
    title: 'Carbon Offset',
    description: 'Reduce your carbon footprint while earning income',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by thousands with highest customer satisfaction',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F0F9F7]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Why We're Different
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading features that protect your investment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="relative mb-6"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-[var(--cta)]"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--cta)] rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
