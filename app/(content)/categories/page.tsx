'use client';

import { useEffect, useState } from 'react';
import { productService } from '@/services/CategoriesService';
import type { categories } from '@/types/categories';

import { Card } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/skeleton';
import { ExpandableCardDemo } from '@/components/ui/expandable-card-demo-grid';

export default function BasicPage() {
  const [categories, setcategories] = useState<categories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll();
        setcategories(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Error al cargar productos";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Cargando productos...</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <Card key={i}>
                <Skeleton className="h-48 w-full" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-2xl mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/*  Aquí el H1 a la izquierda y en gris */}
        <h1 className="text-4xl font-bold text-gray-950 mb-8 text-left">
          Categorías
        </h1>

        {categories.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No hay productos. ¡Agrega algunos en MockAPI.io!
          </p>
        ) : (
          <ExpandableCardDemo data={categories} />
        )}

      </div>
    </div>
  );
}
