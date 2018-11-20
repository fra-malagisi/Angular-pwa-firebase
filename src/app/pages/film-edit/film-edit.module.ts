import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmEditComponent } from './film-edit.component';
import { FilmEditRoutingModule } from './film-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FilmEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FilmEditComponent
  ]
})
export class FilmEditModule { }
