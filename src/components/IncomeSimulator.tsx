import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export default function IncomeSimulator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [roofSize, setRoofSize] = useState(100);

  const monthlyIncome = Math.round(roofSize * 2.5);
  const yearlyIncome = monthlyIncome * 12;
  const tenYearIncome = yearlyIncome * 10;

  const displayMonthly = useMotionValue(0);
  const displayYearly = useMotionValue(0);
  const displayTenYear = useMotionValue(0);

  useEffect(() => {
    const controls = [
      animate(displayMonthly, monthlyIncome, { duration: 1 }),
      animate(displayYearly, yearlyIncome, { duration: 1 }),
      animate(displayTenYear, tenYearIncome, { duration: 1 }),
    ];

    return () => controls.forEach(c => c.stop());
  }, [roofSize, monthlyIncome, yearlyIncome, tenYearIncome]);

  return (
    <section id="simulator" className="py-20 bg-gradient-to-br from-[var(--bg)] to-[var(--white)]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary)]/30 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-[var(--text)]" />
            <span className="text-[var(--primary)] font-semibold">Income Calculator</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Calculate Your Potential Income
          </h2>
          <p className="text-xl text-gray-600">
            See how much you could earn based on your roof size
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="mb-8">
            <label className="block text-lg font-semibold text-[#1E293B] mb-4">
              Roof Size: <span className="text-[var(--primary)]">{roofSize} m²</span>
            </label>

            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={roofSize}
              onChange={(e) => setRoofSize(Number(e.target.value))}
              className="w-full h-3 bg-[var(--secondary)]/30 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${((roofSize - 50) / 450) * 100}%, var(--secondary) ${((roofSize - 50) / 450) * 100}%, var(--secondary) 100%)`,
              }}
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>50 m²</span>
              <span>500 m²</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[var(--bg)] to-[var(--secondary)]/20 p-6 rounded-2xl border-2 border-[var(--secondary)]"
            >
              <p className="text-sm text-gray-600 mb-2">Monthly Income</p>
              <motion.p className="text-3xl font-bold text-[#0A5340]">
                ₹{useTransform(displayMonthly, (value) => Math.round(value)).get()}
              </motion.p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br [var(--bg)] to-[var(--secondary)]/20 p-6 rounded-2xl border-2 border-[var(--secondary)]"
            >
              <p className="text-sm text-gray-600 mb-2">Yearly Income</p>
              <motion.p className="text-3xl font-bold text-[var(--primary)]">
                ₹{useTransform(displayYearly, (value) => Math.round(value).toLocaleString()).get()}
              </motion.p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-6 rounded-2xl text-white"
            >
              <p className="text-sm opacity-90 mb-2">10-Year Income</p>
              <motion.p className="text-3xl font-bold">
                ₹{useTransform(displayTenYear, (value) => Math.round(value).toLocaleString()).get()}
              </motion.p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl font-semibold text-lg shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Get Your Free Assessment</span>
          </motion.button>

          <p className="text-center text-sm text-gray-500 mt-4">
            * Estimates based on average conditions. Actual income may vary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
