import { IngredientsService } from './../../api/ingredients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Ingredient } from 'src/app/api/models/ingredient.model';
import { Icons } from 'src/app/components/icon/icons.enum';

@Component({
  selector: 'page-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  title: String;
  ingredients: Ingredient[];
  ingredient: Ingredient;
  icons = Icons;

  constructor(
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(params => params['type']),
      tap(type => this.setTitle(type)),
      switchMap(type => this.ingredientsService.get(type))
    ).subscribe(ingredients => this.ingredients = ingredients.sort((a, b) => a.name.localeCompare(b.name)));
  }

  private setTitle(titleKey: string): void {
    switch (titleKey) {
      case 'veggie_base': this.title = 'Bases Végé'; break;
      case 'base': this.title = 'Bases'; break;
      case 'protein': this.title = 'Protéines'; break;
      case 'side': this.title = 'Sides'; break;
    }
  }

  setIngredient(ingredient: Ingredient): void {
    this.ingredient = ingredient;
  }

}
