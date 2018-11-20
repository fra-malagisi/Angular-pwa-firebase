// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { ActorService } from '../../services/actor.service';
import { FilmService } from '../../services/film.service';

import { Actor } from '../../domain/manage_film_example_db/actor';
import { Film } from '../../domain/manage_film_example_db/film';

// START - USED SERVICES
/**
* ActorService.create
*	@description CRUD ACTION create
*
* FilmService.findBycast
*	@description CRUD ACTION findBycast
*
* ActorService.get
*	@description CRUD ACTION get
*	@param String id Id Actor
*
* ActorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Actor
 */
@Component({
    selector: 'app-actor-edit',
    templateUrl: 'actor-edit.component.html',
    styleUrls: ['actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Actor>;
    isNew: Boolean = true;
    formValid: Boolean;

    listCast: Actor[];

    externalFilm: Film[];

    constructor(
        private actorService: ActorService,
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
                this.itemDoc = this.actorService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.filmService.findByCast(id).subscribe(list => this.externalFilm = list);
            }
            // Get relations
        });
    }



    /**
     * Save Actor
     *
     * @param {boolean} formValid Form validity check
     * @param Actor item Actor to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.actorService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.actorService.update(this.itemDoc, this.item);
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
