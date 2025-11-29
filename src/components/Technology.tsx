import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cpu, Activity, Wifi, Battery } from "lucide-react";

// Props for DashboardCard
interface DashboardCardProps {
  item: number;
  isInView: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ item, isInView }) => {
  const [count, setCount] = useState<number>(0);
  const finalValue = item * 123;

  // Number Counter Effect
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 700; // ms
    const step = finalValue / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, finalValue]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 1 + item * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateX: 4,
        rotateY: -4,
        transition: { type: "spring", stiffness: 150, damping: 10 },
      }}
      className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center overflow-hidden group"
    >
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

      {/* Shimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Text */}
      <div className="text-white text-center relative z-10">
        <div className="text-3xl font-bold mb-1">{count}</div>
        <div className="text-sm opacity-80">kWh</div>
      </div>
    </motion.div>
  );
};

const Technology: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="technology"
      className="py-20 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium solar panels with intelligent monitoring systems
          </p>
        </motion.div>

        {/* FIRST BLOCK */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Animated Icon */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-3xl shadow-2xl flex items-center justify-center">
                <Cpu className="w-48 h-48 text-white opacity-80" />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--primary)] rounded-2xl flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Activity className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text + Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[var(--text)] mb-6">
              Premium Solar Infrastructure
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art solar panels feature advanced photovoltaic
              engineering, delivering maximum efficiency and durability.
            </p>

            <div className="space-y-4">
              {[
                { icon: Wifi, text: "IoT-enabled smart monitoring" },
                { icon: Battery, text: "25+ year panel lifespan" },
                { icon: Activity, text: "Real-time performance analytics" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[var(--bg)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <span className="text-lg text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECOND BLOCK — DASHBOARD */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-[var(--text)] mb-6">
              Intelligent Dashboard
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Track energy production, earnings history, and real-time analytics
              through our beautifully designed solar dashboard.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold shadow-lg"
            >
              View Demo Dashboard
            </motion.button>
          </motion.div>

          {/* RIGHT GRID — Dashboard Cards */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full group">
                  {[1, 2, 3, 4].map((item) => (
                    <DashboardCard key={item} item={item} isInView={isInView} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

