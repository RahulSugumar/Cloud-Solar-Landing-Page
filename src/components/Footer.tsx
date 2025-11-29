import { motion } from 'framer-motion';
import { Sun, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Pricing', 'Calculator'],
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Resources: ['Blog', 'Help Center', 'FAQ', 'Partners'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
};

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-[var(--white)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-[var(--secondary)]" />
              <span className="text-2xl font-bold">Solar Income Grid</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your property into a passive income generator with clean solar energy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-[var(--secondary)]/20 rounded-lg flex items-center justify-center hover:bg-[var(--bg)]/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors relative inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary)]"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Solar Income Grid. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a href="#" whileHover={{ color: 'var(--secondary)' }}>Privacy Policy</motion.a>
              <motion.a href="#" whileHover={{ color: 'var(--secondary)' }}>Terms of Service</motion.a>
              <motion.a href="#" whileHover={{ color: 'var(--secondary)' }}>Cookie Policy</motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
