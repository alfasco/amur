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
        <div id="vk_groups"></div>
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
                if (typeof VK != 'undefined') VK.Widgets.Group("vk_groups", { mode: 3, width: "100%", height: "400", color1: 'FFFFFF', color2: '000000', color3: '5E81A8' }, 20003922);
            },
            error => console.log(<any>error));
    }
};
