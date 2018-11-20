import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmEditComponent } from './film-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FilmEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmEditRoutingModule { }
