import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';
import {Location} from '@angular/common';

@Component({
    selector: 'MainAfishaComponent',
    providers: [ComponentService],
    template: `
    <div class="single-post-box" *ngIf="content">
      <div class="title-post">
        <h1>{{out(content,'title','value')}}</h1>
      </div>
      <div>
        <div id="my-share" class="ya-share2" data-services="collections,vkontakte,facebook,odnoklassniki,moimir,whatsapp,telegram"></div>
      </div>

      <div class="post-content" style="margin-top: 20px;">
        <div class="row" style="margin-bottom: 20px;">
          <div class="col-md-4">
            <img src="http://portamur.alfasco.ru{{out(content,'img','value')}}">
          </div>
          <div class="col-md-8">
            <h4 style="padding:0 20px;">
              <span *ngIf="out(content,'genre','value')">{{out(content,'genre','value')}}, </span>{{out(content,'old','value')}}
            </h4>
            <p><b *ngIf="out(content,'director','value')">{{out(content,'director','title')}}:</b> {{out(content,'director','value')}}</p>
            <p><b *ngIf="out(content,'actors','value')">{{out(content,'actors','title')}}:</b> {{out(content,'actors','value')}}</p>
            <p><b *ngIf="out(content,'datestart','value')">{{out(content,'datestart','title')}}:</b> {{out(content,'datestart','value')}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>{{out(content,'description','value')}}</p>
          </div>
        </div>
        <div class="row" style="margin-bottom: 20px;">
          <div class="col-md-12">
            <div class="title-section">
              <h1><span>Трейлер</span></h1>
            </div>
            <div class="news-post video-post">
                <img alt="" src="http://portamur.alfasco.ru{{out(content,'trailer_img','value')}}">
                <a href="{{out(content,'trailer','value')}}" class="video-link"><i class="fa fa-play-circle-o"></i></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1><span>Расписание сеансов</span></h1>
            </div>
            <div class="about-more-autor">
									<ul class="nav nav-tabs">
										<li *ngFor="let day of session; let i = index;" [class.active]="i==0">
											<a href="#{{i}}" data-toggle="tab" aria-expanded="true">{{day.title}}</a>
										</li>
									</ul>

									<div class="tab-content">

										<div class="tab-pane" id="{{i}}" style="padding-top:10px;" *ngFor="let day of session; let i = index;" [class.active]="i==0">
                      <div *ngIf="day.title=='Ещё'" style="padding-top:10px;">
                        <div *ngFor="let cinema of day.content" class="row" style="padding-top:10px;">
                          <div class="row">
                            <div class="col-md-3">
                              <p><b>{{cinema.date}}</b></p>
                            </div>
                            <div class="col-md-5" *ngFor="let cin of cinema.sessions">
                              <p style="padding:0px; margin:0px;"><b>{{cin.theater}}</b></p>
                              <p style="padding:0px; margin:0px;">Сеансы: {{cin.time}} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div *ngIf="day.title!='Ещё'" style="padding-top:10px;">
                        <div *ngFor="let cinema of day.content.sessions" class="row" style="padding-top:10px;">
                          <div class="col-md-3">
                            <p><b>{{cinema.theater}}</b></p>
                          </div>
                          <div class="col-md-5">
                            <p style="padding:0px; margin:0px;">Сеансы: {{cinema.time}} </p>
                          </div>
                        </div>
                      </div>
										</div>

									</div>
								</div>
          </div>
        </div>
      </div>

    </div>`,
    styles: [
        '.single-post-box .about-more-autor ul.nav-tabs li {width: 33.33333333%;}'
    ]
})
export class MainAfishaComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    public session: any;


    constructor(private component: ComponentService, private location: Location) {
    }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
                this.content = component.content[0];
                this.session = component.session;


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
