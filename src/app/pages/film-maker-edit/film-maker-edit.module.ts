import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmMakerEditComponent } from './film-maker-edit.component';
import { FilmMakerEditRoutingModule } from './film-maker-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FilmMakerEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FilmMakerEditComponent
  ]
})
export class FilmMakerEditModule { }
