import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs';

import { MainModule } from './main.module';

platformBrowserDynamic().bootstrapModule(MainModule);
