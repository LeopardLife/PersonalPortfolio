'use client';

import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Hero />
			<QuickStats />
			<FeaturedProjects />
		</motion.div>
	);
}
