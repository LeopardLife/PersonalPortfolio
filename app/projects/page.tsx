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
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Project Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scalable web applications with 3D visualizations, microservices architectures, and proven impact across industries.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
              <Folder className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-muted-foreground">Total Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div className="text-left">
                <p className="text-2xl font-bold">{stats.featured}</p>
                <p className="text-xs text-muted-foreground">Featured</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
              <div className="text-left">
                <p className="text-2xl font-bold">{stats.categories}</p>
                <p className="text-xs text-muted-foreground">Categories</p>
              </div>
            </div>
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
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of{' '}
            <span className="font-semibold text-foreground">{stats.total}</span> projects
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
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
