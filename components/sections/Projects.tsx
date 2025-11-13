'use client';

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Boostech - Material & Procurement Management",
    description: "A platform for managing materials and purchase requests across projects, connecting buyers and sellers with quotation workflows.",
    tech: ["Next.js", "Java Spring", "PostgreSQL"],
    githubUrl: "https://github.com/thuanpham113/boostech-project",
    highlights: ["Developed a responsive Frontend with Next.js", "Integrated with a robust Java Spring Backend for seamless data handling"]
  },
  {
    title: "Synode.ai",
    description: "A 3D application developed for Synode Canada, designed to provide step-by-step assembly guides and product instructions using interactive 3D models, complete with text-to-speech and customization features.",
    tech: ["Nuxt.js", "Vue.js", "Vuetify", "Three.js", "Nest.js", "Google Cloud Platform"],
    githubUrl: "https://github.com/thuanpham113/synode-ai",
    highlights: ["Leveraged Three.js extensively to load, render, and animate 3D files, creating an intuitive user experience for product assembly.", "Built a responsive Frontend with Nuxt.js, integrating it seamlessly with Backend APIs on Nest.js for real-time data and scalability.", "My deepest involvement was here—mastered 3D file handling and optimized performance for complex models."]
  },
  {
    title: "Rely for Plogg.ca",
    description: "Microservices architecture powering Progressive Web Apps for Plogg.ca.",
    tech: ["Nest.js", "MongoDB", "MySQL", "Mongoose", "Google Cloud Platform"],
    githubUrl: "https://github.com/thuanpham113/rely-plogg",
    highlights: ["Designed efficient database schemas", "Implemented RESTful services"]
  },
  {
    title: "Bipedortho",
    description: "An e-commerce site for medical supplies, serving 200+ hospitals in Canada.",
    tech: ["Nuxt.js", "Vuetify", "Three.js", "Nest.js", "Google Cloud Platform"],
    githubUrl: "https://github.com/thuanpham113/bipedortho",
    highlights: ["Delivered high-performance Frontend", "Implemented reliable Backend services"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
