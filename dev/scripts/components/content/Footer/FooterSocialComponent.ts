import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterSocialComponent',
    providers: [ComponentService],
    template: `
    <div class="widget social-widget">
        <h1>Присоединяйтесь</h1>
        <ul class="social-icons">
            <li><a href="https://vk.com/public131936676" class="linkedin"><i class="fa fa-vk" style="line-height: 40px;"></i></a></li>
            <li><a href="https://www.facebook.com/groups/555615097960958/" class="facebook"><i class="fa fa-facebook" style="line-height: 40px;"></i></a></li>
            <li><a href="https://ok.ru/group/53024212189327" class="odnoklassniki"><i class="fa fa-rss" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="google"><i class="fa fa-google-plus" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="twitter"><i class="fa fa-twitter" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="youtube"><i class="fa fa-youtube" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="instagram"><i class="fa fa-instagram" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="linkedin"><i class="fa fa-linkedin" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="vimeo"><i class="fa fa-vimeo-square" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="dribble"><i class="fa fa-dribbble" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="pinterest"><i class="fa fa-pinterest" style="line-height: 40px;"></i></a></li>
            <li><a href="#" class="flickr"><i class="fa fa-flickr" style="line-height: 40px;"></i></a></li>

        </ul>
    </div>`
})
export class FooterSocialComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;


    constructor(private component: ComponentService) { }


    ngOnInit() {
        // this.component.getComponent(this.idComponent).subscribe(
        //     component => {
        //         this.content = component.content[0];
        //     },
        //     error => console.log(<any>error));
    }
};
