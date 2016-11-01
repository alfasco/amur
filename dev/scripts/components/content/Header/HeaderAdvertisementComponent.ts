import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'HeaderAdvertisementComponent',
    providers: [ComponentService],
    template: `
    <div class="advertisement" *ngIf="content">
        <div class="desktop-advert">
            <a href="{{out(content, 'link', 'value')}}"><img src="http://portamur.alfasco.ru{{content.value.img_728x90[0].value}}" alt=""></a>
        </div>
        <div class="tablet-advert">
            <a href="{{out(content, 'link', 'value')}}"><img src="http://portamur.alfasco.ru{{content.value.img_468x60[0].value}}" alt=""></a>
        </div>
    </div>`
})
export class HeaderAdvertisementComponent implements OnInit {
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

    out(object, field, value) {
        if (object) {
            if (object.value) {
                if (object.value[field]) {
                    if (object.value[field][0]) {
                        if (object.value[field][0][value]) {
                            return object.value[field][0][value]
                        }
                    }
                }
            }
        }
    }
};
