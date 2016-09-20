import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainList1Component',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
  		<div class="title-section">
  			<h1><span class="world">World</span></h1>
  		</div>

  		<div class="row">
  			<div class="col-md-6">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<img src="upload/news-posts/im7.jpg" alt="">
  						<a class="category-post world" href="world.html">Business</a>
  					</div>
  					<div class="post-title">
  						<h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
  						<ul class="post-tags">
  							<li><i class="fa fa-clock-o"></i>27 may 2013</li>
  							<li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
  							<li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
  							<li><i class="fa fa-eye"></i>872</li>
  						</ul>
  					</div>
  					<div class="post-content">
  						<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  						<a href="single-post.html" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Read More</a>
  					</div>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<img src="upload/news-posts/im8.jpg" alt="">
  						<a class="category-post world" href="world.html">Lifestyle</a>
  					</div>
  					<div class="post-title">
  						<h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
  						<ul class="post-tags">
  							<li><i class="fa fa-clock-o"></i>27 may 2013</li>
  							<li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
  							<li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
  							<li><i class="fa fa-eye"></i>872</li>
  						</ul>
  					</div>
  					<div class="post-content">
  						<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  						<a href="single-post.html" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Read More</a>
  					</div>
  				</div>
  			</div>
  		</div>

  		<div class="row">
  			<div class="col-md-6">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<img src="upload/news-posts/im9.jpg" alt="">
  						<a class="category-post world" href="world.html">Trends</a>
  					</div>
  					<div class="post-title">
  						<h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
  						<ul class="post-tags">
  							<li><i class="fa fa-clock-o"></i>27 may 2013</li>
  							<li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
  							<li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
  							<li><i class="fa fa-eye"></i>872</li>
  						</ul>
  					</div>
  					<div class="post-content">
  						<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  						<a href="single-post.html" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Read More</a>
  					</div>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="news-post standard-post2">
  					<div class="post-gallery">
  						<img src="upload/news-posts/im10.jpg" alt="">
  						<a class="category-post world" href="world.html">Business</a>
  					</div>
  					<div class="post-title">
  						<h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
  						<ul class="post-tags">
  							<li><i class="fa fa-clock-o"></i>27 may 2013</li>
  							<li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
  							<li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
  							<li><i class="fa fa-eye"></i>872</li>
  						</ul>
  					</div>
  					<div class="post-content">
  						<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  						<a href="single-post.html" class="read-more-button"><i class="fa fa-arrow-circle-right"></i>Read More</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>`
})
export class MainList1Component implements OnInit {
    @Input() public idComponent: string;
    public content = [];

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = [[component[0], [component[1], component[2], component[3]]], [component[4], [component[5], component[6], component[7]]]];
            },
            error => console.log(<any>error));
    }
};
