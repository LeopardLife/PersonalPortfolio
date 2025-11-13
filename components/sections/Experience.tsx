'use client';

import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";

const experiences = [
  {
    date: "Present – 02/2025",
    title: "Fullstack Developer",
    company: "Boostech",
    description: [
      "Building a material management and procurement platform using Next.js for the Frontend and Java Spring with PostgreSQL for the Backend",
      "Connecting buyers and sellers with streamlined quotation and request workflows"
    ]
  },
  {
    date: "09/2021 – 04/2024",
    title: "Fullstack Developer",
    company: "Plogg Co. Ltd",
    description: [
      "Developed PWAs and microservices using Nuxt.js, Nest.js, and GCP, with significant contributions to Synode.ai"
    ]
  },
  {
    date: "09/2020 – 01/2021",
    title: "Intern",
    company: "Bach Viet Art and Technology Co. Ltd",
    description: [
      "Designed mechanical systems and executed on-site projects"
    ]
  },
  {
    date: "02/2019 – 05/2020",
    title: "Intern",
    company: "Viet Son Machine Manufacturing Co. Ltd",
    description: [
      "Created 2D/3D technical drawings with SolidWorks"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
