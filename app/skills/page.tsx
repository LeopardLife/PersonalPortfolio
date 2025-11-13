'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Gauge,
  Layers,
  Lightbulb,
  Rocket,
  Server,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiWebgl,
} from 'react-icons/si';

const technicalSkills = {
  frontend: [
    { name: 'React', icon: SiReact, level: 95, years: 4, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, level: 92, years: 3, color: '#000000' },
    { name: 'Vue.js', icon: SiVuedotjs, level: 88, years: 2, color: '#4FC08D' },
    { name: 'TypeScript', icon: SiTypescript, level: 93, years: 4, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, level: 95, years: 4, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, years: 3, color: '#06B6D4' },
    { name: 'Three.js', icon: SiThreedotjs, level: 85, years: 2, color: '#000000' },
    { name: 'WebGL', icon: SiWebgl, level: 80, years: 2, color: '#990000' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, level: 90, years: 4, color: '#339933' },
    { name: 'NestJS', icon: SiNestjs, level: 88, years: 2, color: '#E0234E' },
    { name: 'Express', icon: SiExpress, level: 92, years: 4, color: '#000000' },
    { name: 'Python', icon: SiPython, level: 75, years: 2, color: '#3776AB' },
    { name: 'REST API', icon: Server, level: 95, years: 4, color: '#FF6C37' },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql, level: 90, years: 3, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, level: 85, years: 3, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, level: 82, years: 2, color: '#DC382D' },
  ],
  tools: [
    { name: 'Docker', icon: SiDocker, level: 85, years: 3, color: '#2496ED' },
    { name: 'Git', icon: SiGit, level: 93, years: 4, color: '#F05032' },
  ],
};

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb, description: 'Breaking down complex problems into manageable solutions' },
  { name: 'Team Collaboration', icon: Users, description: 'Working effectively with cross-functional teams' },
  { name: 'Communication', icon: BookOpen, description: 'Clear technical communication with stakeholders' },
  { name: 'Leadership', icon: Award, description: 'Mentoring junior developers and leading technical initiatives' },
  { name: 'Project Management', icon: Briefcase, description: 'Agile methodologies, sprint planning, and delivery' },
  { name: 'Quick Learning', icon: Rocket, description: 'Rapidly adapting to new technologies and frameworks' },
];

const expertise = [
  {
    title: '3D Web Development',
    icon: SiThreedotjs,
    description: 'Creating immersive 3D experiences with Three.js, WebGL, and React Three Fiber',
    projects: 5,
  },
  {
    title: 'Full Stack Architecture',
    icon: Layers,
    description: 'Designing scalable architectures from database to frontend',
    projects: 15,
  },
  {
    title: 'Performance Optimization',
    icon: Zap,
    description: 'Optimizing applications for speed, SEO, and user experience',
    projects: 12,
  },
  {
    title: 'API Development',
    icon: Server,
    description: 'Building robust RESTful APIs and real-time WebSocket connections',
    projects: 18,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

export default function SkillsPage() {
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
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, tools, and methodologies
            built over 4+ years of professional development.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
            </TabsList>

            {Object.entries(technicalSkills).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card>
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="p-2 rounded-lg"
                                  style={{ backgroundColor: `${skill.color}20` }}
                                >
                                  <Icon
                                    className="w-6 h-6"
                                    style={{ color: skill.color }}
                                  />
                                </div>
                                <div>
                                  <h3 className="font-semibold">{skill.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {skill.years} years experience
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">
                                  {skill.level}%
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Proficiency
                                </div>
                              </div>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">{area.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {area.description}
                      </p>
                      <Badge variant="secondary">
                        {area.projects} Projects
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Users className="w-8 h-8 text-primary" />
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div {...fadeInUp}>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <Gauge className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to work together?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how my skills and experience can help bring your project
            to life.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
