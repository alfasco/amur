import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'HeaderAdvertisementComponent',
    providers: [ComponentService],
    templateUrl: 'templates/components/content/HeaderAdvertisementComponent.html'
})
export class HeaderAdvertisementComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component[0];
            },
            error => console.log(<any>error));
    }
};
