import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }   from '../components/app';

import { routing, appRoutingProviders } from './appRoutes';

import { COMPILER_PROVIDERS } from '@angular/compiler';
import { DynamicModule }    from '../components/dynamic/dynamic.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        DynamicModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
        COMPILER_PROVIDERS
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
