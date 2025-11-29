import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, DollarSign, Gauge } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Your Rooftop, Your Asset',
    description: 'Transform unused roof space into a revenue-generating asset without any upfront investment.',
  },
  {
    icon: DollarSign,
    title: 'Steady Monthly Income',
    description: 'Earn consistent passive income from solar energy production month after month.',
  },
  {
    icon: Gauge,
    title: 'Zero Maintenance',
    description: 'We handle all installation, monitoring, and maintenance. You just collect the income.',
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]
 mb-4">
            Why Choose Solar Income Grid?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the clean energy revolution while earning passive income
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[var(--bg)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-cta rounded-xl flex items-center justify-center mb-6"
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-[var(--text)]
 mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
