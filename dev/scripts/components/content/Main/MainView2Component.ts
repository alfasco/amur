import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView2Component',
    providers: [ComponentService],
    template: `
    <div class="carousel-box owl-wrapper">
        <div class="title-section">
            <h1><span class="world">{{title}}</span></h1>
        </div>

        <div class="owl-carousel mainview2" data-num="2">

            <div class="item" *ngFor="let cont of content">
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
    </div>`
})
export class MainView2Component implements OnInit {
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
                if (component.content.length >= 12) {
                    if (component.content) {
                        for (let i in component.content) {
                            component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/368x300/')
                        }
                    }
                    this.content = [[component.content[0], [component.content[1], component.content[2], component.content[3]]], [component.content[4], [component.content[5], component.content[6], component.content[7]]], [component.content[8], [component.content[9], component.content[10], component.content[11]]]];
                    let interval = setInterval(() => {
                        if ($('.mainview2 .news-post')) {
                            clearInterval(interval);

                            var carousel = $('.mainview2'),
                                dataNum = $('.mainview2').attr('data-num'),
                                dataNum2,
                                dataNum3;

                            if (dataNum == 1) {
                                dataNum2 = 1;
                                dataNum3 = 1;
                            } else if (dataNum == 2) {
                                dataNum2 = 2;
                                dataNum3 = dataNum - 1;
                            } else {
                                dataNum2 = dataNum - 1;
                                dataNum3 = dataNum - 2;
                            }
                            carousel.owlCarousel({
                                autoPlay: 10000,
                                navigation: true,
                                items: dataNum,
                                itemsDesktop: [1199, dataNum2],
                                itemsDesktopSmall: [979, dataNum3]
                            });
                        }
                    }, 100)
                }
                else {
                    console.error("Недостаточно данных", component)
                }
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
