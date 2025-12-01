// app/artistas/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { artistasService } from '@/services/artistasServices'; 
import type { artistas } from '@/types/artistas'; 

import CircularGallery from '@/components/ui/CircularGallery'; 
import ArtistExpandableCard from "@/components/ui/ArtistExpandableCard";


export default function ArtistasPage() {
  const [artistasData, setArtistasData] = useState<artistas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await artistasService.getAll(); 
        setArtistasData(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Error al cargar artistas";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Manejo de carga y error (sin cambios)
  if (loading) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <h1 className="text-xl text-gray-300">Cargando el directorio de artistas...</h1>
        </div>
     );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-900">
        <p className="text-red-500 text-2xl">Error: {error}</p>
      </div>
    );
  }

  const galleryItems = artistasData.map(artist => ({
      image: artist.image || 'https://via.placeholder.com/800x600?text=Artista+Sin+Imagen', // URL de fallback
      text: artist.name 
  }));

  if (galleryItems.length === 0) {
      return (
          <div className="min-h-screen py-12 px-4 bg-gray-900 flex items-center justify-center">
              <p className="text-center text-xl text-gray-400">
                  No se encontraron artistas para mostrar en la galería.
              </p>
          </div>
      );
  }

  return (
    <div className="py-12 px-4 bg-gray-900 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-12 text-center border-b pb-4 border-gray-700 max-w-7xl w-full">
        Artistas
      </h1>

      <div className="relative w-full" style={{ height: '600px', maxWidth: '1400px' }}>
          <CircularGallery 
              items={galleryItems} // ✅ Enviamos los datos mapeados
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollEase={0.02}
          />
      </div>

    </div>
  );
}
