import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from '../components/home'

import { obrazGizniRoutes, ObrazGizni } from '../components/stucture/obraz_gizni';




const appRoutes: Routes = [
    {
        path: '',
        component: Home
    },
    // ...obrazGizniRoutes
];

export const appRoutingProviders: any[] = [];

export const appRoutingDeclarations: any[] = [
    // ObrazGizni
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
