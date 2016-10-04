import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';
import {Location} from '@angular/common';

@Component({
    selector: 'MainSinglePostComponent',
    providers: [ComponentService],
    template: `
    <div class="single-post-box" *ngIf="content">
      <div *ngIf="video">
        <div class="news-post video-post">
            <img alt="" src="http://portamur.alfasco.ru{{content.value.img[0].value}}">
            <a href="{{content.value.video[0].value}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
        </div>
      </div>
      <div class="title-post">
        <h1>{{content.value.tit}}</h1>
        <ul class="post-tags">
          <li><i class="fa fa-clock-o"></i>{{content.value.created.substr(0,10)}}</li>
        </ul>
      </div>
      <div class="share-post-box">

      </div>

      <div class="post-gallery" *ngIf="gallery">
        <ul class="bxslider">
          <li *ngFor="let img of gallery" style="list-style: none;">
            <img src="{{img.value.file[0].value}}" alt="">
          </li>
        </ul>
      </div>

      <div class="post-content" [innerHTML]="content.value.content[0].value"></div>

      <div class="share-post-box">

      </div>

      <div class="about-more-autor" *ngIf="autor">
        <ul class="nav nav-tabs" id="myTab2">
          <li class="active">
            <a href="#about-autor" data-toggle="tab">About The Autor</a>
          </li>
          <li>
            <a href="#more-autor" data-toggle="tab">More From Autor</a>
          </li>
        </ul>

        <div class="tab-content">

          <div class="tab-pane active" id="about-autor">
            <div class="autor-box">
              <img src="upload/users/avatar1.jpg" alt="">
              <div class="autor-content">
                <div class="autor-title">
                  <h1><span>Jane Smith</span><a href="autor-details.html">18 Posts</a></h1>
                  <ul class="autor-social">
                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" class="google"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                  </ul>
                </div>
                <p>
                  Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada.
                </p>
              </div>
            </div>
          </div>

          <div class="tab-pane" id="more-autor">
            <div class="more-autor-posts">

              <div class="news-post image-post3">
                <img src="upload/news-posts/gal1.jpg" alt="">
                <div class="hover-box">
                  <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                  </ul>
                </div>
              </div>

              <div class="news-post image-post3">
                <img src="upload/news-posts/gal2.jpg" alt="">
                <div class="hover-box">
                  <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                  </ul>
                </div>
              </div>

              <div class="news-post image-post3">
                <img src="upload/news-posts/gal3.jpg" alt="">
                <div class="hover-box">
                  <h2><a href="single-post.html">Suspendisse urna nibh.</a></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                  </ul>
                </div>
              </div>

              <div class="news-post image-post3">
                <img src="upload/news-posts/gal4.jpg" alt="">
                <div class="hover-box">
                  <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. Aliquam </a></h2>
                  <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


      <!-- interview box -->
      <div *ngIf="interview">

      </div>
      <!-- End interview box -->

      <!-- comment area box -->

      <!-- End comment area box -->

      <!-- contact form box -->
      <!-- End contact form box -->

    </div>`
})
export class MainSinglePostComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    public path: any;
    public gallery: any;
    public video: any;
    public interview: any;


    constructor(private component: ComponentService, private location: Location) {
        this.path = 'http://amurlenta.ru' + location.path();
        console.log(this.path)
    }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content[0];
                this.gallery = component.gallery;
                this.interview = component.interview;
                console.log(component)
                if (this.content.value.content[0].value) {
                    this.content.value.content[0].value = this.content.value.content[0].value.replace(/\/upload\//g, 'http://portamur.alfasco.ru/upload/')
                }

                if (this.gallery) {
                    for (let i in this.gallery) {
                        this.gallery[i].value.file[0].value = 'http://portamur.alfasco.ru' + this.gallery[i].value.file[0].value.replace(/\/images\//i, '/images/770x380/')
                    }
                }
                if (this.content.value.video[0].value) {
                    this.video = true;
                }
                if (this.gallery) {
                    if (this.gallery.length > 1) {
                        let interval = setInterval(() => {
                            if ($('.bxslider') || !this.gallery) {
                                clearInterval(interval);
                                try {
                                    $('.bxslider').bxSlider({
                                        mode: 'fade',
                                        auto: true
                                    });


                                } catch (err) {
                                };
                            }
                        }, 150)
                    }
                }
            },
            error => console.log(<any>error));
    }
};
