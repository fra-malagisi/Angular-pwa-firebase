import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmMakerListComponent } from './film-maker-list.component';
import { FilmMakerListRoutingModule } from './film-maker-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FilmMakerListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FilmMakerListComponent
  ]
})
export class FilmMakerListModule { }
