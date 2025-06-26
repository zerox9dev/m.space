"use client"

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { PROJECTS } from "@/app/data";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Category = 'UX/UI' | 'Front & MVP' | 'Bots & AI';

export function RecentWork() {
  const [selectedId, setSelectedId] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category>('UX/UI');
  const t = useTranslations();

  const categoryCounts = useMemo(() => {
    const counts = {
      'UX/UI': 0,
      'Front & MVP': 0,
      'Bots & AI': 0
    };
    
    PROJECTS.forEach(project => {
      counts[project.category]++;
    });
    
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  // Make sure we have a valid selected project after filtering
  const selectedProject = filteredProjects.find(p => p.id === selectedId) || filteredProjects[0];
  
  // Initialize selectedId on first render and when category changes
  React.useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedId(filteredProjects[0].id);
    }
  }, [filteredProjects]);

  return (
    <div className="bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 flex flex-col relative gap-4">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('recentWork.title')}</span>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap px-0 pb-2 border-b border-zinc-100 dark:border-zinc-800">
        <button
          onClick={() => setActiveCategory('UX/UI')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors ${
            activeCategory === 'UX/UI'
              ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-200'
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
          }`}
        >
          {t('recentWork.categories.uxui')}
          <span className="bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5 rounded-full text-xs">
            {categoryCounts['UX/UI']}
          </span>
        </button>
        <button
          onClick={() => setActiveCategory('Front & MVP')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors ${
            activeCategory === 'Front & MVP'
              ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-200'
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
          }`}
        >
          {t('recentWork.categories.frontend')}
          <span className="bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5 rounded-full text-xs">
            {categoryCounts['Front & MVP']}
          </span>
        </button>
        <button
          onClick={() => setActiveCategory('Bots & AI')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors ${
            activeCategory === 'Bots & AI'
              ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-200'
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
          }`}
        >
          {t('recentWork.categories.bots')}
          <span className="bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5 rounded-full text-xs">
            {categoryCounts['Bots & AI']}
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full">
        <div className="flex flex-col min-w-[160px] md:min-w-[200px]">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onMouseEnter={() => setSelectedId(project.id)}
              onFocus={() => setSelectedId(project.id)}
              onClick={() => setSelectedId(project.id)}
              tabIndex={0}
              className={`text-left cursor-pointer text-md font-medium md:font-semibold px-4 py-2 rounded transition-colors outline-none mb-1 w-full
                ${selectedProject && selectedProject.id === project.id
                  ? "text-black dark:text-zinc-200 font-bold bg-zinc-100 dark:bg-zinc-800"
                  : "text-zinc-900/80 dark:text-zinc-100/80 hover:text-black dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"}
              `}
            >
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className={`block w-full flex items-center group ${
                  selectedProject && selectedProject.id === project.id
                    ? "text-black dark:text-zinc-200"
                    : "text-zinc-900/80 dark:text-zinc-100/80 hover:text-black dark:hover:text-zinc-200"
                }`}
              >
                <span>{project.name}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-60 transition-opacity" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </Link>
            </button>
          ))}
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          {selectedProject && (
            <div className="block group">
              <div className="relative w-full aspect-[4/3] dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 rounded overflow-hidden">
                <Image
                  src={selectedProject.image || `https://www.google.com/s2/favicons?domain=${new URL(selectedProject.link).hostname}&sz=128`}
                  alt={selectedProject.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                  priority
                />
              </div>
              <div className="p-2.5 flex flex-col justify-between flex-1 min-h-0 bg-zinc-50 dark:bg-zinc-900 rounded-b-sm">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-bold leading-tight">{selectedProject.name}</h3>

                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-3">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 