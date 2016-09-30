import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';
import {Location} from '@angular/common';

@Component({
    selector: 'MainSinglePostComponent',
    providers: [ComponentService],
    template: `
    <div class="single-post-box" *ngIf="content">

      <div class="title-post">
        <h1>{{content.value.tit}}</h1>
        <ul class="post-tags">
          <li><i class="fa fa-clock-o"></i>27 may 2013</li>
          <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
          <li><a href="#"><i class="fa fa-comments-o"></i><span>0</span></a></li>
          <li><i class="fa fa-eye"></i>872</li>
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


      <!-- carousel box -->

      <!-- End carousel box -->

      <!-- comment area box -->
      <div id="hypercomments_widget"></div>
        <a href="http://hypercomments.com" class="hc-link" title="comments widget">comments powered by HyperComments</a>
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


    constructor(private component: ComponentService, private location: Location) {
        this.path = 'http://amurlenta.ru' + location.path();
        console.log(this.path)
    }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.content = component.content[0];
                this.gallery = component.gallery;
                if (this.gallery) {
                    for (let i in this.gallery) {
                        this.gallery[i].value.file[0].value = 'http://portamur.alfasco.ru' + this.gallery[i].value.file[0].value.replace(/\/images\//i, '/images/770x380/')
                    }
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

                startComment();
            },
            error => console.log(<any>error));
    }
};
