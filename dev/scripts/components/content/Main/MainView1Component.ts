import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainView1Component',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
        <div class="title-section">
            <h1><span>{{title}}</span></h1>
        </div>
        <div class="row" *ngFor="let cont of content">
            <div class="col-md-6">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="http://portamur.alfasco.ru{{cont[0].value.img[0].value}}" alt="" style="max-width:368px; max-height: 300px">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <a class="category-post tech" href="tech.html">{{cont[0].value.subsection[0].value}}</a>
                                <h2><a href="single-post.html">{{cont[0].value.tit}}</a></h2>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                    <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                    <li><i class="fa fa-eye"></i>872</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <ul class="list-posts">
                    <li *ngFor="let cont1 of cont[1]">
                        <img src="http://portamur.alfasco.ru{{cont1.value.img[0].value}}" alt="" style="max-width:100px; max-height: 80px">
                        <div class="post-content">
                            <a href="travel.html">{{cont1.value.subsection[0].value}}</a>
                            <h2><a href="single-post.html">{{cont1.value.tit}}</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center-button">
            <a href="#"><i class="fa fa-refresh"></i> Еще</a>
        </div>
    </div>
    `
})
export class MainView1Component implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = '';

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.title = component.title;
                this.content = [[component.content[0], [component.content[1], component.content[2], component.content[3]]], [component.content[4], [component.content[5], component.content[6], component.content[7]]]];
            },
            error => console.log(<any>error));
    }
};
