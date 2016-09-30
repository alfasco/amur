import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetCommentsComponent',
    providers: [ComponentService],
    template: `
    <div class="widget recent-comments-widget">
        <div id="hypercomments_mix"></div>
    </div>`
})
export class WidgetCommentsComponent implements OnInit {
    @Input() public idComponent: string;

    ngOnInit() {
        startCommentRecent()
    }
};
