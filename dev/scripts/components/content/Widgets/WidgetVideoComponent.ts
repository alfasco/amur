import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetVideoComponent',
    providers: [ComponentService],
    template: `
    <div class="widget post-widget" *ngIf="content">
        <div class="title-section">
            <a (click)="routing('/road')"><h1><span>{{title}}</span></h1></a>
        </div>
        <div class="news-post video-post">
            <img alt="" src="{{out(content,'img','value')}}" width="370px" height="230px">
            <a href="{{out(content,'video','value')}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
            <div class="hover-box">
                <h2><a (click)="routing(out(content,'link','value'))">{{out(content,'title','value')}}</a></h2>
                <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>{{out(content,'time','value')}}&nbsp;&nbsp;&nbsp;{{out(content,'date','value')}}</li>
                    <li><i class="fa fa-user"></i>{{out(content,'writer','value')}}</li>
                    <li><i class="fa fa-eye"></i>{{out(content,'counter','value')}}</li>
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
