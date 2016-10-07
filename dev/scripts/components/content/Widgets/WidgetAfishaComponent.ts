import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetAfishaComponent',
    providers: [ComponentService],
    template: `
    <div class="widget tab-posts-widget">

        <ul class="nav nav-tabs" id="myTab">
            <li *ngFor="let tit of title; let i = index" [class.active]="i==0">
                <a href="#option{{i}}" data-toggle="tab">{{tit}}</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane" id="option{{i}}" *ngFor="let cont of content; let i = index" [class.active]="i==0">
                <ul class="list-posts">
                    <li *ngFor="let tab of cont">
                        <div>
                          <img src="http://portamur.alfasco.ru{{out(tab, 'img', 'value')}}" alt="">
                        </div>
                        <div class="post-content" >
                            <h2><a (click)="routing(tab.id)">{{out(tab, 'title', 'value')}}</a></h2>
                            <ul class="post-tags" *ngIf="i==0">
                                <li>{{out(tab, 'datestart', 'title')}}: {{out(tab, 'datestart', 'value')}}</li>
                                <li>{{out(tab, 'genre', 'title')}}: {{out(tab, 'genre', 'value')}}</li>
                            </ul>
                            <ul class="post-tags" *ngIf="i==1">
                              <li>На сцене с: {{out(tab, 'datestart', 'value')}}</li>
                              <li>{{out(tab, 'genre', 'title')}}: {{out(tab, 'genre', 'value')}}</li>
                              <li>Театр: {{out(tab, 'theater', 'value')}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`
})
export class WidgetAfishaComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = [];

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent('WidgetAfishaComponent').subscribe(
            component => {
                this.title = component.title;
                this.content = component.content;

            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
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
    }
};
