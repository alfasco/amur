import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetAdvertisementComponent',
    providers: [ComponentService],
    template: `
    <div class="advertisement">
        <div class="desktop-advert">
            <span>Advertisement</span>
            <img src="upload/addsense/300x250.jpg" alt="">
        </div>
        <div class="tablet-advert">
            <span>Advertisement</span>
            <img src="upload/addsense/200x200.jpg" alt="">
        </div>
        <div class="mobile-advert">
            <span>Advertisement</span>
            <img src="upload/addsense/300x250.jpg" alt="">
        </div>
    </div>`
})
export class WidgetAdvertisementComponent implements OnInit {
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
