import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorEditComponent } from './actor-edit.component';
import { ActorEditRoutingModule } from './actor-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ActorEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ActorEditComponent
  ]
})
export class ActorEditModule { }
