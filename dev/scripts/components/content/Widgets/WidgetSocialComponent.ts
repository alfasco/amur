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
            <a href="#" class="vk"><i class="fa fa-vk" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="facebook"><i class="fa fa-facebook" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="twitter"><i class="fa fa-twitter" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="google"><i class="fa fa-youtube" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="rss"><i class="fa fa-odnoklassniki" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="vk"><i class="fa fa-instagram" style="line-height: 40px;"></i></a>
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
