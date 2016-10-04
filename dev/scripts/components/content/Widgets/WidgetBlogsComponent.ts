import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetBlogsComponent',
    providers: [ComponentService],
    template: `
    <div class="widget recent-comments-widget">
      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>
      <div class="owl-wrapper">
        <div class="owl-carousel widgetblogs" data-num="1">
          <div class="item">
            <ul class="comment-list">
              <li *ngFor="let author of content; let i = index" [class.hide]="i >= 3">
                <div *ngIf="i < 3">
                  <img src="{{author.value.avatar}}" alt="">
                  <div class="comment-content">
                    <p class="main-message">
                      {{author.value.description[0].value}}
                    </p>
                    <p><a (click)="routing(author.id)">{{author.value.title[0].value}}</a></p>
                    <span><i class="fa fa-user"></i>{{author.value.owner[0].value}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="item">
            <ul class="comment-list">
              <li *ngFor="let author of content; let i = index" [class.hide]="i < 3 || i > 5">
                <div *ngIf="i >= 3 && i < 6">
                  <img src="{{author.value.avatar}}" alt="">
                  <div class="comment-content">
                    <p class="main-message">
                      {{author.value.description[0].value}}
                    </p>
                    <p><a (click)="routing(author.id)">{{author.value.title[0].value}}</a></p>
                    <span><i class="fa fa-user"></i>{{author.value.owner[0].value}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
})
export class WidgetBlogsComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent("WidgetBlogsComponent").subscribe(
            component => {
                this.title = component.title;
                this.content = component.content;

                if (this.content) {
                    for (let i in this.content) {
                        this.content[i].value.avatar = 'http://portamur.alfasco.ru' + this.content[i].value.avatar.replace(/\/images\//i, '/images/70x70/')
                    }
                }

                let interval = setInterval(() => {
                    if ($('.widgetblogs')) {
                        clearInterval(interval);

                        var carousel = $('.widgetblogs'),
                            dataNum = $('.widgetblogs').attr('data-num'),
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
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
