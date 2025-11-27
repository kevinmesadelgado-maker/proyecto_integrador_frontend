'use client';
import { get } from "./apiClient";
import { categories } from "../types/categories";

const API_URL = "https://69283caeb35b4ffc5014c9ed.mockapi.io/categories"

export async function listProducts(): Promise<categories[]> {
  const data = await get<{ products: categories[] }>("/api/categories");
  return data.products;

}

export async function getProductById(id: string): Promise<categories | undefined> {
  const products = await listProducts();
  return products.find((p) => p.id === id);
}

const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const productService = {
  // GET ALL
  async getAll() {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res) as Promise<categories[]>;
  },


  // DELETE
  async remove(id: string) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },
};

