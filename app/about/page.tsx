'use client';

import SkillsShowcase from '@/components/sections/SkillsShowcase';
import TechJourney from '@/components/sections/TechJourney';
import ValuesPhilosophy from '@/components/sections/ValuesPhilosophy';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image and Quick Info */}
            <div className="space-y-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl" />
                <Avatar className="w-64 h-64 sm:w-80 sm:h-80 border-4 border-primary/20 shadow-2xl relative">
                  <AvatarImage
                    src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg"
                    alt="Phạm Nguyễn Thuận"
                    className="object-cover"
                  />
                </Avatar>
              </div>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:thuandevelop@gmail.com" className="hover:text-primary transition-colors">
                      thuandevelop@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-3 pt-3 border-t">
                    <a
                      href="https://github.com/thuanpham113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nguyễn-thuận-phạm-103056aa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: About Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  About Me
                </h1>
                <p className="text-2xl font-semibold text-foreground mb-2">
                  Fullstack Developer | 3D Web Applications Specialist
                </p>
                <p className="text-lg text-muted-foreground">
                  Bridging Mechanical Engineering and Modern Web Development
                </p>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Over 4 years</span> of specialized experience building scalable web applications with complex 3D visualizations and microservices architectures.
                </p>
                <p>
                  Successfully delivered systems serving <span className="font-semibold text-foreground">more than 200 medical facilities across Canada</span> while reducing API response times by up to <span className="font-semibold text-green-600">40%</span> through systematic architecture optimization.
                </p>
                <p>
                  I combine my <span className="font-semibold text-foreground">mechanical engineering background</span> with modern web development expertise to create intuitive 3D interfaces and robust backend systems using <span className="font-semibold text-foreground">Next.js, NestJS, Java Spring, and Three.js</span>.
                </p>
                <p>
                  My unique journey from designing mechanical systems with SolidWorks to architecting complex web applications has given me a distinctive perspective on problem-solving and system design.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    View My Work <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2">
                    Get In Touch <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold text-primary mb-2">4+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold text-green-500 mb-2">8+</p>
              <p className="text-muted-foreground">Projects Delivered</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold text-purple-500 mb-2">200+</p>
              <p className="text-muted-foreground">Clients Served</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <p className="text-5xl font-bold text-orange-500 mb-2">99.7%</p>
              <p className="text-muted-foreground">Platform Uptime</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Journey */}
        <TechJourney />

        {/* Skills Showcase */}
        <SkillsShowcase />

        {/* Values & Philosophy */}
        <ValuesPhilosophy />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for a developer who combines technical expertise with a proven track record? Let's discuss your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2">
                Explore My Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
