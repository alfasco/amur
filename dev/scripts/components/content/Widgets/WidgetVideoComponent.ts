import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetVideoComponent',
    providers: [ComponentService],
    template: `
    <div class="widget post-widget" *ngIf="content">
        <div class="title-section">
            <h1><span>{{title}}</span></h1>
        </div>
        <div class="news-post video-post">
            <img alt="" src="{{content.value.img[0].value}}" width="370px" height="230px">
            <a href="{{content.value.video[0].value}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
            <div class="hover-box">
                <h2><a (click)="routing(content.id)">{{content.value.tit}}</a></h2>
                <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>{{content.value.created.substr(0,10)}}</li>
                </ul>
            </div>
        </div>
        <p>{{content.value.description[0].value}}</p>
    </div>`
})
export class WidgetVideoComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    public title: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/370x230/')
                    }
                }
                this.title = component.title;
                this.content = component.content[0];
                setTimeout(() => {
                    try {
                        // Example with multiple objects
                        $('.video-link').magnificPopup({
                            type: 'iframe'
                        });
                    } catch (err) {

                    }
                }, 300)


            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
