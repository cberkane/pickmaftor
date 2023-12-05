export interface Ingredient {
    type: IngredientType;
    name: string;
}

export enum IngredientType {
    BASE = "base",
    SIDE = "side",
    VEGGIE_BASE = "veggie_base",
    PROTEIN = "protein",
}