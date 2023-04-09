import { HomeComponent } from './page/home/home.component';
import { IngredientsComponent } from './page/ingredients/ingredients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' },
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    data: { title: 'ingredients' }, 
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
