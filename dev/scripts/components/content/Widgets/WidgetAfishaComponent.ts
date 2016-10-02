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
                      <div *ngIf="tab.value.avatar">
                        <img src="http://portamur.alfasco.ru{{tab.value.avatar[0].value}}" alt="">
                      </div>
                      <div *ngIf="!tab.value.avatar">
                        <img src="http://portamur.alfasco.ru{{tab.value.img[0].value}}" alt="">
                      </div>
                      <div class="post-content" >
                          <h2><a (click)="routing(tab.id)">{{tab.value.tit}}</a></h2>
                          <ul class="post-tags" *ngIf="i==0">
                              <li>{{tab.value.datestart[0].title}}: {{tab.value.datestart[0].value}}</li>
                              <li>{{tab.value.genre[0].title}}: {{tab.value.genre[0].value}}</li>
                          </ul>
                          <ul class="post-tags" *ngIf="i==1">
                          <li>На сцене с: {{tab.value.datestart[0].value}}</li>
                          <li>{{tab.value.genre[0].title}}: {{tab.value.genre[0].value}}</li>
                          <li>Театр: {{tab.value.theater[0].value}}</li>
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
};
