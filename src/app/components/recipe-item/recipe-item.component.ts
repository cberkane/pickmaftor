import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Icon } from '../icon/icon.enum';

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
    this.recipe.icon = this.getIcon(this.recipe.category);
  }

  getIcon(categorie: string): string {
    switch (categorie) {
      case Categories.PRINCIPAL: return Icon.MEAL;
      case Categories.SALAD: return Icon.SALAD;
      case Categories.COUPEFAIM: return Icon.SANDWICH;
      default: return '';
    }
  }

}
