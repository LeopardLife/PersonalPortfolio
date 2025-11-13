'use client';

import ModelViewer from "@/components/3d/ModelViewer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import {
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiThreedotjs,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

export default function Hero() {
  const techLogos = [
		{
			alt: "Next.js",
			icon: SiNextdotjs,
			color: "hover:text-black dark:hover:text-white",
		},
		{ alt: "NestJS", icon: SiNestjs, color: "hover:text-red-500" },
		{
			alt: "Three.js",
			icon: SiThreedotjs,
			color: "hover:text-black dark:hover:text-white",
		},
		{ alt: "TypeScript", icon: SiTypescript, color: "hover:text-blue-500" },
		{ alt: "PostgreSQL", icon: SiPostgresql, color: "hover:text-blue-600" },
		{ alt: "Vue.js", icon: SiVuedotjs, color: "hover:text-green-500" },
  ];

  return (
		<section className="min-h-screen flex items-center justify-center pt-16 relative">
			<div className="absolute inset-0 -z-10 opacity-30">
				<ModelViewer />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="text-left space-y-6"
					>
						<div>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-primary font-semibold mb-2"
							>
								👋 Welcome to my portfolio
							</motion.p>
							<h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-transparent bg-clip-text">
								Phạm Nguyễn Thuận
							</h1>
						</div>

						<div className="space-y-3">
							<p className="text-2xl sm:text-3xl font-bold text-foreground">
								Fullstack Developer
							</p>
							<p className="text-lg sm:text-xl text-muted-foreground">
								3D Web Applications Specialist
							</p>
						</div>

						<p className="text-lg text-muted-foreground leading-relaxed">
							Over 4 years building scalable web applications with
							complex 3D visualizations. Specialized in Next.js,
							NestJS, and Three.js with proven impact serving 200+
							facilities.
						</p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="flex flex-wrap gap-3 items-center"
						>
							{techLogos.map((logo, index) => (
								<motion.div
									key={logo.alt}
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.6 + index * 0.1 }}
									className="group"
								>
									<logo.icon
										className={`w-8 h-8 text-muted-foreground transition-colors ${logo.color}`}
									/>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="flex flex-wrap gap-4 pt-4"
						>
							<Link href="/projects">
								<Button
									size="lg"
									className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 gap-2"
								>
									View My Work{" "}
									<ArrowRight className="h-4 w-4" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									size="lg"
									variant="outline"
									className="gap-2"
								>
									<Mail className="h-4 w-4" /> Get In Touch
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 0.3,
							type: "spring",
							stiffness: 200,
							damping: 20,
						}}
						className="flex justify-center md:justify-end relative z-10"
					>
						<div className="relative">
							{/* Gradient background */}
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl" />

							<Avatar className="w-64 h-64 sm:w-80 sm:h-80 border-4 border-primary/20 shadow-2xl relative">
								<AvatarImage
									src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg"
									alt="Phạm Nguyễn Thuận"
									className="object-cover"
								/>
							</Avatar>

							{/* Status badge */}
							<motion.div
								className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-primary/30 shadow-lg"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1, type: "spring" }}
							>
								<div className="flex items-center gap-2">
									<span className="relative flex h-3 w-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
									</span>
									<span className="text-sm font-semibold">
										Available for hire
									</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
}