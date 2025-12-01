// services/artistasService.ts
'use client';

// Asegúrate de que la ruta de importación sea correcta
import { artistas } from "../types/artistas"; 

// 💡 URL de tu MockAPI para el endpoint de Artistas
// CAMBIA ESTA URL si es diferente a la que usamos para pinturas
const API_URL = "https://692989759d311cddf34a4dbd.mockapi.io/artistas";

// Función interna para manejar la respuesta y los errores
const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const artistasService = {
  // GET ALL: Obtiene todos los artistas
  async getAll(): Promise<artistas[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  // GET BY ID: Obtiene un artista por su ID
  async getById(id: string): Promise<artistas> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },

  // DELETE: Elimina un artista
  async remove(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await check(res);
  },

  // CREATE: Crea un nuevo artista (sin el ID, que lo genera la API)
  async create(data: Omit<artistas, "id">): Promise<artistas> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },
};
