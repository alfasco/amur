import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'MainBlogsComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box">
      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>

      <ul class="autor-list" *ngIf="content">

        <li *ngFor="let author of content">

          <div class="autor-box">

            <img src="{{author.value.avatar[0].value}}" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>{{author.value.iname[0].value}}</span><a (click)="routing('blog/' + author.id)">Постов {{author.value.posts}}</a></h1>
                <ul class="autor-social">
                  <li *ngIf="author.value.Vkontakte[0].value"><a href="{{author.value.Vkontakte[0].value}}" target="_blank" class="linkedin"><i class="fa fa-vk"></i></a></li>
                  <li *ngIf="author.value.Facebook[0].value"><a href="{{author.value.Facebook[0].value}}" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a></li>
                  <li *ngIf="author.value.twitter[0].value"><a href="{{author.value.twitter[0].value}}" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></li>
                  <li *ngIf="author.value.youtube[0].value"><a href="{{author.value.youtube[0].value}}" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a></li>
                  <li *ngIf="author.value.instagram[0].value"><a href="{{author.value.instagram[0].value}}" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>

              <p style="min-height:40px">
                {{author.value.about[0].value}}
              </p>

            </div>

          </div>

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Категории</span></li>

              <li *ngFor="let sub of author.value.subsection"><a>{{sub.value}}</a></li>
            </ul>
            <a *ngIf="author.value.site[0].value" href="{{author.value.site[0].value}}" class="autor-site">{{author.value.site[0].value}}</a>
          </div>
        </li>
      </ul>
    </div>`
})
export class MainBlogsComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;

    constructor(private component: ComponentService, private router: Router) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content;
                if (this.content) {
                    for (let i in this.content) {
                        this.content[i].value.avatar[0].value = 'http://portamur.alfasco.ru' + this.content[i].value.avatar[0].value.replace(/\/images\//i, '/images/100x100/')

                        this.content[i].value.posts = 0;
                        if (this.content[i].value.link_select) {
                            for (let k in this.content[i].value.link_select) {
                                if (this.content[i].value.link_select[k].tpl == '1a6a676fc06fba64fc7f72cee4fbb6ba') this.content[i].value.posts++;
                            }
                        }
                    }
                }
                this.title = component.title;
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
