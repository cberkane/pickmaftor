import { IngredientsService } from './../../api/ingredients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Ingredient, IngredientType } from 'src/app/api/models/ingredient.model';

@Component({
  selector: 'page-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[];
  title: string;
  ingredient: string;

  constructor(
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(params => params['type'] as IngredientType),
      tap(type => this.setTitle(type)),
      switchMap(type => this.ingredientsService.get(type))
    ).subscribe(ingredients => this.ingredients = ingredients.sort((a, b) => a.name.localeCompare(b.name)));
  }

  private setTitle(titleKey: IngredientType): void {
    switch (titleKey) {
      case IngredientType.VEGGIE_BASE:
        this.title = 'Bases Végé';
        this.ingredient = 'veggie';
        break;
      case IngredientType.BASE:
        this.title = 'Bases';
        this.ingredient = 'base';
        break;
      case IngredientType.PROTEIN:
        this.title = 'Protéines';
        this.ingredient = 'protein';
        break;
      case IngredientType.SIDE:
        this.title = 'Sides';
        this.ingredient = 'side';
        break;
    }
  }
}
