'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiAngular, SiDocker, SiGit, SiGooglecloud, SiGraphql, SiJavascript, SiMariadb, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSpring, SiThreedotjs, SiTypescript, SiVuedotjs } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, level: 95, years: '2+' },
      { name: 'Nuxt.js', icon: SiVuedotjs, level: 95, years: '3+' },
      { name: 'React', icon: SiReact, level: 90, years: '3+' },
      { name: 'Vue.js', icon: SiVuedotjs, level: 95, years: '3+' },
      { name: 'Angular', icon: SiAngular, level: 75, years: '1+' },
      { name: 'Three.js', icon: SiThreedotjs, level: 90, years: '3+' },
      { name: 'TypeScript', icon: SiTypescript, level: 95, years: '4+' },
      { name: 'JavaScript', icon: SiJavascript, level: 95, years: '4+' },
    ],
  },
  {
    title: 'Backend Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'NestJS', icon: SiNestjs, level: 95, years: '3+' },
      { name: 'Node.js', icon: SiNodedotjs, level: 90, years: '4+' },
      { name: 'Spring Boot', icon: SiSpring, level: 85, years: '1+' },
      { name: 'Java', icon: FaJava, level: 80, years: '1+' },
      { name: 'GraphQL', icon: SiGraphql, level: 85, years: '2+' },
    ],
  },
  {
    title: 'Database & Data',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90, years: '3+' },
      { name: 'MySQL', icon: SiMysql, level: 90, years: '3+' },
      { name: 'MongoDB', icon: SiMongodb, level: 85, years: '3+' },
      { name: 'MariaDB', icon: SiMariadb, level: 80, years: '2+' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Google Cloud', icon: SiGooglecloud, level: 85, years: '3+' },
      { name: 'Docker', icon: SiDocker, level: 80, years: '2+' },
      { name: 'Git', icon: SiGit, level: 95, years: '4+' },
    ],
  },
];

const specializedSkills = [
  '3D Model Optimization',
  'Real-time Data Sync',
  'Performance Tuning',
  'Legacy Migration',
  'Microservices Architecture',
  'RESTful API Design',
  'Database Optimization',
  'System Architecture',
];

export default function SkillsShowcase() {
  return (
		<section className="py-16 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Technical Skills
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Comprehensive expertise across modern web technologies
						and frameworks
					</p>
				</motion.div>

				{/* Skill Categories */}
				<div className="grid lg:grid-cols-2 gap-8 mb-12">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
						>
							<Card className="h-full hover:shadow-xl transition-shadow">
								<CardHeader>
									<CardTitle
										className={`bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}
									>
										{category.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									{category.skills.map(
										(skill, skillIndex) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{
													opacity: 1,
													x: 0,
												}}
												viewport={{ once: true }}
												transition={{
													delay:
														categoryIndex * 0.1 +
														skillIndex * 0.05,
												}}
												className="group"
											>
												<div className="flex items-center justify-between mb-2">
													<div className="flex items-center gap-3">
														<div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg group-hover:scale-110 transition-transform">
															<skill.icon className="w-6 h-6" />
														</div>
														<div>
															<p className="font-semibold">
																{skill.name}
															</p>
															<p className="text-xs text-muted-foreground">
																{skill.years}{" "}
																experience
															</p>
														</div>
													</div>
													<span className="text-sm font-semibold text-primary">
														{skill.level}%
													</span>
												</div>

												{/* Progress Bar */}
												<div className="h-2 bg-muted rounded-full overflow-hidden">
													<motion.div
														initial={{ width: 0 }}
														whileInView={{
															width: `${skill.level}%`,
														}}
														viewport={{
															once: true,
														}}
														transition={{
															duration: 1,
															delay:
																categoryIndex *
																	0.1 +
																skillIndex *
																	0.05,
														}}
														className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
													/>
												</div>
											</motion.div>
										)
									)}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Specialized Skills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<Card>
						<CardHeader>
							<CardTitle>Specialized Expertise</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
								{specializedSkills.map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{
											delay: 0.5 + index * 0.05,
										}}
										whileHover={{ scale: 1.05 }}
									>
										<Badge
											variant="secondary"
											className="text-sm py-2 px-4 cursor-default"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Quick Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12"
				>
					<Card className="text-center">
						<CardContent className="pt-6">
							<p className="text-4xl font-bold text-primary mb-2">
								5+
							</p>
							<p className="text-sm text-muted-foreground">
								Technologies Mastered
							</p>
						</CardContent>
					</Card>
					<Card className="text-center">
						<CardContent className="pt-6">
							<p className="text-4xl font-bold text-purple-500 mb-2">
								4+
							</p>
							<p className="text-sm text-muted-foreground">
								Years Experience
							</p>
						</CardContent>
					</Card>
					<Card className="text-center">
						<CardContent className="pt-6">
							<p className="text-4xl font-bold text-green-500 mb-2">
								5+
							</p>
							<p className="text-sm text-muted-foreground">
								Projects Delivered
							</p>
						</CardContent>
					</Card>
					<Card className="text-center">
						<CardContent className="pt-6">
							<p className="text-4xl font-bold text-orange-500 mb-2">
								5+
							</p>
							<p className="text-sm text-muted-foreground">
								Industries Served
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
  );
}
