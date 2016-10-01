import {Component, Input, OnInit} from '@angular/core';
import {DocService} from '../../services/doc';

import {Router} from '@angular/router';

@Component({
    selector: 'MainAuthorBlogComponent',
    providers: [DocService],
    template: `
    <div class="grid-box">
      <div class="title-section">
        <h1><span>Об авторе</span></h1>
      </div>

      <ul class="autor-list" *ngIf="content">

        <li>

          <div class="autor-box">

            <img src="{{content.value.img[0].value}}" alt="">

            <div class="autor-content">

              <div class="autor-title">
                <h1><span>{{content.value.name[0].value}}</span><a (click)="routing('blog/' + content.id)">Постов {{content.value.posts}}</a></h1>
                <ul class="autor-social">
                  <li *ngIf="content.value.Vkontakte[0].value"><a href="{{content.value.Vkontakte[0].value}}" target="_blank" class="linkedin"><i class="fa fa-vk"></i></a></li>
                  <li *ngIf="content.value.Facebook[0].value"><a href="{{content.value.Facebook[0].value}}" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a></li>
                  <li *ngIf="content.value.twitter[0].value"><a href="{{content.value.twitter[0].value}}" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></li>
                  <li *ngIf="content.value.youtube[0].value"><a href="{{content.value.youtube[0].value}}" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a></li>
                  <li *ngIf="content.value.instagram[0].value"><a href="{{content.value.instagram[0].value}}" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>

              <p style="min-height:40px">
                {{content.value.about[0].value}}
              </p>

            </div>

          </div>

          <div class="autor-last-line">
            <ul class="autor-tags">
              <li><span><i class="fa fa-bars"></i>Категории</span></li>

              <li *ngFor="let sub of content.value.subsection"><a>{{sub.value}}</a></li>
            </ul>
            <a *ngIf="content.value.site[0].value" href="{{content.value.site[0].value}}" class="autor-site">{{content.value.site[0].value}}</a>
          </div>
        </li>
      </ul>
    </div>`
})
export class MainAuthorBlogComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;
    title: any;

    constructor(private doc: DocService, private router: Router) {
    }

    ngOnInit() {
        this.doc.getDoc(this.idComponent.substr(this.idComponent.indexOf("=") + 1)).subscribe(
            component => {
                this.content = component.content[0];
                if (this.content) {
                    this.content.value.img[0].value = 'http://portamur.alfasco.ru' + this.content.value.img[0].value.replace(/\/images\//i, '/images/100x100/')

                    this.content.value.posts = 0;
                    if (this.content.value.link_select) {
                        for (let k in this.content.value.link_select) {
                            if (this.content.value.link_select[k].tpl == '1a6a676fc06fba64fc7f72cee4fbb6ba') this.content.value.posts++;
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
