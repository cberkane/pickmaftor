import { Component, OnInit } from '@angular/core';
import { CaloriesService } from 'src/app/api/calories.service';
import { Calorie } from 'src/app/api/models/calorie.model';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  calories: Calorie[];

  constructor(
    private caloriesService: CaloriesService
  ) { }

  ngOnInit(): void {
    this.caloriesService.get().subscribe({
      next: c => this.calories = c
    })
  }

}
