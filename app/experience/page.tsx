'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'Kidsplaza',
    location: 'Hanoi, Vietnam',
    role: 'Fullstack Developer',
    period: 'Mar 2025 - Aug 2025',
    duration: '6 months',
    type: 'Full-time',
    description:
      'Led critical API migration initiative to modernize e-commerce infrastructure serving thousands of daily users.',
    responsibilities: [
      'Analyzed existing Magento 2 architecture and identified performance bottlenecks in customer-facing modules',
      'Architected and implemented replacement services using NestJS reducing server load and improving response times',
      'Extended GraphQL gateway with twelve new resolvers and endpoints for promotional campaigns',
      'Conducted comprehensive data relationship mapping across multiple databases',
      'Implemented automated data validation workflows preventing synchronization errors',
      'Developed promotional system APIs integrating data from three separate legacy databases',
      'Designed incremental migration strategy allowing zero-downtime deployment',
    ],
    achievements: [
      'Improved response times by approximately 35% during peak traffic periods',
      'Maintained backward compatibility with existing frontend applications',
      'Ensured data integrity for sensitive customer information',
      'Enabled business continuity throughout transition period',
    ],
    technologies: [
      'Next.js',
      'NestJS',
      'GraphQL',
      'Magento 2',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'Docker',
    ],
  },
  {
    company: 'Boostech',
    location: 'Hanoi, Vietnam',
    role: 'Fullstack Developer',
    period: 'Jun 2024 - Mar 2025',
    duration: '10 months',
    type: 'Full-time',
    description:
      'Architected complete material management and procurement platform from initial concept through production deployment.',
    responsibilities: [
      'Led database design phase creating detailed entity-relationship diagrams for warehouse management',
      'Built responsive frontend interfaces using Next.js with server-side rendering',
      'Implemented complex forms and data tables handling thousands of material records efficiently',
      'Optimized PostgreSQL query performance through strategic indexing and query restructuring',
      'Conducted load testing with datasets exceeding 100,000 records to ensure scalability',
      'Participated actively in Agile Sprint meetings with systematic risk analysis',
      'Developed backend services with Java Spring Framework connecting buyers and sellers',
    ],
    achievements: [
      'Reduced average query execution time from 850ms to 340ms for critical inventory operations',
      'Improved team coordination reducing implementation errors by approximately 25%',
      'Reduced procurement cycle time by 30% through automated vendor notification',
      'Improved team velocity by identifying potential blockers two sprints in advance',
    ],
    technologies: [
      'Next.js',
      'Java Spring Boot',
      'PostgreSQL',
      'TypeScript',
      'Docker',
      'Git',
    ],
  },
  {
    company: 'Plogg Co. Ltd',
    location: 'Remote',
    role: 'Fullstack Developer',
    period: 'Sep 2021 - Apr 2024',
    duration: '2 years 8 months',
    type: 'Full-time',
    description:
      'Developed and maintained Progressive Web Applications and microservices architecture using Nuxt.js and NestJS deployed on Google Cloud Platform.',
    responsibilities: [
      'Architected Synode.ai - a sophisticated 3D product assembly guide system serving manufacturing clients',
      'Built responsive frontend with Nuxt.js featuring real-time 3D manipulation and text-to-speech integration',
      'Leveraged Three.js to load, render, and animate complex 3D models up to 50MB with optimization techniques',
      'Designed and implemented Bipedortho e-commerce platform serving hospitals and medical facilities in Canada',
      'Developed high-performance frontend featuring 3D product visualization for medical equipment',
      'Monitored and analyzed application logs on GCP to troubleshoot issues',
      'Managed comprehensive asset library with automated deduplication workflows',
      'Developed microservices for Rely platform with MongoDB and MySQL database schemas',
    ],
    achievements: [
      'Reduced initial load time by 60% through mesh simplification and progressive loading',
      'Maintained 99.7% uptime handling thousands of daily transactions over twelve-month period',
      'Reduced storage costs by 40% through automated workflows',
      'Created RESTful services following industry best practices',
    ],
    technologies: [
      'Nuxt.js',
      'NestJS',
      'Three.js',
      'Vue.js',
      'Vuetify',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Google Cloud Platform',
      'Docker',
      'TypeScript',
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4+ years of professional experience building scalable web applications,
            leading technical projects, and delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Facilities Served</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                  }`}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                              <Briefcase className="w-5 h-5" />
                              {exp.company}
                            </div>
                          </div>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Achievements:</h4>
                        <ul className="space-y-1 text-sm">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-primary">
                              <TrendingUp className="w-4 h-4 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Want to know more about my work?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out my projects portfolio to see detailed case studies and the
            impact I've made at each company.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
