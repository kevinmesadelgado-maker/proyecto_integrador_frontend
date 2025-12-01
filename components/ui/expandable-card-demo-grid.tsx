"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import { pinturas } from "@/types/pinturas"; 
import Link from "next/link";


export function ExpandableCardDemo({ data }: { data: pinturas[] }) {
  // El tipo 'pinturas' debe tener la propiedad 'visitUrl' (como en tu types.ts)
  const [active, setActive] = useState<pinturas | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

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

      {/* Modal - Se muestra cuando una tarjeta está activa */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-100 px-4">
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              {/* Header */}
              <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
                <motion.h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {active.title}
                </motion.h3>

                {/* 🚀 EL CAMBIO CLAVE AQUÍ: Usamos active.visitUrl */}
                <Link
                  href={active.visitUrl!}
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-neutral-800 transition"
                >
                  Visit
                </Link>
              </div>

              {/* Año */}
              <div className="px-4 pb-2 text-neutral-600 dark:text-neutral-400">
                <p className="text-sm">Año: {active.creation}</p>
              </div>

              {/* Descripción */}
              <div className="p-4">
                {active.description && (
                  <motion.p className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <ul className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-14">
        {data.map((item) => (
          <motion.div
            layoutId={`card-${item.id}-${id}`}
            key={item.id}
            onClick={() => setActive(item)} // Esta función abre el modal, no navega.
            className="p-4 max-w-[380px] bg-neutral-900 border border-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-800 transition"
          >
            <motion.div layoutId={`image-${item.id}-${id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full rounded-lg object-cover object-top"
              />
            </motion.div>

            <div className="mt-3 text-center">
              <motion.h3 className="text-white text-base font-medium">
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}