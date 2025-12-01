// app/pinturas/page.tsx
'use client';

import { useEffect, useState } from 'react';
// ✅ Importamos el servicio de pinturas
import { fotografiasService } from '@/services/fotografiasService'; 
import type { fotografia } from '@/types/fotografia'; 
import { FotografiaFlipCard } from '@/components/ui/fotografiaFlipCard'; 

export default function FotografiasPage() {
  const [fotografiasData, setFotografiasData] = useState<fotografia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        // ✅ USANDO EL MÉTODO CORRECTO
        const data: fotografia[] = await fotografiasService.getAll(); 
        setFotografiasData(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Error al cargar esculturas";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
     return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-xl">Cargando la galería de fotografias...</h1>
        </div>
     );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-red-600 text-2xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-950 mb-12 text-center">
          Galería de fotografías
        </h1>

        {fotografiasData.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No hay fotografías.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
            {fotografiasData.map((item) => (
              <FotografiaFlipCard key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}