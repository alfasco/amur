import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetAdvertisementComponent',
    providers: [ComponentService],
    template: `
    <div class="advertisement" *ngIf="content">
        <div class="desktop-advert">
            <img src="http://portamur.alfasco.ru{{content.value.img_300x250[0].value}}" alt="">
        </div>
        <div class="tablet-advert">
            <img src="http://portamur.alfasco.ru{{content.value.img_200x200[0].value}}" alt="">
        </div>
        <div class="mobile-advert">
            <img src="http://portamur.alfasco.ru{{content.value.img_300x250[0].value}}" alt="">
        </div>
    </div>`
})
export class WidgetAdvertisementComponent implements OnInit {
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
