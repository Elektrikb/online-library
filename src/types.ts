// src/types.ts
export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  year: number;
  pages?: number;
  genre: string[];
  rating?: number;
}