import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'FooterRandomPostComponent',
    providers: [ComponentService],
    template: `
    <div class="widget posts-widget" *ngIf="content">
        <h1>Интересные новости</h1>
        <ul class="list-posts">
            <li *ngFor="let cont of content">
                <img src="{{out(cont, 'img', 'value')}}" alt="">
                <div class="post-content">
                    <a (click)="routing('/')">{{out(cont, 'subsection', 'value')}}</a>
                    <h2><a (click)="routing(cont.id)">{{cont.value.tit}}</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>{{cont.value.created.substr(0,10)}}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>`
})
export class FooterRandomPostComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent('1632c0854ba8e8a520e15ad96900cdaa').subscribe(
            component => {
                this.content = component.content;
                if (this.content) {
                    for (let i in this.content) {
                        this.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + this.content[i].value.img[0].value.replace(/\/images\//i, '/images/80x70/')
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
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
