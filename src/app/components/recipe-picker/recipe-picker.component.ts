import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-picker',
  templateUrl: './recipe-picker.component.html',
  styleUrls: ['./recipe-picker.component.scss']
})
export class RecipePickerComponent {
  @Input() recipes: Recipe[];
  
  public pickedRecipe: Recipe;

  pickRecipe(): void {
    const index = Math.floor(this.recipes.length * Math.random());
    this.pickedRecipe = this.recipes[index];
  }
}
