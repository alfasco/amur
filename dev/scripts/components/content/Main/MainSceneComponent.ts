import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';
import {Location} from '@angular/common';

@Component({
    selector: 'MainSceneComponent',
    providers: [ComponentService],
    template: `
    <div class="single-post-box" *ngIf="content">
      <div class="title-post">
        <h1>{{out(content,'title','value')}}</h1>
      </div>
      <div class="share-post-box">
        <div id="my-share" class="ya-share2" data-services="collections,vkontakte,facebook,odnoklassniki,moimir,whatsapp,telegram"></div>
      </div>

      <div class="post-content">
        <div class="row">
          <div class="col-md-4">
            <img src="http://portamur.alfasco.ru{{out(content,'img','value')}}">
          </div>
          <div class="col-md-8">
            <h4 style="padding:0 20px;">
              {{out(content,'genre','value')}}, {{out(content,'old','value')}}
            </h4>
            <p><b>{{out(content,'operator','title')}}:</b> {{out(content,'operator','value')}}</p>
            <p><b>{{out(content,'director','title')}}:</b> {{out(content,'director','value')}}</p>
            <p><b>{{out(content,'actors','title')}}:</b> {{out(content,'actors','value')}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>{{out(content,'description','value')}}</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1><span>Место и время проведения</span></h1>
            </div>
            <h4>{{out(session,'theater','value')}} <small>- {{out(session,'datestart','value')}} {{out(session,'timestart','value')}}</small></h4>
          </div>
        </div>
      </div>

    </div>`,
    styles: [
        '.single-post-box .about-more-autor ul.nav-tabs li {width: 33.33333333%;}'
    ]
})
export class MainSceneComponent implements OnInit {
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
                this.session = component.session[0];


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
