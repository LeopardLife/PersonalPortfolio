'use client';

import ModelViewer from "@/components/3d/ModelViewer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiGo, SiReact, SiTypescript } from "react-icons/si";

export default function Hero() {
  const techLogos = [
    { src: "logos/react", alt: "React", icon: SiReact },
    { src: "logos/java", alt: "Java", icon: FaJava },
    { src: "logos/go", alt: "Go", icon: SiGo },
    { src: "logos/typescript", alt: "TypeScript", icon: SiTypescript },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <ModelViewer />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
              Hi, I'm Phạm Nguyễn Thuận
            </h1>

            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                Fullstack Developer
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 items-center"
              >
                {techLogos.map((logo, index) => (
                  // <motion.img
                  //   key={logo.alt}
                  //   src={logo.src}
                  //   alt={logo.alt}
                  //   className="w-8 h-8 hover:scale-110 transition-transform"
                  //   initial={{ opacity: 0, y: 20 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ delay: 0.2 * index }}
                  // />
                  <p key={logo.alt}>
                    <logo.icon className="w-8 h-8 hover:scale-110 transition-transform" />
                  </p>
                ))}
              </motion.div>
            </div>

            <p className="text-lg text-muted-foreground">
              I'm a dedicated Fullstack Developer with over 3 years of experience building
              scalable, user-centric web applications.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
              >
                <a href="#about" className="gap-2">
                  Learn More <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center md:justify-end relative z-10"
          >
            <div className="relative">
              <Avatar className="w-64 h-64 border-4 border-primary/20">
                <AvatarImage
                  src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg"
                  alt="Phạm Nguyễn Thuận"
                />
              </Avatar>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-sm font-medium">Available for hire</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}