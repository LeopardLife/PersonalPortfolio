'use client';

import ProjectCard from '@/components/ProjectCard';
import ProjectFilters from '@/components/ProjectFilters';
import { projects } from '@/lib/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import { Folder, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;

      // Technology filter
      const technologyMatch =
        selectedTechnology === 'All' ||
        project.tags.includes(selectedTechnology) ||
        Object.values(project.technologies).flat().includes(selectedTechnology);

      // Search filter
      const searchMatch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.company.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && technologyMatch && searchMatch;
    });
  }, [selectedCategory, selectedTechnology, searchQuery]);

  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    categories: new Set(projects.map(p => p.category)).size,
  };

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
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<Folder className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium text-primary">
							Portfolio Showcase
						</span>
					</motion.div>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
						Project Portfolio
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
						Scalable web applications with 3D visualizations,
						microservices architectures, and proven impact across
						industries.
					</p>

					{/* Quick Stats */}
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 rounded-lg hover:shadow-lg transition-all"
						>
							<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
								<Folder className="h-5 w-5 text-primary" />
							</div>
							<div className="text-left">
								<p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
									{stats.total}
								</p>
								<p className="text-xs text-muted-foreground font-medium">
									Total Projects
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 rounded-lg hover:shadow-lg transition-all"
						>
							<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
								<TrendingUp className="h-5 w-5 text-green-500" />
							</div>
							<div className="text-left">
								<p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
									{stats.featured}
								</p>
								<p className="text-xs text-muted-foreground font-medium">
									Featured
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 rounded-lg hover:shadow-lg transition-all"
						>
							<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
								<span className="text-purple-500 font-bold text-lg">
									#{stats.categories}
								</span>
							</div>
							<div className="text-left">
								<p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
									{stats.categories}
								</p>
								<p className="text-xs text-muted-foreground font-medium">
									Categories
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Filters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-12"
				>
					<ProjectFilters
						selectedCategory={selectedCategory}
						selectedTechnology={selectedTechnology}
						searchQuery={searchQuery}
						onCategoryChange={setSelectedCategory}
						onTechnologyChange={setSelectedTechnology}
						onSearchChange={setSearchQuery}
					/>
				</motion.div>

				{/* Results Count */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mb-6"
				>
					<p className="text-muted-foreground">
						Showing{" "}
						<span className="font-semibold text-foreground">
							{filteredProjects.length}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-foreground">
							{stats.total}
						</span>{" "}
						projects
					</p>
				</motion.div>

				{/* Projects Grid */}
				{filteredProjects.length > 0 ? (
					<motion.div
						layout
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project, index) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={index}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="text-center py-16"
					>
						<div className="mb-4 text-6xl">🔍</div>
						<h3 className="text-2xl font-semibold mb-2">
							No projects found
						</h3>
						<p className="text-muted-foreground mb-6">
							Try adjusting your filters or search query
						</p>
					</motion.div>
				)}
			</div>
		</div>
  );
}
