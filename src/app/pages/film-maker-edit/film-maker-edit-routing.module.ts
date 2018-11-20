import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmMakerEditComponent } from './film-maker-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FilmMakerEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmMakerEditRoutingModule { }
