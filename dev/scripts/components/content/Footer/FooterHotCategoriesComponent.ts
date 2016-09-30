import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'FooterHotCategoriesComponent',
    providers: [ComponentService],
    template: `
    <div class="widget categories-widget">
        <h1>{{title}}</h1>
        <ul class="category-list">
            <li *ngFor="let cat of content">
                <a (click)="routing('/' + cat.link)">{{cat.category}} <span>{{cat.postCount}}</span></a>
            </li>
        </ul>
    </div>`
})
export class FooterHotCategoriesComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    public title: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent('FooterHotCategoriesComponent').subscribe(
            component => {
                this.title = component.title[0];
                this.content = component.content.slice(0, 12);
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
