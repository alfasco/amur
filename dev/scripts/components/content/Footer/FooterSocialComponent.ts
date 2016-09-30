import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterSocialComponent',
    providers: [ComponentService],
    template: `
    <div class="widget social-widget">
        <h1>Присоеденяйтесь</h1>
        <ul class="social-icons">
            <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" class="google"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#" class="vimeo"><i class="fa fa-vimeo-square"></i></a></li>
            <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
            <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="#" class="flickr"><i class="fa fa-flickr"></i></a></li>
            <li><a href="#" class="rss"><i class="fa fa-rss"></i></a></li>
        </ul>
    </div>`
})
export class FooterSocialComponent implements OnInit {
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
