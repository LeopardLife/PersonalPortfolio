'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: 'Clean Code Advocate',
    description: 'Writing maintainable, well-documented code that others can understand and build upon. Believe in code reviews and continuous refactoring.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Obsessed with optimization. From 850ms to 340ms queries, 60% faster load times - every millisecond counts for user experience.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Users,
    title: 'Collaboration & Communication',
    description: 'Strong believer in Agile practices. Clear communication reduces errors by 25% and improves team velocity significantly.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Target,
    title: 'User-Centric Design',
    description: 'Technology serves users. From accessibility features like text-to-speech to intuitive 3D interfaces - UX is paramount.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'From mechanical engineering to fullstack development. Always exploring new technologies and staying current with industry trends.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Heart,
    title: 'Quality & Reliability',
    description: '99.7% uptime, zero-downtime deployments, comprehensive testing - building systems that teams and users can trust.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
];

const approach = {
  problem: 'Understanding the Problem',
  steps: [
    'Deep dive into requirements and user needs',
    'Analyze existing systems and identify bottlenecks',
    'Research best practices and potential solutions',
  ],
  design: 'Architectural Design',
  designSteps: [
    'Create detailed ERD and system diagrams',
    'Design scalable database schemas',
    'Plan for edge cases and future growth',
  ],
  implement: 'Implementation',
  implementSteps: [
    'Write clean, documented code',
    'Implement comprehensive testing',
    'Conduct code reviews and refactoring',
  ],
  optimize: 'Optimization & Monitoring',
  optimizeSteps: [
    'Performance testing and profiling',
    'Query optimization and caching strategies',
    'Continuous monitoring and improvement',
  ],
};

export default function ValuesPhilosophy() {
  return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Values */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Core Values
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Principles that guide my work and shape my approach
							to development
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -8 }}
							>
								<Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
									<CardContent className="p-6">
										<div
											className={`${value.bgColor} ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
										>
											<value.icon className="w-7 h-7" />
										</div>
										<h3 className="text-xl font-bold mb-3">
											{value.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Work Approach */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-muted/50 rounded-2xl p-8 sm:p-12"
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							My Development Approach
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A systematic, proven methodology refined through 5+
							successful projects
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Step 1 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="relative h-full"
						>
							<div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
								1
							</div>
							<Card className="pt-8 h-full flex flex-col">
								<CardContent className="flex-1">
									<h3 className="text-xl font-bold mb-3 text-primary">
										{approach.problem}
									</h3>
									<ul className="space-y-2">
										{approach.steps.map((step, i) => (
											<li
												key={i}
												className="text-sm text-muted-foreground flex items-start gap-2"
											>
												<span className="text-primary mt-1">
													•
												</span>
												{step}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>

						{/* Step 2 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="relative h-full"
						>
							<div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
								2
							</div>
							<Card className="pt-8 h-full flex flex-col">
								<CardContent className="flex-1">
									<h3 className="text-xl font-bold mb-3 text-purple-600">
										{approach.design}
									</h3>
									<ul className="space-y-2">
										{approach.designSteps.map((step, i) => (
											<li
												key={i}
												className="text-sm text-muted-foreground flex items-start gap-2"
											>
												<span className="text-purple-600 mt-1">
													•
												</span>
												{step}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>

						{/* Step 3 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="relative h-full"
						>
							<div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
								3
							</div>
							<Card className="pt-8 h-full flex flex-col">
								<CardContent className="flex-1">
									<h3 className="text-xl font-bold mb-3 text-green-600">
										{approach.implement}
									</h3>
									<ul className="space-y-2">
										{approach.implementSteps.map(
											(step, i) => (
												<li
													key={i}
													className="text-sm text-muted-foreground flex items-start gap-2"
												>
													<span className="text-green-600 mt-1">
														•
													</span>
													{step}
												</li>
											)
										)}
									</ul>
								</CardContent>
							</Card>
						</motion.div>

						{/* Step 4 */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="relative h-full"
						>
							<div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
								4
							</div>
							<Card className="pt-8 h-full flex flex-col">
								<CardContent className="flex-1">
									<h3 className="text-xl font-bold mb-3 text-orange-600">
										{approach.optimize}
									</h3>
									<ul className="space-y-2">
										{approach.optimizeSteps.map(
											(step, i) => (
												<li
													key={i}
													className="text-sm text-muted-foreground flex items-start gap-2"
												>
													<span className="text-orange-600 mt-1">
														•
													</span>
													{step}
												</li>
											)
										)}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
  );
}
