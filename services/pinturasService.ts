'use client';

// Asegúrate de que esta ruta de importación sea correcta según dónde esté ubicado el archivo 'pinturas.ts'
import { pinturas } from "../types/pinturas"; 

// 💡 URL de tu MockAPI para el endpoint de Pinturas
const API_URL = "https://692989759d311cddf34a4dbd.mockapi.io/pinturas";

// función interna para manejar la respuesta y los errores
const check = async (res: Response) => {
  if (!res.ok) {
    // Intenta leer el cuerpo de la respuesta en caso de error para obtener más detalles
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const pinturasService = {
  // 1. GET ALL: Obtiene todas las pinturas
  async getAll(): Promise<pinturas[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  // 2. GET BY ID: Obtiene una pintura por su ID
  async getById(id: string): Promise<pinturas> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },

  // 3. DELETE: Elimina una pintura por su ID
  async remove(id: string): Promise<void> { // Asumimos que no devuelve contenido útil
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await check(res);
  },

  // 4. CREATE: Crea una nueva pintura (sin el ID, que lo genera la API)
  async create(data: Omit<pinturas, "id">): Promise<pinturas> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },
  
  // 5. UPDATE (PATCH): Actualiza una pintura existente
  async update(id: string, data: Partial<Omit<pinturas, "id">>) : Promise<pinturas> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT", // o "PATCH" si prefieres
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },
};