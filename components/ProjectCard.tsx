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
			<Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 hover:border-primary/50">
				{/* Image/Icon Header */}
				<div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20 overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
						{project.icons.map((Icon, i) => (
							<div
								key={i}
								className="transition-transform duration-300"
							>
								<Icon className="w-12 h-12 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
							</div>
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

				<CardHeader className="pb-3">
					<div className="flex items-start justify-between gap-2 mb-2">
						<CardTitle className="text-2xl group-hover:text-primary transition-colors">
							{project.title}
						</CardTitle>
					</div>

					<div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
						<div className="flex items-center gap-1">
							<Building2 className="h-4 w-4" />
							<span>{project.company}</span>
						</div>
						<div className="flex items-center gap-1">
							<Calendar className="h-4 w-4" />
							<span>{project.year}</span>
						</div>
					</div>

					<CardDescription className="text-base line-clamp-3">
						{project.description}
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					{/* Technologies */}
					<div className="flex flex-wrap gap-2">
						{project.tags.slice(0, 5).map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="text-xs"
							>
								{tag}
							</Badge>
						))}
						{project.tags.length > 5 && (
							<Badge variant="outline" className="text-xs">
								+{project.tags.length - 5}
							</Badge>
						)}
					</div>

					{/* Metrics Grid */}
					<div className="grid grid-cols-2 gap-3">
						<div className="p-3 bg-muted/50 rounded-lg">
							<p className="text-xs text-muted-foreground mb-1">
								Impact
							</p>
							<p className="font-semibold text-sm">
								{project.metrics.impact}
							</p>
						</div>
						<div className="p-3 bg-muted/50 rounded-lg">
							<div className="flex items-center gap-1 mb-1">
								<TrendingUp className="h-3 w-3 text-green-500" />
								<p className="text-xs text-muted-foreground">
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
							className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
							variant="outline"
						>
							View Details
							<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</Link>
				</CardContent>
			</Card>
		</motion.div>
	);
}
