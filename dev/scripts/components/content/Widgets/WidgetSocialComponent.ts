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
            <a href="https://vk.com/public131936676" class="vk"><i class="fa fa-vk" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/555615097960958/" class="facebook"><i class="fa fa-facebook" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="#" class="twitter"><i class="fa fa-twitter" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCNWTOj7nb5m0pL1ORT58mMQ" class="google"><i class="fa fa-youtube" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="https://ok.ru/group/53024212189327" class="rss"><i class="fa fa-odnoklassniki" style="line-height: 40px;"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/amurlenta/" class="vk"><i class="fa fa-instagram" style="line-height: 40px;"></i></a>
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
