import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainView2Component',
    providers: [ComponentService],
    templateUrl: 'templates/components/content/MainView2Component.html'
})
export class MainView2Component implements OnInit {
    @Input() public idComponent: string;
    content: any;

    constructor(private component: ComponentService) {
        this.content = []
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = [[component[0], [component[1], component[2], component[3]]], [component[4], [component[5], component[6], component[7]]], [component[8], [component[9], component[10], component[10]]]];
                let interval = setInterval(() => {
                    if ($('.mainview2 .news-post')) {
                        clearInterval(interval);

                        var carousel = $('.mainview2'),
                            dataNum = $('.mainview2').attr('data-num'),
                            dataNum2,
                            dataNum3;

                        if (dataNum == 1) {
                            dataNum2 = 1;
                            dataNum3 = 1;
                        } else if (dataNum == 2) {
                            dataNum2 = 2;
                            dataNum3 = dataNum - 1;
                        } else {
                            dataNum2 = dataNum - 1;
                            dataNum3 = dataNum - 2;
                        }
                        carousel.owlCarousel({
                            autoPlay: 10000,
                            navigation: true,
                            items: dataNum,
                            itemsDesktop: [1199, dataNum2],
                            itemsDesktopSmall: [979, dataNum3]
                        });
                    }
                }, 100)
            },
            error => console.log(<any>error));
    }
};
