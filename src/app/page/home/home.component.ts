import { Component, OnInit } from '@angular/core';
import { IngredientType } from 'src/app/api/models/ingredient.model';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  IngredientType = IngredientType; 

  constructor() { }

  ngOnInit(): void {
  }

}
