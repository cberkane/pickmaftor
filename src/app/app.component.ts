import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private path = './assets/data/recipe.json';
  public recipes$: Observable<Recipe[]>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.getRecipes();
  }

  getRecipes(): Observable<any[]> {
    return this.http.get<[]>(this.path);
  }
}
