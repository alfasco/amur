import {Component, Input} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetSubscribeComponent',
    providers: [ComponentService],
    template: `
    <div class="widget subscribe-widget">
        <form class="subscribe-form" *ngIf="!ready">
            <h1>Подписшитесь на новости</h1>
            <input type="text" name="sumbscribe" id="subscribe" placeholder="Email" [(ngModel)]="email.value"/>
            <button id="submit-subscribe" (click)="send()">
    										<i class="fa fa-arrow-circle-right"></i>
    									</button>
            <p>Получайте все актуальные новости и статитьи на свою почту несколько раз в месяц.</p>
        </form>
        <h1 *ngIf="ready">Подписка оформлена!</h1>
    </div>`
})
export class WidgetSubscribeComponent {
    @Input() public idComponent: string;
    public ready: any;
    public email = {
        value: ''
    };

    constructor(private component: ComponentService) { }

    send() {
        $.ajax({
            url: 'http://portamur.alfasco.ru/api/v1/post/subscribe/?id=' + this.email.value
        }).done(() => {
            this.ready = true;
        })
    }
};
