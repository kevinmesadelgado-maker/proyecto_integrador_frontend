'use client';

import { categories } from "../types/categories";

const API_URL = "https://69283caeb35b4ffc5014c9ed.mockapi.io/categories";

const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const categoryService = {
  // GET ALL
  async getAll(): Promise<categories[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  // GET ONE
  async getById(id: string): Promise<categories> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },

  // DELETE
  async remove(id: string) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  }
};
