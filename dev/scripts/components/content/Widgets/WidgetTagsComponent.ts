import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetTagsComponent',
    providers: [ComponentService],
    template: `
    <div class="widget tags-widget">

      <div class="title-section">
        <h1><span>{{title}}</span></h1>
      </div>

      <ul class="tag-list">
        <li><a href="#">News</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Politics</a></li>
        <li><a href="#">Sport</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Music</a></li>
      </ul>

    </div>`
})
export class WidgetTagsComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];
    public title = ''

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.title = component.title;
                console.log(component.content)
                this.content = component.content;
            }, error => console.log(<any>error));
    }
};
