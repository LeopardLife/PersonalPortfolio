import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center"
          >
            <Avatar className="w-48 h-48 border-4 border-primary/20">
              <AvatarImage 
                src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg" 
                alt="Phạm Nguyễn Thuận"
              />
            </Avatar>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-bold">
            Hi, I'm Phạm Nguyễn Thuận
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Frontend | Fullstack | Python Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            I'm a dedicated Fullstack Developer with over 3 years of experience building 
            scalable, user-centric web applications.
          </p>
          <Button asChild className="mt-8">
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}