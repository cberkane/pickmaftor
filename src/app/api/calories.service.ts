import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calorie } from './models/calorie.model';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {

  private path = './assets/data/calories.json';
  private subject = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<Calorie[]> {
    if (this.subject.value) return this.subject.asObservable();
    
    return this.http.get<Calorie[]>(this.path).pipe(
      tap(calories => this.subject.next(calories)),
      map(calories => calories.sort((a, b) => a.name.localeCompare(b.name)) )
    )
  }
}
