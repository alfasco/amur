import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from '../components/home'

import { obrazGizniRoutes, ObrazGizni } from '../components/stucture/obraz_gizni';
import { novostiRoutes, Novosti, Obsxestvo, Ekonomika, Proisshestvija } from '../components/stucture/novosti';




const appRoutes: Routes = [
    {
        path: '',
        component: Home
    },
    // ...obrazGizniRoutes,
    ...novostiRoutes
];

export const appRoutingProviders: any[] = [];

export const appRoutingDeclarations: any[] = [
    // ObrazGizni,
    Novosti,
    Obsxestvo,
    Ekonomika,
    Proisshestvija
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
