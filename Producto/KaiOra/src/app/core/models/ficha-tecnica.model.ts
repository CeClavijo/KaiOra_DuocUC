export interface FichaTecnica {
  id: string;
  nombre: string;
  descripcion: string;
  ingredientes: Ingrediente[];
  procedimientos: Procedimiento[];
  tiempos: Tiempos;
  erroresComunes: string[];
  fotosURL: string[];
  createdBy: string; // UID del profesor
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface Ingrediente {
  nombre: string;
  cantidad: number;
  unidad: string;
}

export interface Procedimiento {
  paso: number;
  descripcion: string;
  tiempo?: number; // en minutos
  pccCritico?: boolean; // Punto de control sanitario
}

export interface Tiempos {
  preparacion: number; // minutos
  coccion: number;
  reposo: number;
  total: number;
}