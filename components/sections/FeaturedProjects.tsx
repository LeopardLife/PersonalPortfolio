'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SiGooglecloud, SiNestjs, SiNextdotjs, SiPostgresql, SiSpring, SiThreedotjs, SiVuedotjs } from 'react-icons/si';

const featuredProjects = [
  {
    title: 'Synode.ai',
    slug: 'synode-ai',
    description: '3D Assembly Guide Platform serving manufacturing clients across North America with interactive step-by-step instructions.',
    image: '/assets/projects/synode.jpg',
    tags: ['Nuxt.js', 'Three.js', 'NestJS', 'GCP'],
    icons: [SiVuedotjs, SiThreedotjs, SiNestjs, SiGooglecloud],
    metrics: {
      impact: '200+ facilities',
      performance: '60% faster load time',
    },
    featured: true,
  },
  {
    title: 'Bipedortho',
    slug: 'bipedortho',
    description: 'Medical e-commerce platform with 3D product visualization serving hospitals across Canada.',
    image: '/assets/projects/bipedortho.jpg',
    tags: ['Nuxt.js', 'Three.js', 'NestJS', 'GCP'],
    icons: [SiVuedotjs, SiThreedotjs, SiNestjs, SiGooglecloud],
    metrics: {
      impact: '200+ hospitals',
      performance: '99.7% uptime',
    },
    featured: true,
  },
  {
    title: 'Boostech',
    slug: 'boostech',
    description: 'Enterprise procurement system with advanced material management and automated quotation workflows.',
    image: '/assets/projects/boostech.jpg',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL'],
    icons: [SiNextdotjs, SiSpring, SiPostgresql],
    metrics: {
      impact: '100K+ records',
      performance: '60% query optimization',
    },
    featured: true,
  },
  {
    title: 'Kidsplaza',
    slug: 'kidsplaza',
    description: 'E-commerce modernization with API migration from Magento 2 to NestJS microservices.',
    image: '/assets/projects/kidsplaza.jpg',
    tags: ['Next.js', 'NestJS', 'GraphQL'],
    icons: [SiNextdotjs, SiNestjs],
    metrics: {
      impact: 'Thousands of users',
      performance: '35% faster APIs',
    },
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable web applications with 3D visualizations and microservices architectures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.icons.map((Icon, i) => (
                        <Icon key={i} className="w-12 h-12 text-primary/60 group-hover:scale-110 transition-transform" />
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Impact</p>
                      <p className="font-semibold">{project.metrics.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Performance</p>
                      <p className="font-semibold">{project.metrics.performance}</p>
                    </div>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <Button className="w-full gap-2">
                      View Case Study <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline" className="gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
