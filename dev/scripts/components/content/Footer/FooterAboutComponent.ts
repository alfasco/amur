import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterAboutComponent',
    providers: [ComponentService],
    template: `
    <div class="widget text-widget">
        <h1>{{title}}</h1>
        <div [innerHTML]="content"></div>
    </div>`
})
export class FooterAboutComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    public title: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent('FooterAboutComponent').subscribe(
            component => {
                this.title = component.title[0];
                this.content = component.content[0].value.content[0].value;
            },
            error => console.log(<any>error));
    }
};
