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
        <h1 *ngIf="title!='Опросы'"><span>{{title}}</span></h1>
      </div>
      <div *ngFor="let cont of content" style="margin-bottom: 50px">
        <h4>{{cont.value.tit}}</h4>
        <div *ngIf="!cont.ready && !cont.was">
          <ul class="interview">
            <li *ngIf="out(cont, 'answer1', 'value')"><a (click)="sendInterview(cont.id,1)">{{out(cont, 'answer1', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer2', 'value')"><a (click)="sendInterview(cont.id,2)">{{out(cont, 'answer2', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer3', 'value')"><a (click)="sendInterview(cont.id,3)">{{out(cont, 'answer3', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer4', 'value')"><a (click)="sendInterview(cont.id,4)">{{out(cont, 'answer4', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer5', 'value')"><a (click)="sendInterview(cont.id,5)">{{out(cont, 'answer5', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer6', 'value')"><a (click)="sendInterview(cont.id,6)">{{out(cont, 'answer6', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer7', 'value')"><a (click)="sendInterview(cont.id,7)">{{out(cont, 'answer7', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer8', 'value')"><a (click)="sendInterview(cont.id,8)">{{out(cont, 'answer8', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer9', 'value')"><a (click)="sendInterview(cont.id,9)">{{out(cont, 'answer9', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer10', 'value')"><a (click)="sendInterview(cont.id,10)">{{out(cont, 'answer10', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer11', 'value')"><a (click)="sendInterview(cont.id,11)">{{out(cont, 'answer11', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer12', 'value')"><a (click)="sendInterview(cont.id,12)">{{out(cont, 'answer12', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer13', 'value')"><a (click)="sendInterview(cont.id,13)">{{out(cont, 'answer13', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer14', 'value')"><a (click)="sendInterview(cont.id,14)">{{out(cont, 'answer14', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer15', 'value')"><a (click)="sendInterview(cont.id,15)">{{out(cont, 'answer15', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer16', 'value')"><a (click)="sendInterview(cont.id,16)">{{out(cont, 'answer16', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer17', 'value')"><a (click)="sendInterview(cont.id,17)">{{out(cont, 'answer17', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer18', 'value')"><a (click)="sendInterview(cont.id,18)">{{out(cont, 'answer18', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer19', 'value')"><a (click)="sendInterview(cont.id,19)">{{out(cont, 'answer19', 'value')}}</a></li>
            <li *ngIf="out(cont, 'answer20', 'value')"><a (click)="sendInterview(cont.id,20)">{{out(cont, 'answer20', 'value')}}</a></li>
          </ul>
        </div>
        <div *ngIf="cont.ready || cont.was">
          <div class="member-skills">
            <p *ngIf="out(cont, 'answer1', 'value')">{{out(cont, 'answer1', 'value')}} - {{out(cont, 'result1', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer1', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result1', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer2', 'value')">{{out(cont, 'answer2', 'value')}} - {{out(cont, 'result2', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer2', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result2', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer3', 'value')">{{out(cont, 'answer3', 'value')}} - {{out(cont, 'result3', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer3', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result3', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer4', 'value')">{{out(cont, 'answer4', 'value')}} - {{out(cont, 'result4', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer4', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result4', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer5', 'value')">{{out(cont, 'answer5', 'value')}} - {{out(cont, 'result5', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer5', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result5', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer6', 'value')">{{out(cont, 'answer6', 'value')}} - {{out(cont, 'result6', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer6', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result6', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer7', 'value')">{{out(cont, 'answer7', 'value')}} - {{out(cont, 'result7', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer7', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result7', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer8', 'value')">{{out(cont, 'answer8', 'value')}} - {{out(cont, 'result8', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer8', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result8', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer9', 'value')">{{out(cont, 'answer9', 'value')}} - {{out(cont, 'result9', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer9', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result9', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer10', 'value')">{{out(cont, 'answer10', 'value')}} - {{out(cont, 'result10', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer10', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result10', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer11', 'value')">{{out(cont, 'answer11', 'value')}} - {{out(cont, 'result11', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer11', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result11', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer12', 'value')">{{out(cont, 'answer12', 'value')}} - {{out(cont, 'result12', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer12', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result12', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer13', 'value')">{{out(cont, 'answer13', 'value')}} - {{out(cont, 'result13', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer13', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result13', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer14', 'value')">{{out(cont, 'answer14', 'value')}} - {{out(cont, 'result14', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer14', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result14', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer15', 'value')">{{out(cont, 'answer15', 'value')}} - {{out(cont, 'result15', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer15', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result15', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer16', 'value')">{{out(cont, 'answer16', 'value')}} - {{out(cont, 'result16', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer16', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result16', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer17', 'value')">{{out(cont, 'answer17', 'value')}} - {{out(cont, 'result17', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer17', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result17', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer18', 'value')">{{out(cont, 'answer18', 'value')}} - {{out(cont, 'result18', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer18', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result18', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer19', 'value')">{{out(cont, 'answer19', 'value')}} - {{out(cont, 'result19', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer19', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result19', 'value'),summ(cont)) + '%'"></p>
            </div>
            <p *ngIf="out(cont, 'answer20', 'value')">{{out(cont, 'answer20', 'value')}} - {{out(cont, 'result20', 'value') || 0}}</p>
            <div *ngIf="out(cont, 'answer20', 'value')" class="meter nostrips design">
              <p [style.width]="getPercent(out(cont, 'result20', 'value'),summ(cont)) + '%'"></p>
            </div>
          </div>
        </div>
        <a style="float:right" (click)="routing('/arhiveInterview')">Архив опросов
        </a>
      </div>
    </div>`,
    styles: [
        'ul {padding: 10px ;}' +
        'ul.interview li {list-style: none;color: #666666;font-size: 13px;font-family: "Lato", sans-serif;margin-right: 3px;margin-bottom: 2px;}' +
        'ul.interview li a {display: inline-block; text-decoration: none;transition: all 0.2s ease-in-out;-moz-transition: all 0.2s ease-in-out;-webkit-transition: all 0.2s ease-in-out;-o-transition: all 0.2s ease-in-out; padding: 6px 10px; border: 1px solid #efefef; -webkit-border-radius: 2px;-moz-border-radius: 2px;-o-border-radius: 2px;border-radius: 2px;color: #999999;font-size: 12px;font-family: "Lato", sans-serif;}' +
        'ul.interview li a:hover {background: #f44336;border: 1px solid #f44336;color: #ffffff;}' +
        '.member-skills {padding: 20px 20px;margin-bottom: 15px;overflow: hidden;}' +
        '.member-skills > p {color: #222222;margin-bottom: 16px;}' +
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
                console.log(component)
                this.content = component.content;
                this.content.forEach((item) => {
                    item.summ = this.summ(item);
                    item.value.result
                    item.ready = this.getCookie(item.id);
                })
                this.title = component.title;
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
        interview.value.result6[0].value = parseInt(interview.value.result6[0].value) || 0;
        interview.value.result7[0].value = parseInt(interview.value.result7[0].value) || 0;
        interview.value.result8[0].value = parseInt(interview.value.result8[0].value) || 0;
        interview.value.result9[0].value = parseInt(interview.value.result9[0].value) || 0;
        interview.value.result10[0].value = parseInt(interview.value.result10[0].value) || 0;
        interview.value.result11[0].value = parseInt(interview.value.result11[0].value) || 0;
        interview.value.result12[0].value = parseInt(interview.value.result12[0].value) || 0;
        interview.value.result13[0].value = parseInt(interview.value.result13[0].value) || 0;
        interview.value.result14[0].value = parseInt(interview.value.result14[0].value) || 0;
        interview.value.result15[0].value = parseInt(interview.value.result15[0].value) || 0;
        interview.value.result16[0].value = parseInt(interview.value.result16[0].value) || 0;
        interview.value.result17[0].value = parseInt(interview.value.result17[0].value) || 0;
        interview.value.result18[0].value = parseInt(interview.value.result18[0].value) || 0;
        interview.value.result19[0].value = parseInt(interview.value.result19[0].value) || 0;
        interview.value.result20[0].value = parseInt(interview.value.result20[0].value) || 0;
        return interview.value.result1[0].value + interview.value.result2[0].value + interview.value.result3[0].value + interview.value.result4[0].value + interview.value.result5[0].value + interview.value.result6[0].value + interview.value.result7[0].value + interview.value.result8[0].value + interview.value.result9[0].value + interview.value.result10[0].value + interview.value.result11[0].value + interview.value.result12[0].value + interview.value.result13[0].value + interview.value.result14[0].value + interview.value.result15[0].value + interview.value.result16[0].value + interview.value.result17[0].value + interview.value.result18[0].value + interview.value.result19[0].value + interview.value.result20[0].value;
    }

    getPercent(value: number, summ: number) {
        if (!value) return 0;
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
;
