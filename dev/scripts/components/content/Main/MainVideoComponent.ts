import {Component, Input} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainVideoComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
        <div class="title-section">
            <h1><span class="world">{{title}}</span></h1>
        </div>

        <div class="row">
            <div class="col-md-4" *ngFor="let cont of content">
                <div class="news-post video-post">
                    <img alt="" src="{{cont.value.img[0].value}}" width="270px" height="200px">
                    <a href="{{cont.value.video[0].value}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a (click)="routing(cont.id)">{{cont.value.tit}}</a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>{{cont.value.created.substr(0,10)}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class MainVideoComponent {
    @Input() public idComponent: string;
    content: any;
    title: any;

    constructor(private component: ComponentService, private router: Router) {
        this.content = []
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/270x200/')
                    }
                }
                this.content = component.content;
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
