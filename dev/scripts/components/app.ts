import { Component, OnInit} from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import {MenuService} from './services/menu';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
    providers: [
        MenuService,
        COMPILER_PROVIDERS
    ]
})

export class AppComponent implements OnInit {
    mainMenu: any;

    constructor(private menuService: MenuService) {

        this.menuService.getMenu().subscribe(
            menu => {
                this.mainMenu = menu;
                this.menuService.Menu = menu;
            },
            error => console.log(<any>error));
    }

    ngOnInit() {
        $('#container').addClass('active');
    }
}
