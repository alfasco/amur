import { forwardRef }   from '@angular/core';

import { HeaderAdvertisementComponent }   from './HeaderAdvertisementComponent';

import { FullSliderComponent }   from './FullSliderComponent';

import { MainGalleryComponent }   from './MainGalleryComponent';
import { MainView2Component }   from './MainView2Component';
import { MainView1Component }   from './MainView1Component';
import { WidgetViewComponent }   from './WidgetViewComponent';
import { WidgetSubscribeComponent }   from './WidgetSubscribeComponent';
import { WidgetSocialComponent }   from './WidgetSocialComponent';
import { WidgetCommentsComponent }   from './WidgetCommentsComponent';
import { MainVideoComponent }   from './MainVideoComponent';

// export const DYNAMIC_DIRECTIVES = [
//     forwardRef(() => FullSliderComponent)
//     forwardRef(() => MainGalleryComponent)
//     forwardRef(() => MainView1Component)
//     forwardRef(() => MainView2Component)
// ];


export const DYNAMIC_DIRECTIVES = [
    HeaderAdvertisementComponent,
    FullSliderComponent,
    MainGalleryComponent,
    MainView1Component,
    MainView2Component,
    WidgetViewComponent,
    WidgetSubscribeComponent,
    WidgetCommentsComponent,
    WidgetSocialComponent,
    MainVideoComponent
];
