import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'FooterFotosComponent',
    providers: [ComponentService],
    template: `
    <div class="widget flickr-widget">
        <h1>Лучшие фото</h1>
        <ul class="flickr-list" *ngIf="content">
            <li *ngFor="let cont of content">
                <a (click)="routing(out(cont,'link','value'))"><img src="{{out(cont,'img','value')}}" alt="" width="85" height="70"></a>
            </li>
        </ul>
        <a (click)="routing('/foto')">Больше фотографий</a>
    </div>`
})
export class FooterFotosComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent('1632c0854ba8e8a520e15ad96900ed74').subscribe(
            component => {
                this.content = component.content;
                if (this.content) {
                    for (let i in this.content) {
                        this.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + this.content[i].value.img[0].value.replace(/\/images\//i, '/images/85x70/')
                    }
                }

            },
            error => console.log(<any>error));
    }

    out(object, field, value) {
        if (object) {
            if (object.value) {
                if (object.value[field]) {
                    if (object.value[field][0]) {
                        if (object.value[field][0][value]) {
                            return object.value[field][0][value]
                        }
                    }
                }
            }
        }
        if (field == 'link') {
            return object.id
        }
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
