'use client';

import Contact from '@/components/sections/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
