// Modelo necesario para agregar el campo de ingredientes al formulario
export interface Ingredient {
    name: string,
    quantity: number,
    unit: string
}

// Modelo principal del formulario de recetas
export interface Recipe {
    id: string,
    name: string,
    category: string,
    performance: number,
    prepTime: number,
    cookingTime: number,
    ingredients: Ingredient[],
    cookingTemp: string,
    maintenance: string,
    keyPoints: string[],
    views?: number
}
