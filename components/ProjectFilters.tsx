'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, technologies } from '@/lib/data/projects';
import { motion } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { useState } from 'react';

interface ProjectFiltersProps {
  selectedCategory: string;
  selectedTechnology: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSearchChange: (query: string) => void;
}

export default function ProjectFilters({
  selectedCategory,
  selectedTechnology,
  searchQuery,
  onCategoryChange,
  onTechnologyChange,
  onSearchChange,
}: ProjectFiltersProps) {
  const [showFilters, setShowFilters] = useState(true);

  const handleClearFilters = () => {
    onCategoryChange('All');
    onTechnologyChange('All');
    onSearchChange('');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnology !== 'All' || searchQuery !== '';

  return (
    <div className="space-y-6">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={handleClearFilters}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-6 p-6 bg-muted/50 rounded-lg border"
        >
          {/* Category Filter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">Category</label>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => onCategoryChange('All')}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary/80 transition-colors"
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">Technology</label>
              {selectedTechnology !== 'All' && (
                <button
                  onClick={() => onTechnologyChange('All')}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTechnology === tech ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary/80 transition-colors"
                  onClick={() => onTechnologyChange(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Active filters:</span>

          {selectedCategory !== 'All' && (
            <Badge variant="secondary" className="gap-1">
              Category: {selectedCategory}
              <button
                onClick={() => onCategoryChange('All')}
                className="ml-1 hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {selectedTechnology !== 'All' && (
            <Badge variant="secondary" className="gap-1">
              Tech: {selectedTechnology}
              <button
                onClick={() => onTechnologyChange('All')}
                className="ml-1 hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: "{searchQuery}"
              <button
                onClick={() => onSearchChange('')}
                className="ml-1 hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </motion.div>
      )}
    </div>
  );
}
