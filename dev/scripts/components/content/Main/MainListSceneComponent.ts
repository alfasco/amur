import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'MainListSceneComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box" *ngIf="content">
  		<div class="title-section">
  			<h1 *ngIf="title"><span class="world">{{title}}</span></h1>
  		</div>

  		<div class="row">
  			<div class="col-md-6" *ngFor="let post of content">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<a (click)="routing('viewScene/' + out(post,'link','value'))"><img src="{{out(post,'img','value')}}" alt="" width="330" height="260"></a>
  					</div>
  					<div class="post-title">
  						<h2><a (click)="routing('viewScene/' + out(post,'link','value'))">{{post.value.tit}}</a></h2>
  					</div>
  					<div class="post-content">
  						<p>{{out(post,'description','value')}}</p>
  						<a (click)="routing('viewScene/' + out(post,'link','value'))" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Подробнее</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>`
})
export class MainListSceneComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title: any;
    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                this.content = component.content;
                console.log(component)
                if (this.content) {
                    for (let i in this.content) {
                        this.content[i].value.img[0].value = 'http://portamur.alfasco.ru' + this.content[i].value.img[0].value.replace(/\/images\//i, '/images/330x260/')
                    }
                }
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
        if (field == 'link') {
            return object.id
        }
    }
};
