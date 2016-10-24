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
                      <div class="row">
                        <div class="col-sm-3" *ngIf="i!=2">
                          <img src="http://portamur.alfasco.ru{{out(tab, 'img', 'value')}}" alt="">
                        </div>
                        <div class="post-content" class="col-sm-9">
                            <div class="post-tags" *ngIf="i==0">
                                <a (click)="routing('viewFilm/' + tab.id)"><h2 style="display: inline-block;text-decoration: none;color: #333;font-size:14px;margin:0 0 10px">{{out(tab, 'title', 'value')}}</h2></a>
                                <p>{{out(tab, 'datestart', 'title')}}: {{out(tab, 'datestart', 'value')}}</p>
                            </div>
                            <div class="post-tags" *ngIf="i==1">
                              <a (click)="routing('viewScene/' + tab.id)"><h2 style="display: inline-block;text-decoration: none;color: #333;font-size:14px;margin:0 0 10px">{{out(tab, 'title', 'value')}}</h2></a>
                              <p>Дата: {{out(tab, 'datestart', 'value')}}</p>
                            </div>
                        </div>
                        <div class="col-sm-12" *ngIf="i==2">
                          <p><b>{{tab.channel}}</b></p>
                          <p style="padding:0px; margin:0px;" *ngFor="let session of tab.session">{{session}}</p>
                        </div>
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
                console.log(component)
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
