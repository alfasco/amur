import { Component, OnInit} from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
    providers: [
        COMPILER_PROVIDERS
    ]
})

export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('#container').addClass('active');
    }
}
