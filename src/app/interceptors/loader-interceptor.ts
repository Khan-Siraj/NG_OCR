// loader.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../common/loader/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("loading interceptor calles...")
  const loaderService = inject(LoaderService);
  loaderService.show();

  return next(req).pipe(
    finalize(() => loaderService.hide())  // Hide loader when the request completes
  );
};
