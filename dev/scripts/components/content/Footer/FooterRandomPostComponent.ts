import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterRandomPostComponent',
    providers: [ComponentService],
    template: `
    <div class="widget posts-widget">
        <h1>Интересные новости</h1>
        <ul class="list-posts">
            <li>
                <img src="upload/news-posts/listw4.jpg" alt="">
                <div class="post-content">
                    <a href="travel.html">travel</a>
                    <h2><a href="single-post.html">Pellentesque odio nisi, euismod in ultricies in, diam. </a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </li>

            <li>
                <img src="upload/news-posts/listw1.jpg" alt="">
                <div class="post-content">
                    <a href="business.html">business</a>
                    <h2><a href="single-post.html">Sed arcu. Cras consequat.</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </li>

            <li>
                <img src="upload/news-posts/listw3.jpg" alt="">
                <div class="post-content">
                    <a href="tech.html">tech</a>
                    <h2><a href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus.</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>`
})
export class FooterRandomPostComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content[0];
            },
            error => console.log(<any>error));
    }
};
