import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorEditComponent } from './actor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ActorEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorEditRoutingModule { }
