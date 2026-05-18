import { Course } from 'src/app/models/course.module'

// Modelo necesario para agregar el campo de ingredientes al formulario
export interface Ingredient {
    name: string,
    quantity: number,
    unit: string
}

export type TechSheetStatus = 'Activa' | 'Archivada' | 'Borrador';

// Modelo principal del formulario de recetas
export interface Recipe {
    id: string,
    name: string,
    desc: string,
    dificulty: string,
    category: string,
    performance: number,
    prepTime: number,
    cookingTime: number,
    ingredients: Ingredient[],
    cookingTemp: string,
    maintenance: string,
    keyPoints: string[],
    views?: number,
    profesorId: string,
    profesorName: string,
    course: Course[],
    status: TechSheetStatus,
    createdAt: Date,
    UpdatedAt: Date,
    imageURL: string
}
