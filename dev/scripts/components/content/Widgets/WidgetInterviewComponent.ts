import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetInterviewComponent',
    providers: [ComponentService],
    template: `
    <div class="widget features-slide-widget">
      <div class="title-section">
      <a (click)="routing('/arhiveInterview')"><h1><span>{{title}}</span></h1></a>
      </div>
      <div class="image-post-slider">
        <ul class="bxsliderInterview">
          <li *ngFor="let cont of content">
            <div class="news-post image-post2">
              <div class="post-gallery">
                <img src="{{out(cont,'img','value')}}" width="368px" height="300px">
                <div class="hover-box">
                  <div class="inner-hover">
                    <h2><a (click)="routing(out(cont,'article','id'))">{{cont.value.tit}}</a></h2>
                    <ul class="post-tags">
                      <li><i class="fa fa-clock-o"></i>{{out(cont,'date','value')}}</li>
                      <li><i class="fa fa-user"></i>{{out(cont,'owner','value')}}</li>
                      <li><i class="fa fa-eye"></i>{{out(cont,'counter','value')}}</li>
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
};
