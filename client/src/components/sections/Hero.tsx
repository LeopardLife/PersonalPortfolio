import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm Phạm Nguyễn Thuận
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Frontend | Fullstack | Python Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-muted-foreground">
            I'm a dedicated Fullstack Developer with over 3 years of experience building 
            scalable, user-centric web applications.
          </p>
          <Button asChild>
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
