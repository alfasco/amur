import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'MainListTVComponent',
    providers: [ComponentService],
    template: `
    <div class="grid-box single-post-box" *ngIf="content">
  		<div class="title-section">
  			<h1><span class="video">{{title}}</span></h1>
  		</div>

      <div class="about-more-autor">
        <ul class="nav nav-tabs">
          <li *ngFor="let day of content; let i = index;" [class.active]="i==0">
            <a href="#{{i}}" data-toggle="tab" aria-expanded="true">{{day.date}}</a>
          </li>
        </ul>

        <div class="tab-content">

          <div class="tab-pane" id="{{i}}" style="padding-top:20px;" *ngFor="let day of content; let i = index;" [class.active]="i==0">
            <div class="row">
              <div class="col-md-6" *ngFor="let channel of day.channels;">
                <p><b>{{channel.channel}}</b></p>
                <p style="padding:0px; margin:0px;" *ngFor="let session of channel.sessions">{{session}}</p>
              </div>
            <div>
          </div>

        </div>
      </div>
  	</div>`,
    styles: [
        '.single-post-box .about-more-autor ul.nav-tabs li {width: 14.2857%;}'
    ]
})
export class MainListTVComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title: any;
    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                this.content = component.content;
                console.log(component)
            },
            error => console.log(<any>error));
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
