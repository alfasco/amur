import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainCommentsComponent',
    providers: [ComponentService],
    template: `
    <div class="title-section">
      <h1><span></span></h1>
    </div>
    <div id="hypercomments_widget"></div>
      <a href="http://hypercomments.com" class="hc-link" title="comments widget">comments powered by HyperComments</a>`
})
export class MainCommentsComponent implements OnInit {
    @Input() public idComponent: string;

    constructor(private component: ComponentService) {
    }

    ngOnInit() {
        //   startComment();

        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log(component)
            },
            error => console.log(<any>error));
    }
};
