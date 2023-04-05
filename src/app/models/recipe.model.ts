export interface Recipe {
    uid: number;
    name: string;
    category: string;
    ingredients: Ingredient[]; 
}

export interface Ingredient {
    designation: string;
}