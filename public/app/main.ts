import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {HomeComponent} from './components/home.component'

platformBrowserDynamic().bootstrapModule(AppModule);
