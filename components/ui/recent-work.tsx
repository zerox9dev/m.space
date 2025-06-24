"use client"

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/app/data";
import Link from "next/link";

export function RecentWork() {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0]?.id ?? "");
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <div className="bg-white p-0 md:p-4 border-[#F4F4F5] border-3 rounded-md dark:bg-zinc-900 flex flex-col relative mt-6">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>Над чим працював</span>
      </div>
      <div className="flex flex-row gap-4 md:gap-4 w-full">
        <div className="flex flex-col min-w-[160px] md:min-w-[200px]">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onMouseEnter={() => setSelectedId(project.id)}
              onFocus={() => setSelectedId(project.id)}
              onClick={() => setSelectedId(project.id)}
              tabIndex={0}
              className={`text-left cursor-pointer text-md font-medium md:font-semibold px-4 py-2 rounded transition-colors outline-none mb-1 w-full
                ${selectedId === project.id
                  ? "text-black dark:text-white font-bold bg-zinc-100 dark:bg-zinc-800"
                  : "text-zinc-900/80 dark:text-zinc-100/80 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40"}
              `}
            >
              <span>{project.name}</span>
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
                <h3 className="text-base font-bold mb-1 leading-tight">{selectedProject.name}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">{selectedProject.description}</p>
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-black dark:text-white underline hover:text-zinc-700 dark:hover:text-zinc-300 mt-1 w-fit"
                >
                  See more
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 