"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";

interface Item {
  id: string | number;
  title: string;
  image: string;
  description?: string;
  visitUrl?: string;
}

export function ExpandableCardDemo({ data }: { data: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* EXPANDED CARD */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-100 px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[500px] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-80 object-cover object-top"
              />

              <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {active.title}
                </h3>

                {active.visitUrl && (
                  <Link
                    href={active.visitUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-neutral-800 transition"
                  >
                    Visit
                  </Link>
                )}
              </div>

              <div className="p-4">
                {active.description && (
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* GRID */}
      <ul className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-14">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item)}
            className="p-4 max-w-[380px] bg-neutral-900 border border-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-800 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full rounded-lg object-cover object-top"
            />

            <div className="mt-3 text-center">
              <h3 className="text-white text-base font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
