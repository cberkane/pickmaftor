export interface Recipe {
    uid: number;
    name: string;
    category: string;
    ingredients: Ingredient[];
    icon?: string;
}

export interface Ingredient {
    designation: string;
}