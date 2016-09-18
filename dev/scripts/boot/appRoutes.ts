import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicDetail } from '../components/dynamic/detail.view';

const appRoutes: Routes = [
    {
        path: '**',
        component: DynamicDetail
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
