import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ingredient, IngredientType } from './models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private path = './assets/data/ingredients.json';

  constructor(
    private http: HttpClient
  ) { }

  get(ingredientType: IngredientType): Observable<Ingredient[]> {
    return this.http.get(this.path).
      pipe(map(ingredients => ingredients[ingredientType]));
  }
}
