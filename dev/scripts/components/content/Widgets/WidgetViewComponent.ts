import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'WidgetViewComponent',
    providers: [ComponentService],
    template: `
    <div class="title-section">
        <a (click)="routing(link)"><h1><span class="sport">{{title}}</span></h1></a>
    </div>
    <div class="widget review-widget">
      <ul class="review-posts-list">
        <li *ngFor="let cont of content">
          <img src="{{out(cont,'img','value')}}" alt="">
          <h2><a (click)="routing(cont.id)">{{out(cont,'title','value')}}</a></h2>
          <span class="date"><i class="fa fa-clock-o"></i>{{out(cont,'date','value')}}</span>
        </li>
      </ul>
    </div>`
})
export class WidgetViewComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = '';
    public link = "";

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
                this.link = component.link;
                this.content = component.content.splice(0, 4);
            }, error => console.log(<any>error));
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
