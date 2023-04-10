export interface Recipe {
    uid: number;
    name: string;
    category: string;
    ingredients: Ingredient[];
    color?: string;
}

export interface Ingredient {
    designation: string;
}