'use client';

import ModelViewer from "@/components/3d/ModelViewer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layers, Mail } from "lucide-react";
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
		<section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
			{/* Animated Grid Background */}
			<div className="absolute inset-0 -z-20">
				<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
			</div>

			{/* Animated Orbs */}
			<motion.div
				className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Floating Tech Icons */}
			{[
				{ icon: Code2, top: "15%", left: "10%", delay: 0 },
				{ icon: Database, top: "25%", right: "15%", delay: 2 },
				{ icon: Layers, bottom: "20%", left: "15%", delay: 4 },
			].map((item, idx) => (
				<motion.div
					key={idx}
					className="absolute text-primary/10"
					style={{
						top: item.top,
						left: item.left,
						right: item.right,
						bottom: item.bottom,
					}}
					animate={{
						y: [0, -20, 0],
						rotate: [0, 10, 0],
					}}
					transition={{
						duration: 6,
						delay: item.delay,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<item.icon className="w-16 h-16" />
				</motion.div>
			))}

			{/* 3D Background */}
			<div className="absolute inset-0 -z-10 opacity-20">
				<ModelViewer />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-left space-y-8"
					>
						<div className="space-y-4">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
							>
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
								</span>
								<span className="text-sm font-semibold text-primary">
									Available for Opportunities
								</span>
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-5xl sm:text-7xl font-bold leading-tight"
								style={{ lineHeight: "1.2" }}
							>
								<span className="block text-foreground mb-2">
									Hi, I'm
								</span>
								<span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient pb-2">
									Phạm Nguyễn Thuận
								</span>
							</motion.h1>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="space-y-3"
						>
							<div className="flex items-center gap-3">
								<div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
							</div>
							<p className="text-2xl sm:text-3xl font-bold text-foreground">
								Fullstack Developer
							</p>
							<p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
								3D Web Applications Specialist
							</p>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
							className="text-lg text-muted-foreground leading-relaxed"
						>
							Building{" "}
							<span className="text-foreground font-semibold">
								scalable web applications
							</span>{" "}
							with complex{" "}
							<span className="text-foreground font-semibold">
								3D visualizations
							</span>
							.
							<br />
							<span className="text-primary font-semibold">
								4+ years
							</span>{" "}
							of experience •
							<span className="text-primary font-semibold">
								{" "}
								200+ facilities
							</span>{" "}
							served
						</motion.p>

						{/* Tech Stack with Animated Border */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="relative"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl" />
							<div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
								<p className="text-sm font-semibold text-muted-foreground mb-4">
									Tech Stack
								</p>
								<div className="flex flex-wrap gap-4 items-center">
									{techLogos.map((logo, index) => (
										<motion.div
											key={logo.alt}
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												delay: 0.8 + index * 0.1,
												type: "spring",
												stiffness: 200,
											}}
											whileHover={{
												scale: 1.2,
												rotate: [0, -10, 10, 0],
											}}
											className="group relative"
										>
											<div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
											<logo.icon
												className={`relative w-10 h-10 text-muted-foreground transition-colors ${logo.color}`}
											/>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9 }}
							className="flex flex-wrap gap-4 pt-4"
						>
							<Link href="/projects">
								<Button
									size="lg"
									className="group bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 gap-2 relative overflow-hidden"
								>
									<span className="relative z-10 flex items-center gap-2">
										View My Work
										<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</span>
									<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									size="lg"
									variant="outline"
									className="gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all"
								>
									<Mail className="h-4 w-4" /> Get In Touch
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
						animate={{ opacity: 1, scale: 1, rotateY: 0 }}
						transition={{
							delay: 0.4,
							duration: 0.8,
							type: "spring",
							stiffness: 100,
						}}
						className="flex justify-center md:justify-end relative"
					>
						<div className="relative group">
							{/* Animated Rings */}
							<motion.div
								className="absolute inset-0 rounded-full border-2 border-primary/30"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.5, 0.2, 0.5],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="absolute inset-0 rounded-full border-2 border-purple-500/30"
								animate={{
									scale: [1, 1.15, 1],
									opacity: [0.3, 0.1, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
							/>

							{/* Gradient Glow */}
							<div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />

							{/* Avatar with Glassmorphism Border */}
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
								<Avatar className="relative w-64 h-64 sm:w-80 sm:h-80 border-4 border-background shadow-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
									<AvatarImage
										src="/assets/146456209_1533933150144965_7898054757490268151_n.jpg"
										alt="Phạm Nguyễn Thuận"
										className="object-cover"
									/>
								</Avatar>
							</div>

							{/* Floating Particles */}
							{[...Array(3)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute w-2 h-2 bg-primary rounded-full"
									style={{
										top: `${20 + i * 30}%`,
										right: `${-10 + i * 5}%`,
									}}
									animate={{
										y: [0, -20, 0],
										opacity: [0.5, 1, 0.5],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										delay: i * 0.4,
										ease: "easeInOut",
									}}
								/>
							))}

							{/* Status Badge with Tech Look */}
							<motion.div
								className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-2xl px-6 py-4 border-2 border-primary/30 shadow-xl whitespace-nowrap"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2, type: "spring" }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex items-center gap-3">
									<div className="relative">
										<span className="relative flex h-3 w-3">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-lg shadow-green-500/50"></span>
										</span>
									</div>
									<div className="flex flex-col">
										<span className="text-sm font-bold text-foreground whitespace-nowrap">
											Available for Hire
										</span>
										<span className="text-xs text-muted-foreground whitespace-nowrap">
											Open to opportunities
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
}