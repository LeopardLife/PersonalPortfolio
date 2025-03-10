"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

import { motion } from "motion/react";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 p-4 sm:p-8">
      <Navbar />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</motion.div>
		</div>
	);
}
