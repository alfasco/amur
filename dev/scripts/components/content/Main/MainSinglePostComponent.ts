import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

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

      <div class="post-content" [innerHTML]="content.value.content[0].value"></div>

      <div class="post-tags-box">
        <ul class="tags-box">
          <li><i class="fa fa-tags"></i><span>Tags:</span></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Fashion</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Sport</a></li>
        </ul>
      </div>

      <div class="share-post-box">
        <ul class="share-box">
          <li><i class="fa fa-share-alt"></i><span>Share Post</span></li>
          <li><a class="facebook" href="#"><i class="fa fa-facebook"></i>Share on Facebook</a></li>
          <li><a class="twitter" href="#"><i class="fa fa-twitter"></i>Share on Twitter</a></li>
          <li><a class="google" href="#"><i class="fa fa-google-plus"></i><span></span></a></li>
          <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i><span></span></a></li>
        </ul>
      </div>

      <div class="about-more-autor">
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
      <div class="carousel-box owl-wrapper">
        <div class="title-section">
          <h1><span>You may also like</span></h1>
        </div>
        <div class="owl-carousel" data-num="3">

          <div class="item news-post image-post3">
            <img src="upload/news-posts/art1.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img src="upload/news-posts/art2.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post video-post">
            <img src="upload/news-posts/art3.jpg" alt="">
            <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
            <div class="hover-box">
              <h2><a href="single-post.html">Lorem ipsum dolor sit consectetuer adipiscing elit. Donec odio. </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img src="upload/news-posts/art4.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. Aliquam </a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

          <div class="item news-post image-post3">
            <img src="upload/news-posts/art5.jpg" alt="">
            <div class="hover-box">
              <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
              <ul class="post-tags">
                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <!-- End carousel box -->

      <!-- comment area box -->
      <div class="comment-area-box">
        <div class="title-section">
          <h1><span>5 Comments</span></h1>
        </div>
        <ul class="comment-tree">
          <li>
            <div class="comment-box">
              <img alt="" src="upload/users/avatar6.jpg">
              <div class="comment-content">
                <h4>John Doe <a href="#"><i class="fa fa-comment-o"></i>Reply</a></h4>
                <span><i class="fa fa-clock-o"></i>27 may 2013 at 8:57 pm</span>
                <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam. </p>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-box">
              <img alt="" src="upload/users/avatar1.jpg">
              <div class="comment-content">
                <h4>John Doe <a href="#"><i class="fa fa-comment-o"></i>Reply</a></h4>
                <span><i class="fa fa-clock-o"></i>27 may 2013 at 8:57 pm</span>
                <p>Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. </p>
              </div>
            </div>
            <ul class="depth">
              <li>
                <div class="comment-box">
                  <img alt="" src="upload/users/avatar2.jpg">
                  <div class="comment-content">
                    <h4>John Doe <a href="#"><i class="fa fa-comment-o"></i>Reply</a></h4>
                    <span><i class="fa fa-clock-o"></i>27 may 2013 at 8:57 pm</span>
                    <p>CNullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non. </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div class="comment-box">
              <img alt="" src="upload/users/avatar4.jpg">
              <div class="comment-content">
                <h4>John Doe <a href="#"><i class="fa fa-comment-o"></i>Reply</a></h4>
                <span><i class="fa fa-clock-o"></i>27 may 2013 at 8:57 pm</span>
                <p>Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. </p>
              </div>
            </div>
          </li>

          <li>
            <div class="comment-box">
              <img alt="" src="upload/users/avatar5.jpg">
              <div class="comment-content">
                <h4>John Doe <a href="#"><i class="fa fa-comment-o"></i>Reply</a></h4>
                <span><i class="fa fa-clock-o"></i>27 may 2013 at 8:57 pm</span>
                <p>Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel. </p>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <!-- End comment area box -->

      <!-- contact form box -->
      <div class="contact-form-box">
        <div class="title-section">
          <h1><span>Leave a Comment</span> <span class="email-not-published">Your email address will not be published.</span></h1>
        </div>
        <form id="comment-form">
          <div class="row">
            <div class="col-md-4">
              <label for="name">Name*</label>
              <input id="name" name="name" type="text">
            </div>
            <div class="col-md-4">
              <label for="mail">E-mail*</label>
              <input id="mail" name="mail" type="text">
            </div>
            <div class="col-md-4">
              <label for="website">Website</label>
              <input id="website" name="website" type="text">
            </div>
          </div>
          <label for="comment">Comment*</label>
          <textarea id="comment" name="comment"></textarea>
          <button type="submit" id="submit-contact">
            <i class="fa fa-comment"></i> Post Comment
          </button>
        </form>
      </div>
      <!-- End contact form box -->

    </div>`
})
export class MainSinglePostComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.content = component.content[0]
            },
            error => console.log(<any>error));
    }
};
