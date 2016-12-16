import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';
import {Location} from '@angular/common';

@Component({
    selector: 'MainCommentsComponent',
    providers: [ComponentService],
    template: `
    <div class="single-post-box">
       <!-- contact form box -->
      <div class="contact-form-box" style="margin-bottom: 30px;" *ngIf="!ready">
         <div class="title-section">
             <h1><span>Оставьте комментарий</span> <span class="email-not-published">Ваш e-mail адрес не будет опубликован.</span></h1>
         </div>
         <form id="comment-form">
             <div class="row">
                <div class="col-md-4">
                   <label for="name">Имя</label>
                   <input id="name" name="name" type="text" [(ngModel)]='comment.name'>
                </div>
                <div class="col-md-4">
                   <label for="mail">E-mail</label>
                   <input id="mail" name="mail" type="text" [(ngModel)]='comment.email'>
                </div>
             </div>
             <label for="comment">Комментарий</label>
             <textarea id="comment" name="comment" [(ngModel)]='comment.text'></textarea>
             <button type="submit" id="submit-contact" (click)="send()" [disabled]='!comment.name.length || !comment.email.length || !comment.text.length'>
                <i class="fa fa-comment"></i> Опубликовать
             </button>
         </form>
      </div>
      <!-- End contact form box -->
      <!-- comment area box -->
      <div class="comment-area-box">
         <div class="title-section">
            <h1><span>Комментарии</span></h1>
         </div>
         <ul class="comment-tree">
            <li *ngFor="let cont of content">
               <div class="comment-box">
                  <img alt="" src="images/no_ava.png">
                  <div class="comment-content">
                     <h4>{{out(cont, 'name', 'value')}}</h4>
                     <span><i class="fa fa-clock-o"></i>{{cont.value.created}}</span>
                     <p>{{out(cont, 'content', 'value')}}</p>
                  </div>
               </div>
            </li>
         </ul>
      </div>
      <!-- End comment area box -->
   </div>`
})
export class MainCommentsComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;
    comment = {
        name: '',
        email: '',
        text: ''
    }
    public rady: boolean;

    constructor(private component: ComponentService, private location: Location) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content;
                console.log(component)
            },
            error => console.log(<any>error));
    }

    send() {
        console.log(this.comment)
        $.ajax({
            url: 'http://portamur.alfasco.ru/api/v1/post/comment/?uid=9d2351495dd9d80aff50d513581b319b&id=' + this.location.path() + '&content=' + this.comment.text + '&name=' + this.comment.name + '&email=' + this.comment.email
        }).done(() => {
            this.ready = true;
            this.component.getComponent(this.idComponent).subscribe(
                component => {
                    this.content = component.content;
                    console.log(component)
                },
                error => console.log(<any>error));
        })
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
