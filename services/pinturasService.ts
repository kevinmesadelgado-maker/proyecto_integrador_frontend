'use client';

import type { pinturas } from "@/types/pinturas";

const API_URL = "https://692989759d311cddf34a4dbd.mockapi.io/pinturas";

const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const pinturasService = {
  async getAll(): Promise<pinturas[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  async getById(id: string): Promise<pinturas> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },

  async remove(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await check(res);
  },

  async create(data: Omit<pinturas, "id">): Promise<pinturas> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },

  async update(id: string, data: Partial<Omit<pinturas, "id">>): Promise<pinturas> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },
};
