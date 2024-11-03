import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith('api/')){
    const updatedReq = req.clone({
      url: `${environment.API_URL}${req.url}`
    })
    return next(updatedReq);
  }
  return next(req);
};
