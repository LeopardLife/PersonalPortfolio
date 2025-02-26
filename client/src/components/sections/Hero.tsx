import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold">
              Hi, I'm Phạm Nguyễn Thuận
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Frontend | Fullstack | Python Developer
            </p>
            <p className="text-lg text-muted-foreground">
              I'm a dedicated Fullstack Developer with over 3 years of experience building 
              scalable, user-centric web applications.
            </p>
            <Button asChild>
              <a href="#about">
                Learn More <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center md:justify-end"
          >
            <Avatar className="w-64 h-64 border-4 border-primary/20">
              <AvatarImage 
                src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg" 
                alt="Phạm Nguyễn Thuận"
              />
            </Avatar>
          </motion.div>
        </div>
      </div>
    </section>
  );
}