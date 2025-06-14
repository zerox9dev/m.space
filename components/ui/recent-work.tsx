"use client"

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/app/data";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export function RecentWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredProject = PROJECTS.find((p) => p.id === hoveredId);

  return (
    <>
      <div className="bg-white p-0 md:p-4 rounded-sm dark:bg-zinc-900 flex flex-col">
        <div className="flex justify-between items-center mb-2 px-4 md:px-0">
          <h2 className="tracking-widest text-gray-500 text-base font-semibold uppercase mb-0.5">Recent Work</h2>
        </div>
          {/* Список проектов */}
          <div className="flex-1 select-none md:py-0 flex flex-col justify-center">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onFocus={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                className={`cursor-pointer text-md font-medium md:font-semibold px-4 py-2 rounded transition-colors outline-none mb-1 w-full
                  ${hoveredId === project.id
                    ? "text-black dark:text-white font-bold bg-zinc-100 dark:bg-zinc-800"
                    : "text-zinc-900/80 dark:text-zinc-100/80 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40"}
                `}
              >
                <Link href={project.link} className="block w-full h-full">
                  {project.name}
                </Link>
              </div>
            ))}
          </div>

      </div>
      {/* Независимое overlay превью */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            key={hoveredProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 z-50 w-[320px] rounded-sm shadow-2xl bg-white dark:bg-zinc-950/80 ring-1 ring-zinc-200/50 dark:ring-zinc-800/50 overflow-hidden flex-col border border-zinc-200 dark:border-zinc-800 pointer-events-none"
            style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
          >
            {/* Картинка 4:3 */}
            <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
              <Image
                src={hoveredProject.image}
                alt={hoveredProject.name}
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </div>
            {/* Подпись */}
            <div className="p-4 flex flex-col justify-between flex-1 min-h-0">
              <h3 className="text-base font-bold mb-1 leading-tight">{hoveredProject.name}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">{hoveredProject.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 