// make all parts as one DYNAMIC_DIRECTIVES
import { forwardRef }   from '@angular/core';

import { HeaderAdvertisementComponent }   from './Header/HeaderAdvertisementComponent';
import { HeaderMenuComponent }   from './Header/HeaderMenuComponent';

export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => HeaderAdvertisementComponent),
    forwardRef(() => HeaderMenuComponent),
];
