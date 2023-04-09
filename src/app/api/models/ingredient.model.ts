export enum IngredientType {
    BASE = "base",
    SIDE = "side",
    VEGGIE_BASE = "veggie_base",
    PROTEIN = "protein",
}

export interface Ingredient {
    type: IngredientType;
    name: string;
    brand?: string;
}