import { Routes, RouterModule } from '@angular/router';

import { Component, OnInit} from '@angular/core';

/* Раздел */
@Component({
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id=novosti'
})
export class Novosti {
    constructor() { }
}

/* Подразделы */
@Component({
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id=obsxestvo'
})
export class Obsxestvo {
    constructor() { }
}
@Component({
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id=ekonomika'
})
export class Ekonomika {
    constructor() { }
}
@Component({
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id=proisshestvija'
})
export class Proisshestvija {
    constructor() { }
}


// Route Configuration
export const novostiRoutes: Routes = [
    { path: 'novosti', component: Novosti },
    { path: 'obsxestvo', component: Obsxestvo },
    { path: 'ekonomika', component: Ekonomika },
    { path: 'proisshestvija', component: Proisshestvija }
];
