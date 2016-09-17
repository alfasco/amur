import { forwardRef }   from '@angular/core';

import { HeaderAdvertisementComponent }   from './HeaderAdvertisementComponent';

import { FullSliderComponent }   from './FullSliderComponent';

import { MainGalleryComponent }   from './MainGalleryComponent';
import { MainList1Component }   from './MainList1Component';
import { MainView2Component }   from './MainView2Component';
import { MainView1Component }   from './MainView1Component';
import { WidgetAdvertisementComponent }   from './WidgetAdvertisementComponent';
import { WidgetViewComponent }   from './WidgetViewComponent';
import { WidgetSubscribeComponent }   from './WidgetSubscribeComponent';
import { WidgetSocialComponent }   from './WidgetSocialComponent';
import { WidgetCommentsComponent }   from './WidgetCommentsComponent';
import { WidgetVideoComponent }   from './WidgetVideoComponent';
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
    MainList1Component,
    MainGalleryComponent,
    MainView1Component,
    MainView2Component,
    WidgetAdvertisementComponent,
    WidgetViewComponent,
    WidgetSubscribeComponent,
    WidgetCommentsComponent,
    WidgetSocialComponent,
    WidgetVideoComponent,
    MainVideoComponent
];
