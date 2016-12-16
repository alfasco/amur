import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'MainListDifferentComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box" *ngIf="content">
  		<div class="title-section">
  			<h1 *ngIf="title"><span class="world">{{title}}</span></h1>
  			<h1 *ngIf="content[0] && !title"><span *ngIf="content[0].value.subsection" class="world">{{content[0].value.subsection[0].value}}</span></h1>
  		</div>

  		<div class="row">
  			<div class="col-md-6" *ngFor="let post of content">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<a (click)="routing('viewDiffrent/' + out(post,'link','value'))"><img src="{{post.value.img[0].value}}" alt="" width="330" height="260"></a>
  						<a *ngIf="post.value.subsection" [class]="'category-post ' + post.color" (click)="routing(post.value.subsection[0].id)">{{post.value.subsection[0].value}}</a>
  					</div>
  					<div class="post-title">
  						<h2><a (click)="routing('viewDiffrent/' + out(post,'link','value'))">{{post.value.tit}}</a></h2>
  						<ul class="post-tags">
  							<li><i class="fa fa-clock-o"></i>{{post.value.created.substr(0,10)}}</li>
                <li *ngIf="post.value.autor"><i class="fa fa-user"></i>{{post.value.writer[0].value}}</li>
                <li *ngIf="post.value.counter"><i class="fa fa-eye"></i>{{post.value.counter[0].value}}</li>
  						</ul>
  					</div>
  					<div class="post-content">
  						<p>{{post.value.description[0].value}}</p>
  						<a (click)="routing('viewDiffrent/' + out(post,'link','value'))" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Подробнее</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>`
})
export class MainListDifferentComponent implements OnInit {
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
