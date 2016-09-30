import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FooterHotCategoriesComponent',
    providers: [ComponentService],
    template: `
    <div class="widget categories-widget">
        <h1>Популярные разделы</h1>
        <ul class="category-list">
            <li>
                <a href="#">Business <span>12</span></a>
            </li>
            <li>
                <a href="#">Sport <span>26</span></a>
            </li>
            <li>
                <a href="#">LifeStyle <span>55</span></a>
            </li>
            <li>
                <a href="#">Fashion <span>37</span></a>
            </li>
            <li>
                <a href="#">Technology <span>62</span></a>
            </li>
            <li>
                <a href="#">Music <span>10</span></a>
            </li>
            <li>
                <a href="#">Culture <span>43</span></a>
            </li>
            <li>
                <a href="#">Design <span>74</span></a>
            </li>
            <li>
                <a href="#">Entertainment <span>11</span></a>
            </li>
            <li>
                <a href="#">video <span>41</span></a>
            </li>
            <li>
                <a href="#">Travel <span>11</span></a>
            </li>
            <li>
                <a href="#">Food <span>29</span></a>
            </li>
        </ul>
    </div>`
})
export class FooterHotCategoriesComponent implements OnInit {
    @Input() public idComponent: string;
    public content: any;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = component.content[0];
            },
            error => console.log(<any>error));
    }
};
