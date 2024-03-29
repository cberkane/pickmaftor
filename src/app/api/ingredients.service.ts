import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Ingredient, IngredientType } from './models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private path = './assets/data/ingredients.json';
  private subject = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  get(ingredientType: IngredientType): Observable<Ingredient[]> {
    if (this.subject.value) {
      return this.subject.asObservable()
        .pipe(map(ingredients => ingredients[ingredientType]))
    };

    return this.http.get(this.path)
      .pipe(
        tap(ingredients => this.subject.next(ingredients)),
        map(ingredients => ingredients[ingredientType])
      );
  }
}
