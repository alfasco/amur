import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView1Component',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
        <div class="title-section">
            <h1><span>{{title}}</span></h1>
        </div>
        <div class="row" *ngFor="let cont of content">
            <div class="col-md-6">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="{{cont[0].value.img[0].value}}" alt="" style="max-width:368px; max-height: 300px">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <h2><a (click)="routing(cont[0].id)">{{cont[0].value.tit}}</a></h2>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>{{cont[0].value.created.substr(0,10)}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <ul class="list-posts">
                    <li *ngFor="let cont1 of cont[1]">
                        <img src="{{cont1.value.img[0].value}}" alt="" style="max-width:100px; max-height: 80px">
                        <div class="post-content">
                            <h2><a (click)="routing(cont1.id)">{{cont1.value.tit}}</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>{{cont1.value.created.substr(0,10)}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
})
export class MainView1Component implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = '';

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/368x300/')
                    }
                }
                this.content = [[component.content[0], [component.content[1], component.content[2], component.content[3]]], [component.content[4], [component.content[5], component.content[6], component.content[7]]]];
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
