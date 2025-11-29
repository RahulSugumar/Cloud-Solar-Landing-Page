import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, School, MapPin, Briefcase, Warehouse } from 'lucide-react';

const profiles = [
  {
    icon: Home,
    title: 'Homeowners',
    description: 'Residential properties with suitable roof space',
  },
  {
    icon: School,
    title: 'Schools',
    description: 'Educational institutions with large rooftops',
  },
  {
    icon: MapPin,
    title: 'Landowners',
    description: 'Open land suitable for ground-mounted panels',
  },
  {
    icon: Briefcase,
    title: 'Investors',
    description: 'Property investors seeking passive returns',
  },
  {
    icon: Warehouse,
    title: 'Commercial Buildings',
    description: 'Warehouses, factories, and business premises',
  },
];

export default function WhoCanJoin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]
 mb-4">
            Who Can Join?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple property types can generate income through solar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)]
 shadow-lg relative">
                <motion.div
                  className="absolute inset-0 bg-[var(--primary)]/80 flex flex-col items-center justify-center p-6 text-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <profile.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center">{profile.title}</h3>
                  <p className="text-sm text-center opacity-90">{profile.description}</p>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <profile.icon className="w-20 h-20 text-white opacity-50" />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-[var(--secondary)]/30
 -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
