import {Component, Input} from '@angular/core';

@Component({
    selector: 'MainVideoComponent',
    templateUrl: 'templates/components/content/MainVideoComponent.html'
})
export class MainVideoComponent {
    @Input() public idComponent: string;
};
