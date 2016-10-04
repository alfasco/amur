import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainInterviewComponent',
    providers: [ComponentService],
    template: `
    <div class="advertisement" *ngIf="contentr">
      <div class="desktop-advert">
        <img src="http://portamur.alfasco.ru{{content.value.img_728x90[0].value}}" alt="">
      </div>
      <div class="tablet-advert">
        <img src="http://portamur.alfasco.ru{{content.value.img_468x60[0].value}}" alt="">
      </div>
      <div class="mobile-advert">
        <img src="http://portamur.alfasco.ru{{content.value.img_300x250[0].value}}" alt="">
      </div>
    </div>`
})
export class MainInterviewComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;

    constructor(private component: ComponentService) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.content = component.content[0];
            },
            error => console.log(<any>error));
    }
};
