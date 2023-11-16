export interface Ingredient {
    type: IngredientType;
    name: string;
    brand?: string;
    nutritionFacts?: NutritionFacts
}

export enum IngredientType {
    BASE = "base",
    SIDE = "side",
    VEGGIE_BASE = "veggie_base",
    PROTEIN = "protein",
}

export interface NutritionFacts {
    calories: number;
    carbohydrates: number;
}