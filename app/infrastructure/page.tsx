'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Activity,
  CloudCog,
  Container,
  Cpu,
  Globe,
  HardDrive,
  Lock,
  Network,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import { SiCloudflare, SiDocker, SiNextdotjs, SiPostgresql, SiRaspberrypi } from 'react-icons/si';

export default function InfrastructurePage() {
  const techStack = [
    {
      category: 'Hardware',
      icon: Cpu,
      color: 'text-red-500',
      items: [
        {
          name: 'Raspberry Pi 4',
          description: '4GB RAM, Quad-core ARM Cortex-A72',
          icon: SiRaspberrypi,
          specs: ['ARM Cortex-A72', '4GB RAM', 'MicroSD Storage'],
        },
      ],
    },
    {
      category: 'Network & Security',
      icon: Network,
      color: 'text-orange-500',
      items: [
        {
          name: 'Cloudflare Tunnel',
          description: 'Zero-trust network access without exposing ports',
          icon: SiCloudflare,
          specs: ['Zero Trust', 'No Port Forwarding', 'DDoS Protection'],
        },
      ],
    },
    {
      category: 'Application Stack',
      icon: Container,
      color: 'text-blue-500',
      items: [
        {
          name: 'Docker',
          description: 'Containerized deployment for consistency',
          icon: SiDocker,
          specs: ['Multi-stage Build', 'Docker Compose', 'Isolated Environment'],
        },
        {
          name: 'Next.js 16',
          description: 'React framework with App Router & Turbopack',
          icon: SiNextdotjs,
          specs: ['App Router', 'Turbopack', 'Standalone Build'],
        },
        {
          name: 'PostgreSQL',
          description: 'Database hosted on Neon serverless',
          icon: SiPostgresql,
          specs: ['Serverless', 'Auto-scaling', 'Cloud-hosted'],
        },
      ],
    },
  ];

  const architecture = [
    {
      title: 'Client Request',
      icon: Globe,
      description: 'User accesses website via HTTPS',
      details: ['DNS Resolution', 'SSL/TLS Handshake', 'CDN Edge Nodes'],
    },
    {
      title: 'Cloudflare Network',
      icon: CloudCog,
      description: 'Global edge network with DDoS protection',
      details: ['Edge Caching', 'WAF Rules', 'Bot Management'],
    },
    {
      title: 'Cloudflare Tunnel',
      icon: Shield,
      description: 'Secure tunnel to Raspberry Pi',
      details: ['Zero Trust', 'Encrypted Connection', 'No Open Ports'],
    },
    {
      title: 'Raspberry Pi',
      icon: Server,
      description: 'Docker containers running Next.js',
      details: ['Docker Engine', 'Container Orchestration', 'Health Checks'],
    },
    {
      title: 'Database',
      icon: HardDrive,
      description: 'Neon PostgreSQL serverless database',
      details: ['Automatic Backups', 'Connection Pooling', 'Low Latency'],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized Docker images with multi-stage builds and Next.js standalone output',
      color: 'text-yellow-500',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Zero-trust architecture with Cloudflare Tunnel, no exposed ports or public IP',
      color: 'text-green-500',
    },
    {
      icon: Activity,
      title: 'Always Available',
      description: 'Container health checks, automatic restarts, and Cloudflare global network',
      color: 'text-blue-500',
    },
    {
      icon: Lock,
      title: 'DDoS Protected',
      description: 'Cloudflare enterprise-grade protection against malicious traffic',
      color: 'text-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-64 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Server className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Infrastructure Overview</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Self-Hosted
            </span>
            <br />
            <span className="text-foreground">on Raspberry Pi 4</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            This portfolio is powered by a <span className="text-foreground font-semibold">Raspberry Pi 4</span> running Docker containers,
            securely connected through <span className="text-foreground font-semibold">Cloudflare Tunnel</span>—no port forwarding required.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: 'Cost', value: '~$0/mo', icon: Zap, color: 'from-yellow-500 to-orange-500' },
              { label: 'Uptime', value: '99.9%', icon: Activity, color: 'from-green-500 to-emerald-500' },
              { label: 'Security', value: 'Zero Trust', icon: Shield, color: 'from-blue-500 to-cyan-500' },
              { label: 'Speed', value: '<100ms', icon: CloudCog, color: 'from-purple-500 to-pink-500' },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                  className="bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 rounded-lg p-4 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center mx-auto mb-3`}>
                    <StatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-1`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">

        {/* Tech Stack */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, lightweight, and secure technologies powering this portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {techStack.map((stack, idx) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all border-2 hover:border-primary/50 bg-card/50 backdrop-blur group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${stack.color}`} />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{stack.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {stack.items.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={itemIdx} className="space-y-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <ItemIcon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground">{item.name}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.specs.map((spec, specIdx) => (
                                <Badge key={specIdx} variant="outline" className="text-xs font-normal hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Architecture Flow */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Request Flow Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How your request travels from browser to server and back
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-1">
              <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {architecture.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <Card className="text-center h-full hover:shadow-2xl transition-all bg-card/50 backdrop-blur border-2 hover:border-primary/50 group">
                      <CardHeader className="pb-3">
                        <motion.div
                          className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        <CardTitle className="text-base font-bold mt-2 group-hover:text-primary transition-colors">{step.title}</CardTitle>
                        <CardDescription className="text-xs leading-relaxed">{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 text-xs text-muted-foreground">
                          {step.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="flex items-start gap-2 hover:text-foreground transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span className="text-left">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-transparent bg-clip-text">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with performance, security, and reliability in mind
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <Card className="h-full text-center hover:shadow-2xl transition-all border-2 hover:border-primary/50 bg-card/50 backdrop-blur group">
                    <CardHeader className="pb-4">
                      <motion.div
                        className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-10 h-10 ${feature.color}`} />
                      </motion.div>
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technical Details */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2 border-primary/30 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Container className="w-6 h-6 text-primary" />
                </div>
                <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
                  Docker Configuration Highlights
                </span>
              </CardTitle>
              <CardDescription className="text-base mt-2 leading-relaxed">
                Optimized for production deployment on ARM architecture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-500" />
                    </div>
                    <h4 className="font-semibold text-lg">Production Optimizations</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Multi-stage Docker builds for minimal image size',
                      'Next.js standalone output (60% smaller)',
                      'Alpine Linux base image (5MB vs 900MB)',
                      'Automated health checks and restarts'
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-lg">Security Measures</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'No exposed ports to public internet',
                      'Cloudflare Zero Trust authentication',
                      'Environment secrets via runtime injection',
                      'Automated SSL/TLS certificate management'
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        Why Raspberry Pi?
                        <Badge variant="secondary" className="text-xs">Cost Effective</Badge>
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This setup demonstrates that modern web applications don't always need expensive cloud infrastructure.
                        A <span className="text-foreground font-semibold">$50 Raspberry Pi 4</span>, when properly configured with Docker and Cloudflare,
                        can serve production-grade applications efficiently while keeping <span className="text-foreground font-semibold">costs near zero</span>.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Low Power (~5W)</Badge>
                        <Badge variant="outline" className="text-xs">Silent Operation</Badge>
                        <Badge variant="outline" className="text-xs">Full Control</Badge>
                        <Badge variant="outline" className="text-xs">Learning Experience</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
