export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string; 
}

export interface KeyPoint {
  id: string;
  description: string;
}

export type TechSheetStatus = 'activa' | 'archivada' | 'borrador';

export interface TechnicalSheet {
  id: string;
  name: string;
  category: string;
  performance: number;
  prepTime: number;
  cookingTime: number;
  ingredients: Ingredient[];
  cookingTemp: string;
  maintenance: string;
  keyPoints: KeyPoint[];
  profesorId: string; // UID del profesor creador
  profesorName: string; // Nombre del profesor
  cursos: string[]; // IDs de cursos donde está activa
  status: TechSheetStatus; // 'activa', 'archivada', 'borrador'
  createdAt: Date;
  updatedAt: Date;
  imageURL: string; // URL de la imagen asociada a la ficha técnica
}
