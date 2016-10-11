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
            <img alt="" src="http://portamur.alfasco.ru{{out(content,'img','value')}}">
            <a href="{{out(content,'video','value')}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
        </div>
      </div>
      <div class="title-post">
        <h1>{{out(content,'title','value')}}</h1>
        <ul class="post-tags">
          <li><i class="fa fa-clock-o"></i>{{out(content,'time','value')}}&nbsp;&nbsp;&nbsp;{{out(content,'date','value')}}</li>
          <li><i class="fa fa-user"></i>{{out(content,'owner','value')}}</li>
          <li><i class="fa fa-eye"></i>{{out(content,'counter','value')}}</li>
        </ul>
      </div>
      <div class="share-post-box">
        <div id="my-share" class="ya-share2" data-services="collections,vkontakte,facebook,odnoklassniki,moimir,whatsapp,telegram"></div>
      </div>

      <div class="post-gallery" *ngIf="gallery">
        <ul class="bxslider">
          <li *ngFor="let img of gallery" style="list-style: none;">
            <img src="{{out(img,'file','value')}}" alt="">
          </li>
        </ul>
      </div>

      <div class="post-content" [innerHTML]="out(content,'content','value')"></div>

      <div class="share-post-box">

      </div>


      <!-- interview box -->
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


    constructor(private component: ComponentService, private location: Location) {
        this.path = 'http://amurlenta.ru' + location.path();
        console.log(this.path)
    }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content[0];
                this.gallery = component.gallery;
                if (this.content.value.content[0].value) {
                    this.content.value.content[0].value = this.content.value.content[0].value.replace(/\/upload\//g, 'http://portamur.alfasco.ru/upload/')
                }

                if (this.gallery) {
                    for (let i in this.gallery) {
                        this.gallery[i].value.file[0].value = 'http://portamur.alfasco.ru' + this.gallery[i].value.file[0].value.replace(/\/images\//i, '/images/770x380/')
                    }
                }
                if (this.content.value.video) {
                    if (this.content.value.video[0].value) {
                        this.video = true;
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
                setTimeout(() => {
                    let myShare = document.getElementById('my-share');
                    let share = Ya.share2(myShare, {
                        content: {
                            url: 'https://yandex.com',
                            title: 'Yandex',
                            description: 'It,s all about Yandex',
                            image: 'https://yastatic.net/morda-logo/i/logo.svg'
                        }
                        // здесь вы можете указать и другие параметры
                    });
                }, 500)
            },
            error => console.log(<any>error));
    }

    out(object, field, value) {
        if (object) {
            if (object.value) {
                if (object.value[field]) {
                    if (object.value[field][0]) {
                        if (object.value[field][0][value]) {
                            return object.value[field][0][value]
                        }
                    }
                }
            }
        }
    }
};
