'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProjects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
	const featuredProjects = getFeaturedProjects();

	return (
		<section className="py-20 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.2,
							type: "spring",
							stiffness: 200,
						}}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<ExternalLink className="w-4 h-4 text-primary" />
						<span className="text-sm font-semibold text-primary">
							Featured Work
						</span>
					</motion.div>

					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Projects That{" "}
						<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
							Make Impact
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Scalable web applications with 3D visualizations and
						microservices architectures
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.slug}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link href={`/projects/${project.slug}`}>
								<Card className="h-full hover:shadow-2xl transition-all border-2 hover:border-primary/50 group cursor-pointer overflow-hidden">
									{/* Icon Header */}
									<div className="relative h-32 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
										<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
										<div className="absolute inset-0 flex items-center justify-center gap-2">
											{project.icons
												.slice(0, 3)
												.map((Icon, i) => (
													<motion.div
														key={i}
														whileHover={{
															scale: 1.2,
															rotate: 10,
														}}
														transition={{
															type: "spring",
															stiffness: 300,
														}}
													>
														<Icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors" />
													</motion.div>
												))}
										</div>
										{/* Shine effect on hover */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
									</div>

									<CardHeader className="pb-3">
										<div className="flex items-start justify-between gap-2 mb-2">
											<CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
												{project.title}
											</CardTitle>
											<ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
										</div>
										<CardDescription className="text-sm line-clamp-2 leading-relaxed">
											{project.description}
										</CardDescription>
									</CardHeader>

									<CardContent className="space-y-3">
										{/* Tags */}
										<div className="flex flex-wrap gap-1.5">
											{project.tags
												.slice(0, 2)
												.map((tag) => (
													<Badge
														key={tag}
														variant="secondary"
														className="text-xs font-normal"
													>
														{tag}
													</Badge>
												))}
											{project.tags.length > 2 && (
												<Badge
													variant="outline"
													className="text-xs"
												>
													+{project.tags.length - 2}
												</Badge>
											)}
										</div>

										{/* Metrics */}
										<div className="grid grid-cols-2 gap-2 p-3 bg-muted/50 rounded-lg">
											<div>
												<p className="text-xs text-muted-foreground mb-0.5">
													Impact
												</p>
												<p className="text-sm font-semibold">
													{project.metrics.impact}
												</p>
											</div>
											<div>
												<p className="text-xs text-muted-foreground mb-0.5">
													Result
												</p>
												<p className="text-sm font-semibold">
													{
														project.metrics
															.performance
													}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-center"
				>
					<Link href="/projects">
						<Button size="lg" variant="outline" className="gap-2">
							View All Projects{" "}
							<ExternalLink className="h-4 w-4" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
