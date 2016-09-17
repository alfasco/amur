import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainGalleryComponent',
    providers: [ComponentService],
    templateUrl: 'templates/components/content/MainGalleryComponent.html'
})
export class MainGalleryComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;

    constructor(private component: ComponentService) {
        this.content = []
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                let interval = setInterval(() => {
                    if ($('.maingallery .news-post')) {
                        clearInterval(interval);

                        var carousel = $('.maingallery'),
                            dataNum = $('.maingallery').attr('data-num'),
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
