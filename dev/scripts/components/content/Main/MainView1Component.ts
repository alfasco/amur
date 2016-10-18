import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainView1Component',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
        <div class="title-section">
            <a (click)="routing(link)"><h1><span>{{title}}</span></h1></a>
        </div>
        <div class="row" *ngFor="let cont of content">
            <div class="col-md-6">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="{{out(cont[0],'img','value')}}" alt="" style="max-width:368px; max-height: 300px">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <h2><a (click)="routing(cont[0].id)">{{out(cont[0],'title','value')}}</a></h2>
                                <ul class="post-tags">
                                  <li><i class="fa fa-clock-o"></i>{{out(cont[0],'date','value')}}</li>
                                  <li><i class="fa fa-user"></i>{{out(cont[0],'writer','value')}}</li>
                                  <li><i class="fa fa-eye"></i>{{out(cont[0],'counter','value')}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <ul class="list-posts">
                    <li *ngFor="let cont1 of cont[1]">
                        <img src="{{out(cont1,'img','value')}}" alt="" style="max-width:100px; max-height: 80px">
                        <div class="post-content">
                            <a (click)="routing('/' + out(cont1,'subsection','id'))">{{out(cont1,'subsection','value')}}</a>
                            <h2><a (click)="routing(cont1.id)">{{out(cont1,'title','value')}}</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>{{out(cont1,'date','value')}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center-button">
					<a (click)="routing(link)"><i class="fa fa-refresh"></i> Больше</a>
				</div>
    </div>
    `
})
export class MainView1Component implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = '';
    public link = "";

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.title = component.title;
                this.link = component.link;
                if (component.content) {
                    for (let i in component.content) {
                        component.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + component.content[i].value.img[0].value.replace(/\/images\//i, '/images/368x300/')
                    }
                }
                this.content = [[component.content[0], [component.content[1], component.content[2], component.content[3]]], [component.content[4], [component.content[5], component.content[6], component.content[7]]]];
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
