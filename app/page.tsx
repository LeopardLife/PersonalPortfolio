'use client';

import AboutWebsite from "@/components/sections/AboutWebsite";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import { motion } from "framer-motion";

// Section Separator Component
const SectionSeparator = ({ className = "" }: { className?: string }) => (
	<div className={`relative py-16 ${className}`}>
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex items-center gap-4">
				<div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
				<div className="flex gap-2">
					<div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
					<div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse delay-100" />
					<div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse delay-200" />
				</div>
				<div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
			</div>
		</div>
	</div>
);

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="relative"
		>
			{/* Hero Section */}
			<Hero />

			{/* Separator */}
			<SectionSeparator />

			{/* About Website Section */}
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
				<AboutWebsite />
			</div>

			{/* Separator */}
			<SectionSeparator />

			{/* Quick Stats Section */}
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background -z-10" />
				<QuickStats />
			</div>

			{/* Separator */}
			<SectionSeparator />

			{/* Featured Projects Section */}
			<div className="relative pb-20">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
				<FeaturedProjects />
			</div>
		</motion.div>
	);
}
