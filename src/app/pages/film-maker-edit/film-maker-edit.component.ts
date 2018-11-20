// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { FilmMakerService } from '../../services/film-maker.service';
import { FilmService } from '../../services/film.service';

import { FilmMaker } from '../../domain/manage_film_example_db/film-maker';
import { Film } from '../../domain/manage_film_example_db/film';

// START - USED SERVICES
/**
* FilmMakerService.create
*	@description CRUD ACTION create
*
* FilmService.findByfilmMaker
*	@description CRUD ACTION findByfilmMaker
*
* FilmMakerService.get
*	@description CRUD ACTION get
*
* FilmMakerService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  FilmMaker
 */
@Component({
    selector: 'app-film-maker-edit',
    templateUrl: 'film-maker-edit.component.html',
    styleUrls: ['film-maker-edit.component.css']
})
export class FilmMakerEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<FilmMaker>;
    isNew: Boolean = true;
    formValid: Boolean;

    listFilmMaker: FilmMaker[];

    externalFilm: Film[];

    constructor(
        private filmmakerService: FilmMakerService,
        private filmService: FilmService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalFilm = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.filmmakerService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.filmService.findByFilmMaker(id).subscribe(list => this.externalFilm = list);
            }
            // Get relations
        });
    }



    /**
     * Save FilmMaker
     *
     * @param {boolean} formValid Form validity check
     * @param FilmMaker item FilmMaker to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.filmmakerService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.filmmakerService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
