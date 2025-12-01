"use client";

import React, { useEffect, useId, useRef } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import { artistas } from "@/types/artistas";

export default function ArtistExpandableCard({
  artist,
  onClose,
}: {
  artist: artistas | null;
  onClose: () => void;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onClose);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = artist ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [artist, onClose]);

  return (
    <AnimatePresence>
      {artist && (
        <>
          {/* Overlay oscurecido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Tarjeta expandida */}
          <div className="fixed inset-0 z-50 grid place-items-center px-4">
            <motion.div
              layoutId={`card-${artist.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] flex flex-col bg-white dark:bg-neutral-900 
                         sm:rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Imagen */}
              <motion.div layoutId={`image-${artist.id}-${id}`}>
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              {/* Encabezado */}
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <motion.h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {artist.name}
                </motion.h3>

                <button
                  onClick={onClose}
                  className="px-3 py-1 bg-black text-white rounded-md hover:bg-neutral-800 text-sm"
                >
                  Cerrar
                </button>
              </div>

              {/* Año */}
              <div className="px-4 pb-2 text-neutral-600 dark:text-neutral-400">
                <p className="text-sm">
                  <strong>Nacimiento:</strong> {artist.birthday}
                </p>
              </div>

              {/* Obras */}
              <div className="px-4 pb-2 text-neutral-600 dark:text-neutral-400">
                <p className="text-sm">
                  <strong>Obra destacada:</strong> {artist.famousworks}
                </p>
              </div>

              {/* Descripción */}
              <div className="p-4">
                <motion.p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {artist.bio}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
