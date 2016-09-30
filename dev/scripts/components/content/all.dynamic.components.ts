// make all parts as one DYNAMIC_DIRECTIVES
import { forwardRef }   from '@angular/core';

import { FullSliderComponent }   from './Full/FullSliderComponent';

import { MainView1Component }   from './Main/MainView1Component';
import { MainView2Component }   from './Main/MainView2Component';
import { MainGalleryComponent }   from './Main/MainGalleryComponent';
import { MainVideoComponent }   from './Main/MainVideoComponent';
import { MainList1Component }   from './Main/MainList1Component';
import { MainBlogsComponent }   from './Main/MainBlogsComponent';
import { MainSinglePostComponent }   from './Main/MainSinglePostComponent';
import { MainAdvertisementComponent }   from './Main/MainAdvertisementComponent';

import { WidgetSocialComponent }   from './Widgets/WidgetSocialComponent';
import { WidgetAdvertisementComponent }   from './Widgets/WidgetAdvertisementComponent';
import { WidgetCommentsComponent }   from './Widgets/WidgetCommentsComponent';
import { WidgetSubscribeComponent }   from './Widgets/WidgetSubscribeComponent';
import { WidgetVideoComponent }   from './Widgets/WidgetVideoComponent';
import { WidgetAfishaComponent }   from './Widgets/WidgetAfishaComponent';
import { WidgetTagsComponent }   from './Widgets/WidgetTagsComponent';
import { WidgetBlogsComponent }   from './Widgets/WidgetBlogsComponent';

export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => FullSliderComponent),

    forwardRef(() => MainView1Component),
    forwardRef(() => MainView2Component),
    forwardRef(() => MainGalleryComponent),
    forwardRef(() => MainVideoComponent),
    forwardRef(() => MainList1Component),
    forwardRef(() => MainBlogsComponent),
    forwardRef(() => MainSinglePostComponent),
    forwardRef(() => MainAdvertisementComponent),

    forwardRef(() => WidgetSocialComponent),
    forwardRef(() => WidgetAdvertisementComponent),
    forwardRef(() => WidgetCommentsComponent),
    forwardRef(() => WidgetSubscribeComponent),
    forwardRef(() => WidgetVideoComponent),
    forwardRef(() => WidgetAfishaComponent),
    forwardRef(() => WidgetTagsComponent),
    forwardRef(() => WidgetBlogsComponent),
];

// module itself
import { NgModule }      from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule }   from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DYNAMIC_DIRECTIVES
    ],
    exports: [
        DYNAMIC_DIRECTIVES,
        CommonModule,
        FormsModule
    ]
})
export class PartsModule {

    static forRoot() {
        return {
            ngModule: PartsModule,
            providers: [], // not used here, but if singleton needed
        };
    }
}
