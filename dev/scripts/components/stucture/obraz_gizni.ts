import { Routes, RouterModule } from '@angular/router';

import { Component, OnInit} from '@angular/core';

/* Раздел */
@Component({
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id=obraz_gizni'
})
export class ObrazGizni {
    constructor() { }
}

/* Подразделы */


// Route Configuration
export const obrazGizniRoutes: Routes = [
    { path: 'obraz_gizni', component: ObrazGizni }
];
