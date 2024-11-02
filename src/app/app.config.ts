import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { httpInterceptor } from './interceptors/http.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptorInterceptor } from './interceptors/error-interceptor.interceptor';
import { loaderInterceptor } from './interceptors/loader-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([httpInterceptor,errorInterceptorInterceptor,loaderInterceptor])
    )
  ],
};
