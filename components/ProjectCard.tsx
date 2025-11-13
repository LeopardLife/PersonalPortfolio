"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
	project: Project;
	index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{
				duration: 0.4,
				delay: index * 0.05,
				layout: { duration: 0.3 },
			}}
			whileHover={{ y: -8, scale: 1.02 }}
			className="h-full"
		>
			<Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
				{/* Image/Icon Header */}
				<div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
					<div className="absolute inset-0 flex items-center justify-center gap-6 p-6">
						{project.icons.map((Icon, i) => (
							<motion.div
								key={i}
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.2 + i * 0.1,
									type: "spring",
								}}
								className="transition-transform duration-300"
							>
								<Icon className="w-12 h-12 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
							</motion.div>
						))}
					</div>

					{/* Featured Badge */}
					{project.featured && (
						<div className="absolute top-4 right-4">
							<Badge className="bg-primary text-primary-foreground">
								⭐ Featured
							</Badge>
						</div>
					)}

					{/* Category Badge */}
					<div className="absolute bottom-4 left-4">
						<Badge
							variant="secondary"
							className="bg-background/80 backdrop-blur-sm"
						>
							{project.category}
						</Badge>
					</div>
				</div>

				<CardHeader className="pb-4">
					<div className="flex items-start justify-between gap-2 mb-3">
						<CardTitle className="text-2xl sm:text-3xl group-hover:text-primary transition-colors leading-tight">
							{project.title}
						</CardTitle>
					</div>

					<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
						<div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
							<Building2 className="h-4 w-4 text-primary" />
							<span className="font-medium">
								{project.company}
							</span>
						</div>
						<div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
							<Calendar className="h-4 w-4 text-primary" />
							<span className="font-medium">{project.year}</span>
						</div>
					</div>

					<CardDescription className="text-base line-clamp-3 leading-relaxed">
						{project.description}
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					{/* Technologies */}
					<div>
						<p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-2">
							Tech Stack
						</p>
						<div className="flex flex-wrap gap-2">
							{project.tags.slice(0, 5).map((tag) => (
								<Badge
									key={tag}
									variant="outline"
									className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
								>
									{tag}
								</Badge>
							))}
							{project.tags.length > 5 && (
								<Badge
									variant="outline"
									className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
								>
									+{project.tags.length - 5}
								</Badge>
							)}
						</div>
					</div>

					{/* Metrics Grid */}
					<div className="grid grid-cols-2 gap-3">
						<div className="p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
							<p className="text-xs text-muted-foreground mb-1 font-medium">
								Impact
							</p>
							<p className="font-semibold text-sm text-primary">
								{project.metrics.impact}
							</p>
						</div>
						<div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors">
							<div className="flex items-center gap-1 mb-1">
								<TrendingUp className="h-3 w-3 text-green-500" />
								<p className="text-xs text-muted-foreground font-medium">
									Performance
								</p>
							</div>
							<p className="font-semibold text-sm text-green-600 dark:text-green-400">
								{project.metrics.performance}
							</p>
						</div>
					</div>

					{/* CTA Button */}
					<Link href={`/projects/${project.slug}`} className="block">
						<Button
							className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-md hover:shadow-lg"
							variant="outline"
						>
							View Case Study
							<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</Link>
				</CardContent>
			</Card>
		</motion.div>
	);
}
