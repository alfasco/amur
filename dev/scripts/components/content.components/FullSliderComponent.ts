import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FullSliderComponent',
    templateUrl: 'templates/components/content/fullslidercomponent.html',
    providers: [ComponentService]
})
export class FullSliderComponent implements OnInit {
    @Input() public idComponent: string;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {

            },
            error => console.log(<any>error));

        /*=============================================>>>>>
        = kkkk =
        ===============================================>>>>>*/

        var winDow = $(window);
        // Needed variables
        var $container = $('.iso-call');
        var $filter = $('.filter');

        try {
            $container.imagesLoaded(function() {
                // init
                winDow.trigger('resize');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    itemSelector: '.iso-call > div',
                    masonry: {
                        columnWidth: '.default-size'
                    },
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
        } catch (err) {
        }

        winDow.on('resize', function() {
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {
            }
            return false;
        });

        // Isotope Filter
        $filter.find('a').on('click', function() {
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {

            }
            return false;
        });

        /*= End of kkkk =*/
        /*=============================================<<<<<
        */

        /*=============================================>>>>>
        = bxSlider =
        ===============================================>>>>>*/

        try {
            $('.bxslider').bxSlider({
                mode: 'fade',
                auto: true
            });

            $('.big-bxslider').bxSlider({
                mode: 'horizontal',
                auto: true
            });

            $('.slider-call').bxSlider({
                pagerCustom: '#bx-pager'
            });

            $('.slider-call2').bxSlider({
                pagerCustom: '#bx-pager2'
            });


        } catch (err) {
        };

        /*= End of bxSlider =*/
        /*=============================================<<<<<*/
    }
};
