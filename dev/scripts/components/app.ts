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
        (function(w, doc) {
            if (!w.__utlWdgt) {
                w.__utlWdgt = true;
                var d = doc, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript'; s.charset = 'UTF-8'; s.async = true;
                s.src = ('https:' == w.location.protocol ? 'https' : 'http') + '://w.uptolike.com/widgets/v1/uptolike.js';
                var h = d[g]('body')[0];
                h.appendChild(s);
            }
        })(window, document);
    }
}
