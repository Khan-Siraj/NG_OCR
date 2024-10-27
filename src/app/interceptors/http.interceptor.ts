import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith('api/')){
    const updatedReq = req.clone({
      url: `${environment.API_URL}${req.url}`
    })
    return next(updatedReq);
  }
  return next(req);
};
