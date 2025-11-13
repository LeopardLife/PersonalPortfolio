'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
	{
		company: "Kidsplaza",
		location: "Ho Chi Minh City, Vietnam",
		role: "Fullstack Developer",
		period: "Mar 2025 - Aug 2025",
		duration: "6 months",
		type: "Full-time",
		description:
			"Led critical API migration initiative to modernize e-commerce infrastructure serving thousands of daily users.",
		responsibilities: [
			"Analyzed existing Magento 2 architecture and identified performance bottlenecks in customer-facing modules",
			"Architected and implemented replacement services using NestJS reducing server load and improving response times",
			"Extended GraphQL gateway with twelve new resolvers and endpoints for promotional campaigns",
			"Conducted comprehensive data relationship mapping across multiple databases",
			"Implemented automated data validation workflows preventing synchronization errors",
			"Developed promotional system APIs integrating data from three separate legacy databases",
			"Designed incremental migration strategy allowing zero-downtime deployment",
		],
		achievements: [
			"Improved response times by approximately 35% during peak traffic periods",
			"Maintained backward compatibility with existing frontend applications",
			"Ensured data integrity for sensitive customer information",
			"Enabled business continuity throughout transition period",
		],
		technologies: [
			"Next.js",
			"NestJS",
			"GraphQL",
			"Magento 2",
			"PostgreSQL",
			"Redis",
			"TypeScript",
			"Docker",
		],
	},
	{
		company: "Boostech",
		location: "Ho Chi Minh City, Vietnam",
		role: "Fullstack Developer",
		period: "Jun 2024 - Mar 2025",
		duration: "10 months",
		type: "Full-time",
		description:
			"Architected complete material management and procurement platform from initial concept through production deployment.",
		responsibilities: [
			"Led database design phase creating detailed entity-relationship diagrams for warehouse management",
			"Built responsive frontend interfaces using Next.js with server-side rendering",
			"Implemented complex forms and data tables handling thousands of material records efficiently",
			"Optimized PostgreSQL query performance through strategic indexing and query restructuring",
			"Conducted load testing with datasets exceeding 100,000 records to ensure scalability",
			"Participated actively in Agile Sprint meetings with systematic risk analysis",
			"Developed backend services with Java Spring Framework connecting buyers and sellers",
		],
		achievements: [
			"Reduced average query execution time from 850ms to 340ms for critical inventory operations",
			"Improved team coordination reducing implementation errors by approximately 25%",
			"Reduced procurement cycle time by 30% through automated vendor notification",
			"Improved team velocity by identifying potential blockers two sprints in advance",
		],
		technologies: [
			"Next.js",
			"Java Spring Boot",
			"PostgreSQL",
			"TypeScript",
			"Docker",
			"Git",
		],
	},
	{
		company: "Plogg Co. Ltd",
		location: "Remote",
		role: "Fullstack Developer",
		period: "Sep 2021 - Apr 2024",
		duration: "2 years 8 months",
		type: "Full-time",
		description:
			"Developed and maintained Progressive Web Applications and microservices architecture using Nuxt.js and NestJS deployed on Google Cloud Platform.",
		responsibilities: [
			"Architected Synode.ai - a sophisticated 3D product assembly guide system serving manufacturing clients",
			"Built responsive frontend with Nuxt.js featuring real-time 3D manipulation and text-to-speech integration",
			"Leveraged Three.js to load, render, and animate complex 3D models up to 50MB with optimization techniques",
			"Designed and implemented Bipedortho e-commerce platform serving hospitals and medical facilities in Canada",
			"Developed high-performance frontend featuring 3D product visualization for medical equipment",
			"Monitored and analyzed application logs on GCP to troubleshoot issues",
			"Managed comprehensive asset library with automated deduplication workflows",
			"Developed microservices for Rely platform with MongoDB and MySQL database schemas",
		],
		achievements: [
			"Reduced initial load time by 60% through mesh simplification and progressive loading",
			"Maintained 99.7% uptime handling thousands of daily transactions over twelve-month period",
			"Reduced storage costs by 40% through automated workflows",
			"Created RESTful services following industry best practices",
		],
		technologies: [
			"Nuxt.js",
			"NestJS",
			"Three.js",
			"Vue.js",
			"Vuetify",
			"PostgreSQL",
			"MongoDB",
			"MySQL",
			"Google Cloud Platform",
			"Docker",
			"TypeScript",
		],
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-100px" },
	transition: { duration: 0.5 },
};

export default function ExperiencePage() {
	return (
		<div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
			<div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
			<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							delay: 0.2,
							type: "spring",
							stiffness: 200,
						}}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<Briefcase className="w-4 h-4 text-primary" />
						<span className="text-sm font-semibold text-primary">
							Professional Journey
						</span>
					</motion.div>

					<h1 className="text-4xl sm:text-5xl font-bold mb-4">
						Work{" "}
						<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
							Experience
						</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						4+ years of professional experience building scalable
						web applications, leading technical projects, and
						delivering exceptional user experiences.
					</p>
				</motion.div>

				{/* Stats */}
				<motion.div
					{...fadeInUp}
					className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
				>
					<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card/50 backdrop-blur">
						<CardContent className="pt-6 text-center">
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text mb-2">
								4+
							</div>
							<div className="text-sm font-medium text-muted-foreground">
								Years Experience
							</div>
						</CardContent>
					</Card>
					<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card/50 backdrop-blur">
						<CardContent className="pt-6 text-center">
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
								5+
							</div>
							<div className="text-sm font-medium text-muted-foreground">
								Projects Delivered
							</div>
						</CardContent>
					</Card>
					<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card/50 backdrop-blur">
						<CardContent className="pt-6 text-center">
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mb-2">
								3
							</div>
							<div className="text-sm font-medium text-muted-foreground">
								Companies
							</div>
						</CardContent>
					</Card>
					<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card/50 backdrop-blur">
						<CardContent className="pt-6 text-center">
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text mb-2">
								200+
							</div>
							<div className="text-sm font-medium text-muted-foreground">
								Facilities Served
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 md:-translate-x-1/2" />

					{/* Experience Items */}
					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								{...fadeInUp}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="relative"
							>
								{/* Timeline Dot - Centered on line horizontally, at top vertically */}
								<div className="absolute left-0 top-0 w-12 flex items-start justify-center md:left-1/2 md:-translate-x-1/2">
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{
											delay: index * 0.1 + 0.2,
											type: "spring",
										}}
										className="w-6 h-6 bg-gradient-to-br from-primary to-purple-500 rounded-full ring-4 ring-background shadow-lg"
									/>
								</div>

								{/* Content */}
								<div
									className={`pl-16 md:pl-0 ${
										index % 2 === 0
											? "md:pr-[calc(50%+2.5rem)]"
											: "md:pl-[calc(50%+2.5rem)]"
									}`}
								>
									<Card className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all bg-card/50 backdrop-blur group">
										<CardContent className="p-6 sm:p-8">
											{/* Header */}
											<div className="mb-6">
												<div className="flex items-start justify-between mb-3">
													<div className="flex-1">
														<h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
															{exp.role}
														</h3>
														<div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
															<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
																<Briefcase className="w-5 h-5" />
															</div>
															{exp.company}
														</div>
													</div>
													<Badge
														variant="secondary"
														className="text-xs"
													>
														{exp.type}
													</Badge>
												</div>
												<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
													<div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
														<Calendar className="w-4 h-4 text-primary" />
														<span className="font-medium">
															{exp.period}
														</span>
													</div>
													<div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
														<TrendingUp className="w-4 h-4 text-primary" />
														<span className="font-medium">
															{exp.duration}
														</span>
													</div>
													<div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
														<MapPin className="w-4 h-4 text-primary" />
														<span className="font-medium">
															{exp.location}
														</span>
													</div>
												</div>
											</div>

											<p className="text-muted-foreground mb-6 leading-relaxed text-base">
												{exp.description}
											</p>

											{/* Responsibilities */}
											<div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border/50">
												<h4 className="font-bold mb-3 flex items-center gap-2 text-base">
													<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
														<span className="text-primary text-xs">
															✓
														</span>
													</div>
													Key Responsibilities
												</h4>
												<ul className="space-y-2 text-sm text-muted-foreground">
													{exp.responsibilities.map(
														(resp, idx) => (
															<li
																key={idx}
																className="flex items-start gap-3 hover:text-foreground transition-colors"
															>
																<span className="text-primary mt-1 font-bold">
																	•
																</span>
																<span className="leading-relaxed">
																	{resp}
																</span>
															</li>
														)
													)}
												</ul>
											</div>

											{/* Achievements */}
											<div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
												<h4 className="font-bold mb-3 flex items-center gap-2 text-base">
													<div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
														<TrendingUp className="w-3.5 h-3.5 text-primary" />
													</div>
													Key Achievements
												</h4>
												<ul className="space-y-2 text-sm">
													{exp.achievements.map(
														(achievement, idx) => (
															<li
																key={idx}
																className="flex items-start gap-3 text-primary font-medium"
															>
																<TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
																<span className="leading-relaxed">
																	{
																		achievement
																	}
																</span>
															</li>
														)
													)}
												</ul>
											</div>

											{/* Technologies */}
											<div>
												<h4 className="font-bold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
													Tech Stack
												</h4>
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map(
														(tech, idx) => (
															<Badge
																key={idx}
																variant="outline"
																className="hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
															>
																{tech}
															</Badge>
														)
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom CTA */}
				<motion.div
					{...fadeInUp}
					className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5"
				>
					<h2 className="text-2xl font-bold mb-4">
						Want to know more about my work?
					</h2>
					<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
						Check out my projects portfolio to see detailed case
						studies and the impact I've made at each company.
					</p>
					<div className="flex gap-4 justify-center">
						<a
							href="/projects"
							className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
						>
							View Projects
						</a>
						<a
							href="/contact"
							className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
						>
							Get in Touch
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
