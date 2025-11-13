'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code2, Rocket, Target, Zap } from 'lucide-react';

export default function AboutWebsite() {
  const features = [
    {
      icon: Rocket,
      title: 'Modern Stack',
      description: 'Built with Next.js 16, React 19, and cutting-edge web technologies',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Zap,
      title: 'Self-Hosted',
      description: 'Running on Raspberry Pi 4 with Docker and Cloudflare Tunnel',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Target,
      title: 'Performance',
      description: 'Optimized for speed with 3D visualizations and smooth animations',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Showcasing best practices in modern fullstack development',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">About This Portfolio</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than Just a{' '}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This website is a demonstration of modern web development practices, combining elegant design
            with powerful technology to create an exceptional user experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary/50 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold mb-2">Built with Passion & Precision</h3>
                  <p className="text-muted-foreground">
                    Every line of code in this portfolio reflects my commitment to quality, performance, and user experience.
                    From the animated 3D backgrounds to the responsive design, everything is crafted with attention to detail.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
