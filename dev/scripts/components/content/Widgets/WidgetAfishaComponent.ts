import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetAfishaComponent',
    providers: [ComponentService],
    template: `
    <div class="widget tab-posts-widget">

        <ul class="nav nav-tabs" id="myTab">
            <li *ngFor="let tit of title; let i = index" [class.active]="i==0">
                <a href="#option{{i}}" data-toggle="tab">{{tit}}</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane" id="option{{i}}" *ngFor="let cont of content; let i = index" [class.active]="i==0">
                <ul class="list-posts">
                    <li *ngFor="let tab of cont">
                      <div *ngIf="tab.value.avatar">
                        <img src="http://portamur.alfasco.ru{{tab.value.avatar[0].value}}" alt="">
                      </div>
                      <div class="post-content">
                          <h2><a href="single-post.html">{{tab.id}}</a></h2>
                          <ul class="post-tags">
                              <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                          </ul>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`
})
export class WidgetAfishaComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = [];

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent('WidgetAfishaComponent').subscribe(
            component => {
                this.title = component.title;
                this.content = component.content;
                console.log(this.content)
            },
            error => console.log(<any>error));
    }
};
