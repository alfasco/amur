import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx'

import {Router} from '@angular/router';

@Component({
    selector: 'MainInterviewComponent',
    providers: [ComponentService],
    template: `
    <div class="review-box" *ngIf="content.length">
      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>
      <div *ngIf="content" style="margin-bottom: 30px">
        <h4>{{content[0].value.tit}}</h4>
        <div *ngIf="!content[0].ready">
          <ul class="interview">
            <li *ngIf="content[0].value.answer1[0].value"><a (click)="sendInterview(content[0].id,1)">{{content[0].value.answer1[0].value}}</a></li>
            <li *ngIf="content[0].value.answer2[0].value"><a (click)="sendInterview(content[0].id,2)">{{content[0].value.answer2[0].value}}</a></li>
            <li *ngIf="content[0].value.answer3[0].value"><a (click)="sendInterview(content[0].id,3)">{{content[0].value.answer3[0].value}}</a></li>
            <li *ngIf="content[0].value.answer4[0].value"><a (click)="sendInterview(content[0].id,4)">{{content[0].value.answer4[0].value}}</a></li>
            <li *ngIf="content[0].value.answer5[0].value"><a (click)="sendInterview(content[0].id,5)">{{content[0].value.answer5[0].value}}</a></li>
          </ul>
        </div>
        <div *ngIf="content[0].ready">
          <div class="member-skills">
            <p *ngIf="out(content[0], 'answer1', 'value')">{{out(content[0], 'answer1', 'value')}} - {{out(content[0], 'result1', 'value') || 0}}</p>
            <div *ngIf="out(content[0], 'answer1', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(content[0], 'result1', 'value'),summ(content[0])) + '%'"></p>
            </div>
            <p *ngIf="out(content[0], 'answer2', 'value')">{{out(content[0], 'answer2', 'value')}} - {{out(content[0], 'result2', 'value') || 0}}</p>
            <div *ngIf="out(content[0], 'answer2', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(content[0], 'result2', 'value'),summ(content[0])) + '%'"></p>
            </div>
            <p *ngIf="out(content[0], 'answer3', 'value')">{{out(content[0], 'answer3', 'value')}} - {{out(content[0], 'result3', 'value') || 0}}</p>
            <div *ngIf="out(content[0], 'answer3', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(content[0], 'result3', 'value'),summ(content[0])) + '%'"></p>
            </div>
            <p *ngIf="out(content[0], 'answer4', 'value')">{{out(content[0], 'answer4', 'value')}} - {{out(content[0], 'result4', 'value') || 0}}</p>
            <div *ngIf="out(content[0], 'answer4', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(content[0], 'result4', 'value'),summ(content[0])) + '%'"></p>
            </div>
            <p *ngIf="out(content[0], 'answer5', 'value')">{{out(content[0], 'answer5', 'value')}} - {{out(content[0], 'result5', 'value') || 0}}</p>
            <div *ngIf="out(content[0], 'answer5', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(content[0], 'result5', 'value'),summ(content[0])) + '%'"></p>
            </div>
          </div>
        </div>
        <a style="float:right">Архив опросов
        </a>
      </div>
    </div>`,
    styles: [
        'ul {padding: 10px ;}' +
        'ul.interview li {display: inline-block;color: #666666;font-size: 13px;font-family: "Lato", sans-serif;margin-right: 3px;margin-bottom: 2px;}' +
        'ul.interview li a {display: inline-block; text-decoration: none;transition: all 0.2s ease-in-out;-moz-transition: all 0.2s ease-in-out;-webkit-transition: all 0.2s ease-in-out;-o-transition: all 0.2s ease-in-out; padding: 6px 10px; border: 1px solid #efefef; -webkit-border-radius: 2px;-moz-border-radius: 2px;-o-border-radius: 2px;border-radius: 2px;color: #999999;font-size: 12px;font-family: "Lato", sans-serif;}' +
        'ul.interview li a:hover {background: #f44336;border: 1px solid #f44336;color: #ffffff;}' +
        '.member-skills {padding: 0 20px;margin-bottom: 15px;overflow: hidden;}' +
        '.member-skills > p {font-weight: 700;color: #222222;margin-bottom: 16px;}' +
        '.member-skills .meter {height: 17px;padding: 2px;-webkit-border-radius: 7px;-moz-border-radius: 7px;-o-border-radius: 7px;border-radius: 7px;width: 100%;background: #fff;border: 1px solid #e1e1e1;margin-bottom: 16px;}' +
        '.member-skills .meter p {height: 100%;background: #f44336;text-align: right;margin: 0;-webkit-border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;}'
    ]
})
export class MainInterviewComponent implements OnInit {
    @Input() public idComponent: string;
    content = [];
    title: any;

    constructor(private component: ComponentService, private http: Http, private router: Router) {
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {

                this.content = component.content;
                this.content.forEach((item) => {
                    item.summ = this.summ(item);
                    item.value.result
                    item.ready = this.getCookie(item.id);
                })
                this.title = component.title;
                console.log(this.content)
            },
            error => console.log(<any>error));
    }

    sendInterview(id: any, numberr: any) {
        var date = new Date(new Date().getTime() + 3600 * 24 * 1000 * 1000);
        this.setCookie(id, 'true', {
            express: date.toUTCString()
        });
        this.content.forEach((item) => {
            item.id == id ? item.ready = true : item.ready = undefined;
            if (item.id == id) {
                item.value['result' + numberr][0].value++;
            }
            item.summ++;
        });

        $.ajax({
            url: 'http://portamur.alfasco.ru/api/v1/put/incInterview/?id=' + id + '&param=' + numberr
        }).done(() => {
            console.log('22')
        })
    }

    setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    summ(interview) {
        interview.value.result1[0].value = parseInt(interview.value.result1[0].value) || 0;
        interview.value.result2[0].value = parseInt(interview.value.result2[0].value) || 0;
        interview.value.result3[0].value = parseInt(interview.value.result3[0].value) || 0;
        interview.value.result4[0].value = parseInt(interview.value.result4[0].value) || 0;
        interview.value.result5[0].value = parseInt(interview.value.result5[0].value) || 0;
        return interview.value.result1[0].value + interview.value.result2[0].value + interview.value.result3[0].value + interview.value.result4[0].value + interview.value.result5[0].value;
    }

    getPercent(value: number, summ: number) {
        return parseFloat(value * 100 / summ).toFixed(2);
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

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
