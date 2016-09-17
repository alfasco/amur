import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainView1Component',
    providers: [ComponentService],
    templateUrl: 'templates/components/content/MainView1Component.html'
})
export class MainView1Component implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = '';

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = 'Новости'
                this.content = [[component[0], [component[1], component[2], component[3]]], [component[4], [component[5], component[6], component[7]]]];
            },
            error => console.log(<any>error));
    }
};
