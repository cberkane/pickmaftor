import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

export enum Categories {
  PRINCIPAL = 'principal',
  SALAD = 'salade',
  COUPEFAIM = 'coupe-faim',
}

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  ngOnInit(): void {
    this.recipe.color = this.getColors(this.recipe.category);
  }

  getColors(categorie: string): string {
    switch (categorie) {
      case Categories.PRINCIPAL: return 'green';
      case Categories.SALAD: return 'pink';
      case Categories.COUPEFAIM: return 'red';
      default: return '';
    }
  }

}
