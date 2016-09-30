import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterFotosComponent',
    providers: [ComponentService],
    template: `
    <div class="widget flickr-widget">
        <h1>Лучшие фото</h1>
        <ul class="flickr-list">
            <li>
                <a href="#"><img src="upload/flickr/1.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="upload/flickr/2.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="upload/flickr/3.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="upload/flickr/4.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="upload/flickr/5.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="upload/flickr/6.jpg" alt=""></a>
            </li>
        </ul>
        <a href="#">View more photos...</a>
    </div>`
})
export class FooterFotosComponent implements OnInit {
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
