'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  SiHtml5, SiCss3, SiJavascript, SiVuedotjs, SiNuxtdotjs, SiNextdotjs, SiVuetify, SiThreedotjs,
  SiNodedotjs, SiNestjs, SiSpring, SiDjango, SiFlask, SiPython,
  SiMysql, SiMongodb, SiPostgresql, SiMariadb, SiMongoose,
  SiDocker, SiKubernetes, SiGooglecloud,
  SiGraphql, SiRaspberrypi, SiArduino, SiEspressif,
  SiGo
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Nuxt.js", icon: SiNuxtdotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vuetify", icon: SiVuetify },
      { name: "Three.js", icon: SiThreedotjs }
    ],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Java Spring", icon: SiSpring },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo }
    ],
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "Mongoose", icon: SiMongoose }
    ],
    gradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Google Cloud Platform", icon: SiGooglecloud }
    ],
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    category: "Others",
    skills: [
      { name: "RESTful APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Raspberry Pi", icon: SiRaspberrypi },
      { name: "ESP", icon: SiEspressif },
      { name: "Arduino", icon: SiArduino }
    ],
    gradient: "from-red-500/10 to-rose-500/10"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TechStackGrid = () => {
  return (
    <div className="space-y-12">
      <h3 className="text-2xl font-semibold text-center">Tech Stack</h3>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {techStack.map((category) => (
          <motion.div
            key={category.category}
            variants={item}
            className="col-span-1"
          >
            <Card className={`h-full bg-gradient-to-br ${category.gradient} backdrop-blur-lg border-0`}>
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg mb-4 text-center border-b border-primary/10 pb-2">
                  {category.category}
                </h4>
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-lg hover:bg-background/70 transition-all group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Bình Hưng Hòa, Quận Bình Tân, Hồ Chí Minh City, Vietnam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:thuandevelop@gmail.com" className="hover:text-primary transition-colors">
                      thuandevelop@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>(+84) 0909275913</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor's in Mechatronics</p>
                  <p className="text-muted-foreground">Industrial University of Ho Chi Minh City</p>
                  <p className="text-sm text-muted-foreground">Graduated 08/2017</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <TechStackGrid />
          </div>
        </motion.div>
      </div>
    </section>
  );
}