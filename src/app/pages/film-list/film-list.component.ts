import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { FilmService } from '../../services/film.service';
// Import Models
import { Film } from '../../domain/manage_film_example_db/film';

// START - USED SERVICES
/**
* FilmService.delete
*	@description CRUD ACTION delete
*
* FilmService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Film
 * @class FilmListComponent
 */
@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private filmService: FilmService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.filmService.list();
    }

    /**
     * Select Film to remove
     *
     * @param {string} id Id of the Film to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Film
     */
    deleteItem() {
        this.filmService.remove(this.idSelected);
    }

}
