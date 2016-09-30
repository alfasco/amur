import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetSocialComponent',
    providers: [ComponentService],
    template: `
    <div class="widget social-widget">
        <div class="title-section">
            <h1><span>{{title}}</span></h1>
        </div>
        <ul class="social-share">
          <li>
            <a href="#" class="vk"><i class="fa fa-vk"></i></a>
          </li>
          <li>
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#" class="google"><i class="fa fa-youtube"></i></a>
          </li>
          <li>
            <a href="#" class="rss"><i class="fa fa-odnoklassniki"></i></a>
          </li>
          <li>
            <a href="#" class="vk"><i class="fa fa-instagram"></i></a>
          </li>
        </ul>
    </div>`
})
export class WidgetSocialComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
            },
            error => console.log(<any>error));
    }
};
