import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainBlogsComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>

      <ul class="autor-list">

        <li>

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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar2.jpg" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>Jane Smith</span><a href="autor-details.html">6 Posts</a></h1>
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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar3.jpg" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>Jane Smith</span><a href="autor-details.html">9 Posts</a></h1>
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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar4.jpg" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>Jane Smith</span><a href="autor-details.html">2 Posts</a></h1>
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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar5.jpg" alt="">

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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar6.jpg" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>Jane Smith</span><a href="autor-details.html">10 Posts</a></h1>
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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

        <li>

          <div class="autor-box">

            <img src="upload/users/avatar7.jpg" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>Jane Smith</span><a href="autor-details.html">22 Posts</a></h1>
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

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Category</span></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sport</a></li>
            </ul>
            <a href="#" class="autor-site">http://www.janesmith.com</a>
          </div>

        </li>

      </ul>
    </div>`
})
export class MainBlogsComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;

    constructor(private component: ComponentService) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.content = component.content[0];
                this.title = component.title;
            },
            error => console.log(<any>error));
    }
};
