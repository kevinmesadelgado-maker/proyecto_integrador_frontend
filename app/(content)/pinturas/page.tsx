// app/pinturas/page.tsx
'use client';

import { useEffect, useState } from 'react';
// ✅ Importamos el servicio de pinturas
import { pinturasService } from '@/services/pinturasService'; 
import type { pinturas } from '@/types/pinturas'; 
import { PinturaFlipCard } from '@/components/ui/PinturaFlipCard'; 
import Link from "next/link";

export default function PinturasPage() {
  const [pinturasData, setPinturasData] = useState<pinturas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        // ✅ USANDO EL MÉTODO CORRECTO
        const data: pinturas[] = await pinturasService.getAll(); 
        setPinturasData(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Error al cargar pinturas";
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
            <h1 className="text-xl">Cargando la galería de pinturas...</h1>
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
          Galería de Pinturas
        </h1>
         {/* BOTÓN VOLVER A CATEGORÍAS */}
      <div className="mb-12 w-full flex justify-start">
        <Link
          href="/categories"
          className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          ← Volver
        </Link>
      </div>

        {pinturasData.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No hay pinturas.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
            {pinturasData.map((item) => (
              <PinturaFlipCard key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}