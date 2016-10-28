import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainAdvertisementComponent',
    providers: [ComponentService],
    template: `
    <div class="advertisement" *ngIf="content">
      <div class="desktop-advert">
        <a href="{{link}}"><img src="http://portamur.alfasco.ru{{content.value.img_728x90[0].value}}" alt=""></a>
      </div>
      <div class="tablet-advert">
        <a href="{{link}}"><img src="http://portamur.alfasco.ru{{content.value.img_468x60[0].value}}" alt=""></a>
      </div>
      <div class="mobile-advert">
        <a href="{{link}}"><img src="http://portamur.alfasco.ru{{content.value.img_300x250[0].value}}" alt=""></a>
      </div>
    </div>`
})
export class MainAdvertisementComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;
    public link: any;

    constructor(private component: ComponentService) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content[0];
                this.link = component.link;
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
