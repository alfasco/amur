import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetViewComponent',
    providers: [ComponentService],
    template: `
    <div class="widget review-widget">
      <h1>{{title}}</h1>
      <ul class="review-posts-list">
        <li *ngFor="let cont of content">
          <img src="{{cont.value.img[0].value}}" alt="">
          <h2><a (click)="routing(cont.id)">{{cont.value.tit}}</a></h2>
          <span class="date"><i class="fa fa-clock-o"></i>{{cont.value.created.substr(0,10)}}</span>
        </li>
      </ul>
    </div>`
})
export class WidgetViewComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = ''

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
                this.content = component.content.splice(0, 4);
            }, error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
