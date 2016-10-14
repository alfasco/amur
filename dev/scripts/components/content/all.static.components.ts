// make all parts as one DYNAMIC_DIRECTIVES
import { forwardRef }   from '@angular/core';

import { HeaderAdvertisementComponent }   from './Header/HeaderAdvertisementComponent';
import { HeaderMenuComponent }   from './Header/HeaderMenuComponent';
import { HeaderTopComponent }   from './Header/HeaderTopComponent';

import { FooterAboutComponent }   from './Footer/FooterAboutComponent';
import { FooterSocialComponent }   from './Footer/FooterSocialComponent';
import { FooterRandomPostComponent }   from './Footer/FooterRandomPostComponent';
import { FooterHotCategoriesComponent }   from './Footer/FooterHotCategoriesComponent';
import { FooterFotosComponent }   from './Footer/FooterFotosComponent';

export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => HeaderAdvertisementComponent),
    forwardRef(() => HeaderMenuComponent),
    forwardRef(() => HeaderTopComponent),

    forwardRef(() => FooterAboutComponent),
    forwardRef(() => FooterSocialComponent),
    forwardRef(() => FooterRandomPostComponent),
    forwardRef(() => FooterHotCategoriesComponent),
    forwardRef(() => FooterFotosComponent),
];
