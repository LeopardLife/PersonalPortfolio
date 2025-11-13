'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Calendar, CheckCircle2, ExternalLink, Github, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Header Image/Icons */}
          <div className="relative h-64 sm:h-80 bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center gap-8 p-8">
              {project.icons.map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                >
                  <Icon className="w-16 h-16 sm:w-24 sm:h-24 text-primary/70" />
                </motion.div>
              ))}
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-6 right-6">
                <Badge className="bg-primary text-primary-foreground text-lg py-2 px-4">
                  ⭐ Featured Project
                </Badge>
              </div>
            )}
          </div>

          {/* Title and Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-transparent bg-clip-text">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Company</p>
                  <p className="font-semibold">{project.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Role</p>
                  <p className="font-semibold">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Category and Tags */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="default" className="text-base py-1 px-4">
                {project.category}
              </Badge>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Live
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.metrics.impact}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {project.metrics.performance}
              </p>
            </CardContent>
          </Card>
          {project.metrics.scale && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{project.metrics.scale}</p>
              </CardContent>
            </Card>
          )}
          {project.metrics.uptime && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{project.metrics.uptime}</p>
              </CardContent>
            </Card>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <Separator />

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Challenges */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground pt-1">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Results */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid gap-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{result}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Technologies Card */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.frontend.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.backend.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.database.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.technologies.other.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Other</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.other.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Other Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Other Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.slug}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <p className="font-semibold mb-1">{p.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {p.description}
                      </p>
                    </Link>
                  ))}
                <Link href="/projects">
                  <Button variant="outline" className="w-full mt-2">
                    View All Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
