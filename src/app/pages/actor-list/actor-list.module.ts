import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list.component';
import { ActorListRoutingModule } from './actor-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ActorListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ActorListComponent
  ]
})
export class ActorListModule { }
