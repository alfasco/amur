import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }   from '../components/app';

import { Home } from '../components/home'
import { ObrazGizni } from '../components/stucture/obraz_gizni';

import { DYNAMIC_DIRECTIVES }   from '../components/content.components/all';

import { routing, appRoutingDeclarations, appRoutingProviders } from './appRoutes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        Home,
        DYNAMIC_DIRECTIVES,
        appRoutingDeclarations
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
