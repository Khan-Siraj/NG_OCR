import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CovertComponent } from './covert/covert.component';
import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : "langing-page",
        pathMatch : "full"
    },
    {
        path : 'langing-page',
        component : LandingPageComponent
    },
    {
        path : "convert",
        component : CovertComponent
    },
    {
        path : "example",
        component : ExampleComponent
    }
];
