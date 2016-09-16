import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'http://portamur.alfasco.ru/api/v1/template/?id='
})

export class Home implements OnInit {
    ngOnInit() {


        /*-------------------------------------------------*/
        /* =  OWL carousell - featured post, video post, gallery posts
        /*-------------------------------------------------*/
        // try {
        //     var owlWrap = $('.owl-wrapper');
        //
        //     if (owlWrap.length > 0) {
        //
        //         if (jQuery().owlCarousel) {
        //             owlWrap.each(function() {
        //
        //                 var carousel = $(this).find('.owl-carousel'),
        //                     dataNum = $(this).find('.owl-carousel').attr('data-num'),
        //                     dataNum2,
        //                     dataNum3;
        //
        //                 if (dataNum == 1) {
        //                     dataNum2 = 1;
        //                     dataNum3 = 1;
        //                 } else if (dataNum == 2) {
        //                     dataNum2 = 2;
        //                     dataNum3 = dataNum - 1;
        //                 } else {
        //                     dataNum2 = dataNum - 1;
        //                     dataNum3 = dataNum - 2;
        //                 }
        //
        //                 carousel.owlCarousel({
        //                     autoPlay: 10000,
        //                     navigation: true,
        //                     items: dataNum,
        //                     itemsDesktop: [1199, dataNum2],
        //                     itemsDesktopSmall: [979, dataNum3]
        //                 });
        //
        //             });
        //         }
        //     }
        //
        // } catch (err) {
        //
        // }
        //
        // /*=============================================>>>>>
        // = Ticker news =
        // ===============================================>>>>>*/
        //
        // try {
        //     $('#js-news').ticker({
        //         speed: 0.20,			// The speed of the reveal
        //         controls: true,			// Whether or not to show the jQuery News Ticker controls
        //         titleText: '',	// To remove the title set this to an empty String
        //         displayType: 'reveal',	// Animation type - current options are 'reveal' or 'fade'
        //         direction: 'ltr',		// Ticker direction - current options are 'ltr' or 'rtl'
        //         pauseOnItems: 2000,		// The pause on a news item before being replaced
        //         fadeInSpeed: 600,		// Speed of fade in animation
        //         fadeOutSpeed: 300		// Speed of fade out animation
        //     });
        // } catch (err) {
        // }
        //
        // /*= End of Ticker news =*/
        // /*=============================================<<<<<*/
        // /*=============================================>>>>>
        // = bxSlider =
        // ===============================================>>>>>*/
        //
        // try {
        //     $('.bxslider').bxSlider({
        //         mode: 'fade',
        //         auto: true
        //     });
        //
        //     $('.big-bxslider').bxSlider({
        //         mode: 'horizontal',
        //         auto: true
        //     });
        //
        //     $('.slider-call').bxSlider({
        //         pagerCustom: '#bx-pager'
        //     });
        //
        //     $('.slider-call2').bxSlider({
        //         pagerCustom: '#bx-pager2'
        //     });
        //
        //
        // } catch (err) {
        // };

        /*= End of bxSlider =*/
        /*=============================================<<<<<*/
    }
}
