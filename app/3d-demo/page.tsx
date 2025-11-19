'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Box, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ModelViewerWrapper = dynamic(() => import('@/components/3d/ModelViewerWrapper'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-card/50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

const MODELS = [
	{
		id: "astronaut",
		name: "Astronaut",
		src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
		poster: "https://modelviewer.dev/shared-assets/models/Astronaut.webp",
		alt: "A 3D model of an astronaut",
	},
	{
		id: "robot",
		name: "Robot Expressive",
		src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
		poster: "https://modelviewer.dev/shared-assets/models/RobotExpressive.webp",
		alt: "A 3D model of a robot",
	},
];

export default function ThreeDemoPage() {
	const [selectedModel, setSelectedModel] = useState(MODELS[0]);

	return (
		<div className="min-h-screen pt-24 pb-16 relative">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
			<div className="absolute top-32 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
			<div className="absolute top-64 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<Sparkles className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium text-primary">
							AR Ready Experience
						</span>
					</motion.div>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
						<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
							Interactive 3D & AR
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Explore high-quality 3D models with built-in Augmented
						Reality support. Works seamlessly on Android (WebXR) and
						iOS (Quick Look).
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-3 gap-8">
					{/* 3D Viewer */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="lg:col-span-2 h-[500px] bg-card/50 backdrop-blur border-2 border-primary/20 rounded-xl overflow-hidden"
					>
						<ModelViewerWrapper
							src={selectedModel.src}
							poster={selectedModel.poster}
							alt={selectedModel.alt}
							autoRotate={true}
							className="w-full h-full"
						/>
					</motion.div>

					{/* Controls */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="space-y-6"
					>
						<Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
							<CardContent className="pt-6">
								<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
									<Box className="w-5 h-5" />
									Select Model
								</h3>
								<div className="grid gap-3">
									{MODELS.map((model) => (
										<Button
											key={model.id}
											variant={
												selectedModel.id === model.id
													? "default"
													: "outline"
											}
											className="w-full justify-start"
											onClick={() =>
												setSelectedModel(model)
											}
										>
											{model.name}
										</Button>
									))}
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
							<CardContent className="pt-6 space-y-4 text-sm text-muted-foreground">
								<h3 className="text-lg font-semibold text-foreground mb-2">
									Instructions
								</h3>
								<p>
									• <strong>Rotate:</strong> Drag with one
									finger/mouse
								</p>
								<p>
									• <strong>Zoom:</strong> Pinch or scroll
									wheel
								</p>
								<p>
									• <strong>AR:</strong> Click the button in
									bottom-right corner on mobile devices
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
