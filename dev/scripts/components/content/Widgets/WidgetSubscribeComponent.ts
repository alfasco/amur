import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetSubscribeComponent',
    providers: [ComponentService],
    template: `
    <div class="widget subscribe-widget">
        <form class="subscribe-form">
            <h1>Subscribe to RSS Feeds</h1>
            <input type="text" name="sumbscribe" id="subscribe" placeholder="Email" />
            <button id="submit-subscribe">
    										<i class="fa fa-arrow-circle-right"></i>
    									</button>
            <p>Get all latest content delivered to your email a few times a month.</p>
        </form>
    </div>`
})
export class WidgetSubscribeComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = [[component[0], [component[1], component[2], component[3]]], [component[4], [component[5], component[6], component[7]]]];
            },
            error => console.log(<any>error));
    }
};
