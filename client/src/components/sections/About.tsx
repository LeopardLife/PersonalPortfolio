import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const techStack = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt.js", "Next.js", "Vuetify", "Three.js"] },
  { category: "Backend", skills: ["Node.js", "Nest.js", "Java Spring", "Django", "Flask", "Python"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL", "MariaDB", "Mongoose"] },
  { category: "DevOps", skills: ["Docker", "Kubernetes", "Google Cloud Platform"] },
  { category: "Others", skills: ["RESTful APIs", "GraphQL", "Raspberry Pi", "ESP", "Arduino"] }
];

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
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Bình Hưng Hòa, Quận Bình Tân, Hồ Chí Minh City, Vietnam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:thuandevelop@gmail.com">thuandevelop@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>(+84) 0909275913</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
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
            <h3 className="text-2xl font-semibold text-center">Tech Stack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category) => (
                <Card key={category.category}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
