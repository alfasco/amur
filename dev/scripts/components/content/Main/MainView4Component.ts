import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView4Component',
    providers: [ComponentService],
    template: `
    <div class="carousel-box owl-wrapper">

      <div class="title-section">
        <a (click)="routing(link)"><h1><span>{{title}}</span></h1></a>
      </div>

      <div class="owl-carousel mainview4" data-num="2">

        <div class="item" *ngFor="let cont of content">
          <div class="news-post image-post2" *ngFor="let cont1 of cont">
            <div class="post-gallery" (click)="routing(out(cont1,'link','value'))">
              <img src="{{out(cont1,'img','value')}}" alt="">
              <div class="hover-box">
                <div class="inner-hover">
                  <h2><a (click)="routing(out(cont1,'link','value'))">{{out(cont1,'title','value')}}</a></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>{{out(cont1,'time','value')}}&nbsp;&nbsp;&nbsp;{{out(cont1,'date','value')}}</li>
                    <li><i class="fa fa-user"></i>{{out(cont1,'writer','value')}}</li>
                    <li><i class="fa fa-eye"></i>{{out(cont1,'counter','value')}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-button">
        <a (click)="routing(link)"><i class="fa fa-refresh"></i> Больше</a>
      </div>

    </div>`
})
export class MainView4Component implements OnInit {
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
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/368x300/')
                    }
                }
                this.content = component.content;
                this.link = component.link;
                if (component.content.length >= 6) {
                    this.content = [[component.content[0], component.content[1]], [component.content[2], component.content[3]], [component.content[4], component.content[5]]];
                    let interval = setInterval(() => {
                        if ($('.mainview4 .news-post')) {
                            clearInterval(interval);

                            var carousel = $('.mainview4'),
                                dataNum = $('.mainview4').attr('data-num'),
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
