import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmMakerListComponent } from './film-maker-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilmMakerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmMakerListRoutingModule { }
