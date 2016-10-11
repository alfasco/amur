import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainGalleryComponent',
    providers: [ComponentService],
    template: `
    <div class="carousel-box owl-wrapper">

        <div class="title-section">
            <a (click)="routing(link)"><h1><span>{{title}}</span></h1></a>
        </div>

        <div class="owl-carousel maingallery" data-num="3">

            <div class="item news-post image-post3" *ngFor="let item of content">
                <img src="{{out(item,'img','value')}}" alt="" width="185px" height="180px">
                <div class="hover-box">
                    <h2><a (click)="routing(item.id)">{{out(item,'title','value')}}</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>{{out(item,'date','value')}}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>`
})
export class MainGalleryComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;
    public link = "";

    constructor(private component: ComponentService, private router: Router) {
        this.content = []
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                this.link = component.link;
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/185x180/')
                    }
                }
                this.content = component.content;
                let interval = setInterval(() => {
                    if ($('.maingallery .news-post')) {
                        clearInterval(interval);

                        var carousel = $('.maingallery'),
                            dataNum = $('.maingallery').attr('data-num'),
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
                }, 200)
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
