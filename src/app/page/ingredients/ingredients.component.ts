import { IngredientsService } from './../../api/ingredients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Ingredient } from 'src/app/api/models/ingredient.model';

@Component({
  selector: 'page-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  title: String;
  ingredients: Ingredient[];

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(params => params['type']),
      tap(type => this.title = type),
      switchMap(type => this.ingredientsService.get(type))
    ).subscribe(ingredients => this.ingredients = ingredients)
  }

}