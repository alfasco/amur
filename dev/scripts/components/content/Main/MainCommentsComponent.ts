import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'MainCommentsComponent',
    template: `
    <div id="hypercomments_widget"></div>
      <a href="http://hypercomments.com" class="hc-link" title="comments widget">comments powered by HyperComments</a>`
})
export class MainCommentsComponent implements OnInit {
    @Input() public idComponent: string;

    constructor() {
    }

    ngOnInit() {
        startComment();
    }
};
