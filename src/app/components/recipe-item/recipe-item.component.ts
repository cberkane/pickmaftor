import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

type C = 0xFF

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'principal':
        return '';
      case 'salade':
        return '';
      default:
        return '';
    }
  }

}
