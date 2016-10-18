import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'HeaderMenuComponent',
    providers: [ComponentService],
    template: `
    <ul class="nav navbar-nav navbar-left">
        <li class="drop" *ngFor="let menu of content">
            <a [class]="menu.color" routerLink="{{menu.link}}">{{menu.value}}</a>
            <ul [class]="'dropdown ' + menu.color + '-dropdown'" *ngIf="menu.sub">
                <li *ngFor="let sub of menu.sub">
                    <a routerLink="{{sub.link}}">{{sub.value}}</a>
                </li>
            </ul>
        </li>
    </ul>`
})
export class HeaderMenuComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content;
                setTimeout(() => {
                    $('#mainPreloader').remove();
                    $('my-app').removeClass('hide');
                }, 500)
            },
            error => console.log(<any>error));
    }
};
