import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView3Component',
    providers: [ComponentService],
    template: `
    <div class="article-box">

      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>

      <div class="news-post article-post" *ngFor="let cont of content">
        <div class="row">
          <div class="col-sm-5">
            <div class="post-gallery">
              <img alt="" src="{{cont.value.img[0].value}}" style="max-width:270px; max-height: 200px">
            </div>
          </div>
          <div class="col-sm-7">
            <div class="post-content">
              <h2><a (click)="routing(cont.id)">{{cont.value.tit}}</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>{{cont.value.created.substr(0,10)}}</li>
                <li><i class="fa fa-user"></i>by <a>John Doe</a></li>
                <li><a><i class="fa fa-comments-o"></i><span>23</span></a></li>
                <li><i class="fa fa-eye"></i>872</li>
              </ul>
              <p>{{cont.value.description[0].value}}</p>
              <a (click)="routing(cont.id)" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>`
})
export class MainView3Component implements OnInit {
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
