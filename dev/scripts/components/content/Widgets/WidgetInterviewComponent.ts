import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetInterviewComponent',
    providers: [ComponentService],
    template: `
    <div class="widget features-slide-widget">
      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>
      <div class="image-post-slider">
        <ul class="bxsliderInterview">
          <li *ngFor="let cont of content">
            <div class="news-post image-post2">
              <div class="post-gallery">
                <img src="{{cont.value.img[0].value}}" width="368px" height="300px">
                <div class="hover-box">
                  <div class="inner-hover">
                    <h2><a (click)="routing(cont.value.sourse[0].id)">{{cont.value.tit}}</a></h2>
                    <ul class="post-tags">
                      <li><i class="fa fa-clock-o"></i>{{cont.value.created.substr(0,10)}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>`,
    styles: ['.image-post-slider ul.bxsliderInterview{margin: 0;padding: 0;}' +
        '.image-post-slider ul.bxsliderInterview .image-post2{margin-bottom: 0!important;}']
})
export class WidgetInterviewComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/368x300/')
                    }
                }
                this.title = component.title;
                this.content = component.content;

                let interval = setInterval(() => {
                    if ($('.bxsliderInterview')) {
                        clearInterval(interval);
                        try {
                            $('.bxsliderInterview').bxSlider({
                                mode: 'fade',
                                auto: true
                            });


                        } catch (err) {
                        };
                    }
                }, 150)
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
