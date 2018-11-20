import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './film-list.component';
import { FilmListRoutingModule } from './film-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FilmListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FilmListComponent
  ]
})
export class FilmListModule { }
