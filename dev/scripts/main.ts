import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './boot/module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
