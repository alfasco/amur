import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView3Component',
    providers: [ComponentService],
    template: `
    <div class="article-box">

      <div class="title-section">
        <a (click)="routing(link)"><h1><span>{{title}}</span></h1></a>
      </div>

      <div class="news-post article-post" *ngFor="let cont of content">
        <div class="row">
          <div class="col-sm-5">
            <div class="post-gallery">
              <img alt="" src="{{out(cont,'img','value')}}" style="max-width:270px; max-height: 200px">
            </div>
          </div>
          <div class="col-sm-7">
            <div class="post-content">
              <h2><a (click)="routing(cont.id)">{{out(cont,'title','value')}}</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{out(cont,'time','value')}}&nbsp;&nbsp;&nbsp;{{out(cont,'date','value')}}</li>
                <li><i class="fa fa-user"></i>{{out(cont,'writer','value')}}</li>
                <li><i class="fa fa-eye"></i>{{out(cont,'counter','value')}}</li>
              </ul>
              <p>{{out(cont,'description','value')}}</p>
              <a (click)="routing(cont.id)" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="center-button">
        <a (click)="routing(link)"><i class="fa fa-refresh"></i> Больше</a>
      </div>
    </div>`
})
export class MainView3Component implements OnInit {
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
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/270x200/')
                    }
                }
                this.content = component.content;
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
