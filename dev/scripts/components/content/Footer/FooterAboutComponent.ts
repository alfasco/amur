import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterAboutComponent',
    providers: [ComponentService],
    template: `
    <div class="widget text-widget">
        <h1>О нас</h1>
        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </p>
        <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. </p>
    </div>`
})
export class FooterAboutComponent implements OnInit {
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
