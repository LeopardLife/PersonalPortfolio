'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const journey = [
  {
    year: '2019-2020',
    title: 'Mechanical Engineering Foundation',
    company: 'Viet Son Machine Manufacturing',
    role: 'Intern',
    icon: GraduationCap,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    description: 'Created precise 2D and 3D technical drawings using SolidWorks. Developed systematic approach to technical documentation.',
    skills: ['SolidWorks', 'Technical Drawing', 'CAD Design'],
  },
  {
    year: '2020-2021',
    title: 'Transition to Software',
    company: 'Bach Viet Art and Technology',
    role: 'Intern',
    icon: Lightbulb,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    description: 'Designed mechanical systems and technical specifications. Applied engineering principles to software requirements.',
    skills: ['Project Coordination', 'Technical Documentation', 'Systems Design'],
  },
  {
    year: '2021-2024',
    title: '3D Web Applications Specialist',
    company: 'Plogg Co. Ltd',
    role: 'Fullstack Developer',
    icon: Rocket,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    description: 'Architected Synode.ai and Bipedortho platforms. Mastered Three.js, optimizing 3D models up to 50MB with 60% load time reduction.',
    skills: ['Nuxt.js', 'Three.js', 'NestJS', 'GCP', 'PWA'],
    achievements: [
      'Served 200+ medical facilities across Canada',
      'Achieved 99.7% uptime over 12 months',
      'Reduced load time by 60%',
    ],
  },
  {
    year: '2024-2025',
    title: 'Enterprise Architecture',
    company: 'Boostech',
    role: 'Fullstack Developer',
    icon: Briefcase,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    description: 'Architected complete procurement platform. Optimized PostgreSQL queries from 850ms to 340ms (60% improvement).',
    skills: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    achievements: [
      'Handled 100K+ material records',
      '60% query performance improvement',
      '30% faster procurement cycles',
    ],
  },
  {
    year: '2025',
    title: 'System Migration Expert',
    company: 'Kidsplaza',
    role: 'Fullstack Developer',
    icon: Rocket,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    description: 'Led API migration from Magento 2 to NestJS microservices. Improved response times by 35% with zero-downtime deployment.',
    skills: ['NestJS', 'GraphQL', 'Migration Strategy', 'API Design'],
    achievements: [
      '35% faster API response times',
      'Extended GraphQL with 12+ endpoints',
      'Zero downtime during migration',
    ],
  },
];

export default function TechJourney() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Technical Journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From Mechanical Engineering to Fullstack Development - A story of evolution and growth
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-600 to-pink-600" />

        <div className="space-y-12">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="flex-1">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`${item.bgColor} ${item.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{item.year}</Badge>
                    </div>

                    {/* Role */}
                    <Badge className="mb-3">{item.role}</Badge>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievements */}
                    {item.achievements && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-semibold mb-2">Key Achievements:</p>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex w-24 h-24 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-600 items-center justify-center shadow-lg z-10">
                <item.icon className="w-10 h-10 text-white" />
              </div>

              {/* Spacer */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
